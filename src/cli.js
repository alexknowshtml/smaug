#!/usr/bin/env node

/**
 * Smaug CLI
 *
 * Commands:
 *   setup    - Interactive setup wizard (recommended for first-time users)
 *   run      - Run the full job (fetch + process with Claude Code)
 *   fetch    - Fetch bookmarks and prepare them for processing
 *   process  - Process pending bookmarks with Claude Code
 *   status   - Show current configuration and status
 *   init     - Create a config file (non-interactive)
 */

import { fetchAndPrepareBookmarks } from './processor.js';
import { initConfig, loadConfig } from './config.js';
import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import readline from 'readline';
import { fileURLToPath, pathToFileURL } from 'url';

const args = process.argv.slice(2);
const command = args[0];

function prompt(question) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  return new Promise(resolve => {
    rl.question(question, answer => {
      rl.close();
      resolve(answer.trim());
    });
  });
}

async function setup() {
  console.log(`
🐉 Smaug Setup Wizard
━━━━━━━━━━━━━━━━━━━━━

This will set up Smaug to automatically archive your Twitter bookmarks.
`);

  // Step 1: Check for bird CLI with bookmarks support (v0.5.0+)
  console.log('Step 1: Checking for bird CLI...');
  try {
    const versionOutput = execSync('bird --version', { stdio: 'pipe', encoding: 'utf8' });
    const versionMatch = versionOutput.match(/(\d+)\.(\d+)\.(\d+)/);

    if (versionMatch) {
      const [, major, minor] = versionMatch.map(Number);
      if (major === 0 && minor < 5) {
        console.log(`  ✗ bird CLI v${versionMatch[0]} found, but v0.5.0+ required for bookmarks support

  Update it:
    npm install -g @steipete/bird@latest

  Or with Homebrew:
    brew upgrade steipete/tap/bird

  Then run this setup again.
`);
        process.exit(1);
      }
      console.log(`  ✓ bird CLI v${versionMatch[0]} found (bookmarks supported)\n`);
    } else {
      console.log('  ✓ bird CLI found\n');
    }
  } catch {
    console.log(`  ✗ bird CLI not found

  Install it:
    npm install -g @steipete/bird@latest

  Or with Homebrew:
    brew install steipete/tap/bird

  Then run this setup again.
`);
    process.exit(1);
  }

  // Step 2: Get Twitter credentials
  console.log(`Step 2: Twitter Authentication

  You need your Twitter cookies to fetch bookmarks.

  To get them:
  1. Open Twitter/X in your browser
  2. Press F12 to open Developer Tools
  3. Go to Application → Cookies → twitter.com
  4. Find 'auth_token' and 'ct0'
`);

  const authToken = await prompt('  Paste your auth_token: ');
  if (!authToken) {
    console.log('  ✗ auth_token is required');
    process.exit(1);
  }

  const ct0 = await prompt('  Paste your ct0: ');
  if (!ct0) {
    console.log('  ✗ ct0 is required');
    process.exit(1);
  }

  // Step 3: Test credentials
  console.log('\nStep 3: Testing credentials...');
  try {
    const env = { ...process.env, AUTH_TOKEN: authToken, CT0: ct0 };
    execSync('bird bookmarks -n 1 --json', { env, stdio: 'pipe', timeout: 30000 });
    console.log('  ✓ Credentials work!\n');
  } catch (error) {
    console.log(`  ✗ Could not fetch bookmarks. Check your credentials and try again.
  Error: ${error.message}
`);
    process.exit(1);
  }

  // Step 4: Create config
  console.log('Step 4: Creating configuration...');
  const config = {
    archiveFile: './bookmarks.md',
    pendingFile: './.state/pending-bookmarks.json',
    stateFile: './.state/bookmarks-state.json',
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone || 'America/New_York',
    twitter: {
      authToken,
      ct0
    },
    autoInvokeClaude: true,
    claudeModel: 'sonnet'
  };

  fs.writeFileSync('./smaug.config.json', JSON.stringify(config, null, 2) + '\n');
  console.log('  ✓ Created smaug.config.json\n');

  // Step 5: Ask about automation
  console.log('Step 5: Automation Setup\n');
  const wantsCron = await prompt('  Set up automatic fetching every 30 minutes? (y/n): ');

  if (wantsCron.toLowerCase() === 'y') {
    const cwd = process.cwd();
    const cronLine = `*/30 * * * * cd ${cwd} && npx smaug run >> ${cwd}/smaug.log 2>&1`;

    console.log(`
  Add this line to your crontab:

  ${cronLine}

  To edit your crontab, run:
    crontab -e

  Or use PM2 for a simpler setup:
    npm install -g pm2
    pm2 start "npx smaug run" --cron "*/30 * * * *" --name smaug
    pm2 save
`);
  }

  // Step 6: First fetch
  console.log('\nStep 6: Fetching your bookmarks...\n');

  try {
    const result = await fetchAndPrepareBookmarks({ count: 20 });

    if (result.count > 0) {
      console.log(`  ✓ Fetched ${result.count} bookmarks!\n`);
    } else {
      console.log('  ✓ No new bookmarks to fetch (your bookmark list may be empty)\n');
    }
  } catch (error) {
    console.log(`  Warning: Could not fetch bookmarks: ${error.message}\n`);
  }

  // Done!
  console.log(`
━━━━━━━━━━━━━━━━━━━━━
🐉 Setup Complete!
━━━━━━━━━━━━━━━━━━━━━

Your bookmarks will be saved to: ./bookmarks.md

Commands:
  npx smaug run    Run full job (fetch + process with Claude)
  npx smaug fetch  Fetch new bookmarks
  npx smaug status Check status

Happy hoarding! 🐉
`);
}

async function main() {
  switch (command) {
    case 'setup':
      await setup();
      break;

    case 'init':
      initConfig(args[1]);
      break;

    case 'run': {
      // Run the full job (same as node src/job.js)
      const jobPath = path.join(path.dirname(fileURLToPath(import.meta.url)), 'job.js');
      try {
        const jobModule = await import(pathToFileURL(jobPath).href);
        const result = await jobModule.default.run();
        process.exit(result.success ? 0 : 1);
      } catch (err) {
        console.error('Failed to run job:', err.message);
        process.exit(1);
      }
      break;
    }

    case 'fetch': {
      const count = parseInt(args.find(a => a.match(/^\d+$/)) || '20', 10);
      const specificIds = args.filter(a => a.match(/^\d{10,}$/));
      const force = args.includes('--force') || args.includes('-f');

      const result = await fetchAndPrepareBookmarks({
        count,
        specificIds: specificIds.length > 0 ? specificIds : null,
        force
      });

      if (result.count > 0) {
        console.log(`\n✓ Prepared ${result.count} bookmarks.`);
        console.log(`  Output: ${result.pendingFile}`);
        console.log('\nNext: Run `npx smaug run` to process with Claude');
      } else {
        console.log('\nNo new bookmarks to process.');
      }
      break;
    }

    case 'process': {
      const config = loadConfig();

      if (!fs.existsSync(config.pendingFile)) {
        console.log('No pending bookmarks. Run `smaug fetch` first.');
        process.exit(0);
      }

      const pending = JSON.parse(fs.readFileSync(config.pendingFile, 'utf8'));

      if (pending.bookmarks.length === 0) {
        console.log('No pending bookmarks to process.');
        process.exit(0);
      }

      console.log(`Found ${pending.bookmarks.length} pending bookmarks.\n`);
      console.log('To process them:');
      console.log('  npx smaug run\n');

      console.log('Pending:');
      for (const b of pending.bookmarks.slice(0, 5)) {
        console.log(`  • @${b.author}: ${b.text.slice(0, 50)}...`);
      }
      if (pending.bookmarks.length > 5) {
        console.log(`  ... and ${pending.bookmarks.length - 5} more`);
      }
      break;
    }

    case 'status': {
      const config = loadConfig();

      console.log('Smaug Status\n');
      console.log(`Archive:     ${config.archiveFile}`);
      console.log(`Twitter:     ${config.twitter?.authToken ? '✓ configured' : '✗ not configured'}`);
      console.log(`Auto-Claude: ${config.autoInvokeClaude ? 'enabled' : 'disabled'}`);

      if (fs.existsSync(config.pendingFile)) {
        const pending = JSON.parse(fs.readFileSync(config.pendingFile, 'utf8'));
        console.log(`Pending:     ${pending.bookmarks.length} bookmarks`);
      } else {
        console.log('Pending:     0 bookmarks');
      }

      if (fs.existsSync(config.stateFile)) {
        const state = JSON.parse(fs.readFileSync(config.stateFile, 'utf8'));
        console.log(`Last fetch:  ${state.last_check || 'never'}`);
      }

      if (fs.existsSync(config.archiveFile)) {
        const content = fs.readFileSync(config.archiveFile, 'utf8');
        const entryCount = (content.match(/^## @/gm) || []).length;
        console.log(`Archived:    ${entryCount} bookmarks`);
      }
      break;
    }

    case 'help':
    case '--help':
    case '-h':
    default:
      console.log(`
🐉 Smaug - Twitter Bookmarks Archiver

Commands:
  setup          Interactive setup wizard (start here!)
  run            Run the full job (fetch + process with Claude)
  fetch [n]      Fetch n bookmarks (default: 20)
  fetch --force  Re-fetch even if already archived
  process        Show pending bookmarks
  status         Show current status

Examples:
  smaug setup              # First-time setup
  smaug run                # Run full automation
  smaug fetch              # Fetch latest bookmarks
  smaug fetch 50           # Fetch 50 bookmarks
  smaug fetch --force      # Re-process archived bookmarks

More info: https://github.com/alexknowshtml/smaug
`);
      break;
  }
}

main().catch(err => {
  console.error('Error:', err.message);
  process.exit(1);
});
