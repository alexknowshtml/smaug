import { test, describe } from 'node:test';
import assert from 'node:assert';
import path from 'path';
import os from 'os';
import {
  validatePositiveInteger,
  validateNumericString,
  validateBinaryPath,
  generateSecureTempFile,
  validateTimeout,
  TIMEOUTS,
  LIMITS
} from '../src/validators.js';

describe('validatePositiveInteger', () => {
  test('accepts positive integers', () => {
    assert.strictEqual(validatePositiveInteger(1), 1);
    assert.strictEqual(validatePositiveInteger(100), 100);
    assert.strictEqual(validatePositiveInteger('42'), 42);
  });

  test('rejects zero and negative numbers', () => {
    assert.throws(() => validatePositiveInteger(0), /must be a positive integer/);
    assert.throws(() => validatePositiveInteger(-1), /must be a positive integer/);
    assert.throws(() => validatePositiveInteger('-5'), /must be a positive integer/);
  });

  test('rejects non-integers', () => {
    assert.throws(() => validatePositiveInteger(1.5), /must be a positive integer/);
    assert.throws(() => validatePositiveInteger('abc'), /must be a positive integer/);
    assert.throws(() => validatePositiveInteger(null), /must be a positive integer/);
  });
});

describe('validateNumericString', () => {
  test('accepts numeric strings', () => {
    assert.strictEqual(validateNumericString('123'), '123');
    assert.strictEqual(validateNumericString('0'), '0');
    assert.strictEqual(validateNumericString(456), '456');
  });

  test('rejects non-numeric strings', () => {
    assert.throws(() => validateNumericString('abc'), /must contain only digits/);
    assert.throws(() => validateNumericString('12a34'), /must contain only digits/);
    assert.throws(() => validateNumericString('12.34'), /must contain only digits/);
    assert.throws(() => validateNumericString('-123'), /must contain only digits/);
  });

  test('rejects strings with shell metacharacters', () => {
    assert.throws(() => validateNumericString('123; rm -rf'), /must contain only digits/);
    assert.throws(() => validateNumericString('123 && echo'), /must contain only digits/);
  });
});

describe('validateBinaryPath', () => {
  test('accepts simple command names', () => {
    assert.strictEqual(validateBinaryPath('bird'), 'bird');
    assert.strictEqual(validateBinaryPath('zai'), 'zai');
    assert.strictEqual(validateBinaryPath('node'), 'node');
  });

  test('accepts absolute paths', () => {
    assert.strictEqual(validateBinaryPath('/usr/bin/bird'), '/usr/bin/bird');
    assert.strictEqual(validateBinaryPath('/opt/homebrew/bin/zai'), '/opt/homebrew/bin/zai');
  });

  test('accepts relative paths with ./ or ../', () => {
    assert.strictEqual(validateBinaryPath('./bird'), './bird');
    assert.strictEqual(validateBinaryPath('../bin/zai'), '../bin/zai');
    assert.strictEqual(validateBinaryPath('./node_modules/.bin/cli'), './node_modules/.bin/cli');
  });

  test('rejects paths with shell metacharacters', () => {
    assert.throws(() => validateBinaryPath('bird; rm -rf /'), /illegal shell metacharacters/);
    assert.throws(() => validateBinaryPath('bird && echo'), /illegal shell metacharacters/);
    assert.throws(() => validateBinaryPath('bird | cat'), /illegal shell metacharacters/);
    assert.throws(() => validateBinaryPath('bird `whoami`'), /illegal shell metacharacters/);
    assert.throws(() => validateBinaryPath('bird $(echo)'), /illegal shell metacharacters/);
    assert.throws(() => validateBinaryPath('bird > file'), /illegal shell metacharacters/);
    assert.throws(() => validateBinaryPath('bird < file'), /illegal shell metacharacters/);
  });

  test('rejects paths with control characters', () => {
    assert.throws(() => validateBinaryPath('bird\nrm'), /illegal control characters/);
    assert.throws(() => validateBinaryPath('bird\r\nrm'), /illegal control characters/);
    assert.throws(() => validateBinaryPath('bird\0'), /illegal control characters/);
  });

  test('rejects invalid relative paths', () => {
    assert.throws(() => validateBinaryPath('bin/bird'), /must be a command name/);
    assert.throws(() => validateBinaryPath('~/bin/bird'), /must be a command name/);
  });

  test('rejects empty or non-string values', () => {
    assert.throws(() => validateBinaryPath(''), /must be a non-empty string/);
    assert.throws(() => validateBinaryPath('   '), /must be a non-empty string/);
    assert.throws(() => validateBinaryPath(null), /must be a non-empty string/);
    assert.throws(() => validateBinaryPath(undefined), /must be a non-empty string/);
  });
});

describe('generateSecureTempFile', () => {
  test('generates unique temp file paths', () => {
    const file1 = generateSecureTempFile();
    const file2 = generateSecureTempFile();
    
    assert.notStrictEqual(file1, file2);
    assert.ok(file1.includes('smaug'));
    assert.ok(file1.endsWith('.json'));
  });

  test('uses custom prefix and extension', () => {
    const file = generateSecureTempFile('test', 'txt');
    
    assert.ok(file.includes('test'));
    assert.ok(file.endsWith('.txt'));
  });

  test('generates cryptographically random names', () => {
    const file = generateSecureTempFile();
    const filename = path.basename(file);
    
    // Should have a 32-character hex string (16 bytes)
    assert.ok(/smaug-[a-f0-9]{32}\.json/.test(filename));
  });

  test('uses system temp directory', () => {
    const file = generateSecureTempFile();
    const tmpDir = os.tmpdir();
    
    assert.ok(file.startsWith(tmpDir) || file.startsWith(path.resolve(tmpDir)));
  });
});

describe('validateTimeout', () => {
  test('accepts valid timeouts', () => {
    assert.strictEqual(validateTimeout(1000), 1000);
    assert.strictEqual(validateTimeout(30000), 30000);
    assert.strictEqual(validateTimeout('60000'), 60000);
    assert.strictEqual(validateTimeout(3600000), 3600000);
  });

  test('rejects too small timeouts', () => {
    assert.throws(() => validateTimeout(500), /must be between 1000ms/);
    assert.throws(() => validateTimeout(999), /must be between 1000ms/);
  });

  test('rejects too large timeouts', () => {
    assert.throws(() => validateTimeout(3600001), /must be between 1000ms/);
    assert.throws(() => validateTimeout(7200000), /must be between 1000ms/);
  });

  test('rejects non-integer values', () => {
    assert.throws(() => validateTimeout(1500.5), /must be between 1000ms/);
    assert.throws(() => validateTimeout('abc'), /must be between 1000ms/);
  });
});

describe('TIMEOUTS constants', () => {
  test('exports expected timeout values', () => {
    assert.strictEqual(TIMEOUTS.BIRD_SEARCH, 30000);
    assert.strictEqual(TIMEOUTS.BIRD_READ, 15000);
    assert.strictEqual(TIMEOUTS.BIRD_FETCH, 60000);
    assert.strictEqual(TIMEOUTS.BIRD_FETCH_ALL, 180000);
    assert.strictEqual(TIMEOUTS.X_ARTICLE_FETCH, 15000);
    assert.strictEqual(TIMEOUTS.ZAI_PROCESS, 900000);
    assert.strictEqual(TIMEOUTS.LOCK_STALE, 1200000);
  });
});

describe('LIMITS constants', () => {
  test('exports expected limit values', () => {
    assert.strictEqual(LIMITS.MAX_PAGES, 100);
    assert.strictEqual(LIMITS.MIN_COUNT, 1);
    assert.strictEqual(LIMITS.MAX_COUNT, 10000);
  });
});
