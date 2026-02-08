/**
 * Input validation utilities for security hardening
 * 
 * These validators prevent command injection and other security issues
 * by ensuring user-controlled inputs are safe before being used in
 * shell commands or file operations.
 */

import path from 'path';
import fs from 'fs';
import os from 'os';
import { randomBytes } from 'crypto';

/**
 * Validate that a value is a positive integer
 * @param {any} value - Value to validate
 * @param {string} name - Name of the parameter (for error messages)
 * @returns {number} Validated integer
 * @throws {Error} If validation fails
 */
export function validatePositiveInteger(value, name = 'value') {
  const num = typeof value === 'string' ? parseInt(value, 10) : value;
  
  if (!Number.isInteger(num) || num < 1) {
    throw new Error(`${name} must be a positive integer, got: ${value}`);
  }
  
  return num;
}

/**
 * Validate that a string contains only digits (for IDs, etc.)
 * @param {any} value - Value to validate
 * @param {string} name - Name of the parameter (for error messages)
 * @returns {string} Validated string
 * @throws {Error} If validation fails
 */
export function validateNumericString(value, name = 'value') {
  const str = String(value);
  
  if (!/^\d+$/.test(str)) {
    throw new Error(`${name} must contain only digits, got: ${value}`);
  }
  
  return str;
}

/**
 * Validate that a path is safe to use as a binary/executable path
 * Prevents command injection via malicious paths
 * @param {any} value - Path to validate
 * @param {string} name - Name of the parameter (for error messages)
 * @returns {string} Validated path
 * @throws {Error} If validation fails
 */
export function validateBinaryPath(value, name = 'binary path') {
  if (!value || typeof value !== 'string') {
    throw new Error(`${name} must be a non-empty string`);
  }
  
  const trimmed = value.trim();
  
  if (!trimmed) {
    throw new Error(`${name} must be a non-empty string`);
  }
  
  // Reject paths with shell metacharacters
  if (/[;&|`$()<>]/.test(trimmed)) {
    throw new Error(`${name} contains illegal shell metacharacters: ${value}`);
  }
  
  // Reject paths with newlines or null bytes
  if (/[\r\n\0]/.test(trimmed)) {
    throw new Error(`${name} contains illegal control characters`);
  }
  
  // Path must be either:
  // 1. A simple command name (no path separators)
  // 2. An absolute path
  // 3. A relative path starting with ./ or ../
  const isSimpleName = !trimmed.includes('/') && !trimmed.includes('\\');
  const isAbsolute = path.isAbsolute(trimmed);
  const isRelative = trimmed.startsWith('./') || trimmed.startsWith('../');
  
  if (!isSimpleName && !isAbsolute && !isRelative) {
    throw new Error(`${name} must be a command name, absolute path, or relative path (./...): ${value}`);
  }
  
  return trimmed;
}

/**
 * Generate a cryptographically secure temporary file name
 * @param {string} prefix - Prefix for the temp file
 * @param {string} extension - File extension (default: 'json')
 * @returns {string} Secure temporary file path
 */
export function generateSecureTempFile(prefix = 'smaug', extension = 'json') {
  // Use crypto.randomBytes for secure random names instead of Date.now()
  const random = randomBytes(16).toString('hex');
  const filename = `${prefix}-${random}.${extension}`;
  return path.join(fs.realpathSync(os.tmpdir()), filename);
}

/**
 * Validate timeout value
 * @param {any} value - Timeout in milliseconds
 * @param {string} name - Name of the parameter
 * @returns {number} Validated timeout
 * @throws {Error} If validation fails
 */
export function validateTimeout(value, name = 'timeout') {
  const num = typeof value === 'string' ? parseInt(value, 10) : value;
  
  if (!Number.isInteger(num) || num < 1000 || num > 3600000) {
    throw new Error(`${name} must be between 1000ms (1s) and 3600000ms (1h), got: ${value}`);
  }
  
  return num;
}

/**
 * Constants for timeouts and limits
 */
export const TIMEOUTS = {
  BIRD_SEARCH: 30000,      // 30 seconds
  BIRD_READ: 15000,        // 15 seconds
  BIRD_FETCH: 60000,       // 1 minute
  BIRD_FETCH_ALL: 180000,  // 3 minutes
  X_ARTICLE_FETCH: 15000,  // 15 seconds
  ZAI_PROCESS: 900000,     // 15 minutes
  LOCK_STALE: 1200000      // 20 minutes
};

export const LIMITS = {
  MAX_PAGES: 100,          // Maximum pages to fetch
  MIN_COUNT: 1,            // Minimum items to fetch
  MAX_COUNT: 10000         // Maximum items to fetch
};
