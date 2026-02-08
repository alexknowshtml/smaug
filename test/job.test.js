import { test, describe } from 'node:test';
import assert from 'node:assert';
import path from 'path';
import { findZai, getPathSeparator, resolveZaiBinary } from '../src/job.js';

describe('findZai', () => {
  describe('Unix/macOS', () => {
    test('returns default "zai" when no paths exist and which fails', () => {
      const result = findZai({
        platform: 'darwin',
        env: { HOME: '/Users/test' },
        existsSync: () => false,
        execSyncFn: () => { throw new Error('not found'); }
      });
      assert.strictEqual(result, 'zai');
    });

    test('finds zai in /usr/local/bin', () => {
      const result = findZai({
        platform: 'darwin',
        env: { HOME: '/Users/test' },
        existsSync: (p) => p === '/usr/local/bin/zai',
        execSyncFn: () => { throw new Error('not found'); }
      });
      assert.strictEqual(result, '/usr/local/bin/zai');
    });

    test('finds zai in homebrew path', () => {
      const result = findZai({
        platform: 'darwin',
        env: { HOME: '/Users/test' },
        existsSync: (p) => p === '/opt/homebrew/bin/zai',
        execSyncFn: () => { throw new Error('not found'); }
      });
      assert.strictEqual(result, '/opt/homebrew/bin/zai');
    });

    test('finds zai via which command', () => {
      const result = findZai({
        platform: 'darwin',
        env: { HOME: '/Users/test' },
        existsSync: () => false,
        execSyncFn: (cmd) => {
          assert.strictEqual(cmd, 'which zai');
          return '/some/custom/path/zai\n';
        }
      });
      assert.strictEqual(result, '/some/custom/path/zai');
    });

    test('uses which (not where) on Unix', () => {
      let commandUsed = null;
      findZai({
        platform: 'linux',
        env: { HOME: '/home/test' },
        existsSync: () => false,
        execSyncFn: (cmd) => {
          commandUsed = cmd;
          throw new Error('not found');
        }
      });
      assert.strictEqual(commandUsed, 'which zai');
    });
  });

  describe('Windows', () => {
    test('checks Windows-specific paths on win32', () => {
      const checkedPaths = [];
      findZai({
        platform: 'win32',
        env: {
          HOME: 'C:\\Users\\test',
          APPDATA: 'C:\\Users\\test\\AppData\\Roaming',
          LOCALAPPDATA: 'C:\\Users\\test\\AppData\\Local',
          USERPROFILE: 'C:\\Users\\test',
          PROGRAMFILES: 'C:\\Program Files'
        },
        existsSync: (p) => {
          checkedPaths.push(p);
          return false;
        },
        execSyncFn: () => { throw new Error('not found'); }
      });

      // Should check Windows paths
      assert.ok(
        checkedPaths.some(p => p.includes('npm') && p.includes('zai.cmd')),
        'should check npm zai.cmd path'
      );
      assert.ok(
        checkedPaths.some(p => p.includes('zai.exe')),
        'should check .exe paths'
      );
    });

    test('finds zai.cmd in npm directory', () => {
      // Note: path.join on Unix will use forward slashes, so we need to match
      // what path.join actually produces, not Windows-native paths
      const appdata = 'C:\\Users\\test\\AppData\\Roaming';
      const expectedPath = path.join(appdata, 'npm', 'zai.cmd');
      const result = findZai({
        platform: 'win32',
        env: {
          HOME: 'C:\\Users\\test',
          APPDATA: appdata,
          LOCALAPPDATA: 'C:\\Users\\test\\AppData\\Local',
          USERPROFILE: 'C:\\Users\\test',
          PROGRAMFILES: 'C:\\Program Files'
        },
        existsSync: (p) => p === expectedPath,
        execSyncFn: () => { throw new Error('not found'); }
      });
      assert.strictEqual(result, expectedPath);
    });

    test('uses where (not which) on Windows', () => {
      let commandUsed = null;
      findZai({
        platform: 'win32',
        env: {
          HOME: 'C:\\Users\\test',
          APPDATA: 'C:\\Users\\test\\AppData\\Roaming',
          LOCALAPPDATA: 'C:\\Users\\test\\AppData\\Local',
          USERPROFILE: 'C:\\Users\\test',
          PROGRAMFILES: 'C:\\Program Files'
        },
        existsSync: () => false,
        execSyncFn: (cmd) => {
          commandUsed = cmd;
          throw new Error('not found');
        }
      });
      assert.strictEqual(commandUsed, 'where zai');
    });

    test('handles where returning multiple lines (takes first)', () => {
      const result = findZai({
        platform: 'win32',
        env: {
          HOME: 'C:\\Users\\test',
          APPDATA: 'C:\\Users\\test\\AppData\\Roaming',
          LOCALAPPDATA: 'C:\\Users\\test\\AppData\\Local',
          USERPROFILE: 'C:\\Users\\test',
          PROGRAMFILES: 'C:\\Program Files'
        },
        existsSync: () => false,
        execSyncFn: () => 'C:\\First\\Path\\zai.cmd\nC:\\Second\\Path\\zai.cmd\n'
      });
      assert.strictEqual(result, 'C:\\First\\Path\\zai.cmd');
    });
  });
});

describe('getPathSeparator', () => {
  test('returns semicolon for Windows', () => {
    assert.strictEqual(getPathSeparator('win32'), ';');
  });

  test('returns colon for macOS', () => {
    assert.strictEqual(getPathSeparator('darwin'), ':');
  });

  test('returns colon for Linux', () => {
    assert.strictEqual(getPathSeparator('linux'), ':');
  });

  test('returns colon for unknown platforms', () => {
    assert.strictEqual(getPathSeparator('freebsd'), ':');
  });
});

describe('resolveZaiBinary', () => {
  test('auto-detects when config uses default "zai"', () => {
    let called = 0;
    const result = resolveZaiBinary('zai', () => {
      called += 1;
      return '/detected/zai';
    });
    assert.strictEqual(called, 1);
    assert.strictEqual(result, '/detected/zai');
  });

  test('auto-detects when config value is missing', () => {
    let called = 0;
    const result = resolveZaiBinary(undefined, () => {
      called += 1;
      return '/detected/zai';
    });
    assert.strictEqual(called, 1);
    assert.strictEqual(result, '/detected/zai');
  });

  test('uses explicit configured path when provided', () => {
    const result = resolveZaiBinary('/custom/bin/zai', () => {
      throw new Error('finder should not be called');
    });
    assert.strictEqual(result, '/custom/bin/zai');
  });

  test('trims and still auto-detects default "zai"', () => {
    let called = 0;
    const result = resolveZaiBinary('  zai  ', () => {
      called += 1;
      return '/detected/zai';
    });
    assert.strictEqual(called, 1);
    assert.strictEqual(result, '/detected/zai');
  });
});
