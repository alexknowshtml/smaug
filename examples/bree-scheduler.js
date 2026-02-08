/**
 * Example: Running Smaug with Bree Scheduler
 *
 * Bree is a Node.js job scheduler with worker threads, cron support,
 * and graceful handling of long-running jobs.
 *
 * Setup:
 *   bun add bree
 *
 * Run:
 *   bun examples/bree-scheduler.js
 */

import Bree from 'bree';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const bree = new Bree({
  root: path.join(__dirname, '..', 'src'),

  jobs: [
    {
      name: 'job', // Runs src/job.js
      interval: '30m', // Every 30 minutes
      timezone: 'America/New_York',

      // Optional: Only run during certain hours
      // cron: '*/30 8-22 * * *', // Every 30 min, 8am-10pm
    }
  ],

  // Error handling
  errorHandler: (error, workerMetadata) => {
    console.error(`Job ${workerMetadata.name} failed:`, error);
  },

  // Worker message handling
  workerMessageHandler: (message, workerMetadata) => {
    console.log(`[${workerMetadata.name}]`, message);
  }
});

// Graceful shutdown
process.on('SIGINT', async () => {
  console.log('Shutting down scheduler...');
  await bree.stop();
  process.exit(0);
});

process.on('SIGTERM', async () => {
  await bree.stop();
  process.exit(0);
});

// Start the scheduler
console.log('Starting Smaug scheduler...');
console.log('Jobs:', bree.config.jobs.map(j => `${j.name} (${j.interval || j.cron})`).join(', '));

await bree.start();

console.log('Scheduler running. Press Ctrl+C to stop.');
