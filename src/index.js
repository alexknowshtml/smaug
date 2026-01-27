/**
 * Smaug - Twitter Bookmarks Archiver
 *
 * Main entry point for programmatic usage.
 */

// Core processing
export { fetchAndPrepareBookmarks } from './processor.js';
export {
  fetchBookmarks,
  fetchTweet,
  expandTcoLink,
  fetchGitHubContent,
  fetchArticleContent,
  fetchXArticleContent,
  isPaywalled,
  loadState,
  saveState
} from './processor.js';

// Configuration
export { loadConfig, initConfig } from './config.js';

// Scheduled job runner
export { run as runJob } from './job.js';
export { default as job } from './job.js';
