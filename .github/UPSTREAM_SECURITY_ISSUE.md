# Security Vulnerabilities: Command Injection and Race Condition

## Summary

Multiple security vulnerabilities have been identified in the Smaug codebase that could allow command injection and race conditions in certain deployment scenarios.

## Affected Versions

All versions up to and including v0.3.1

## Severity

**High** - These vulnerabilities require user configuration values to be exploited, but could allow arbitrary command execution if an attacker can control config values.

## Vulnerabilities

### 1. Command Injection via Unvalidated Parameters (HIGH)

**Locations:**
- `src/processor.js`: Lines handling `folderId`, `count`, `tweetId`, `birdPath`
- `src/job.js`: Lines handling `zaiBin`

**Description:**
The application constructs shell commands using template literals with unvalidated user-controlled inputs. If an attacker can control configuration values (e.g., `birdPath`, `zaiBin`) or folder IDs, they could inject arbitrary shell commands.

**Example Exploit:**
```javascript
// Malicious config value
{
  "birdPath": "bird; rm -rf /"
}

// Results in executed command:
execSync("bird; rm -rf / bookmarks -n 10 --json")
```

**Affected Parameters:**
- `config.birdPath` - Binary path for bird CLI
- `config.zaiBin` - Binary path for Z.ai CLI
- `options.folderId` - Twitter folder ID
- `count` - Number of items to fetch
- `maxPages` - Maximum pages to fetch
- `tweetId` - Tweet ID for fetching

### 2. TOCTOU Race Condition in Lock File (MEDIUM)

**Location:** `src/job.js` lines 322-343

**Description:**
The lock file acquisition uses a check-then-act pattern that is vulnerable to Time-of-Check-Time-of-Use (TOCTOU) race conditions. Multiple processes could acquire the lock simultaneously.

**Code:**
```javascript
if (fs.existsSync(LOCK_FILE)) {
  // ... checks ...
  fs.unlinkSync(LOCK_FILE);  // <- Race window here
}
fs.writeFileSync(LOCK_FILE, ...);  // <- Another process could write here
```

### 3. Predictable Temp File Names (LOW)

**Location:** `src/processor.js` multiple locations

**Description:**
Temp files use predictable names based on `Date.now()`, which could allow temp file prediction attacks in shared environments.

**Code:**
```javascript
const tmpFile = path.join(os.tmpdir(), `smaug-bookmarks-${Date.now()}.json`);
```

## Impact

### Command Injection
- **Requires:** Attacker must control config file or folder IDs
- **Risk:** Arbitrary command execution with application privileges
- **Likelihood:** Low for single-user deployments, higher for shared/multi-tenant

### TOCTOU Race Condition
- **Requires:** Multiple concurrent Smaug processes
- **Risk:** Overlapping runs, data corruption, resource contention
- **Likelihood:** Medium in automated/cron deployments

### Predictable Temp Files
- **Requires:** Shared temp directory with other users
- **Risk:** Temp file manipulation, information disclosure
- **Likelihood:** Low in most deployments

## Proposed Solution

A comprehensive fix has been implemented in PR #XXX:

1. **Input Validation:**
   - Validate all numeric parameters (count, folderId, tweetId, maxPages)
   - Validate binary paths for shell metacharacters
   - Reject inputs with control characters or injection patterns

2. **Atomic Lock Operations:**
   - Use `fs.writeFileSync` with `flag: 'wx'` for atomic lock creation
   - Eliminate TOCTOU race condition

3. **Cryptographically Secure Temp Files:**
   - Use `crypto.randomBytes()` instead of `Date.now()`
   - Unpredictable temp file names

4. **Named Constants:**
   - Extract magic numbers to `TIMEOUTS` and `LIMITS` constants
   - Improve maintainability

## Workarounds

Until the fix is applied:

1. **Command Injection:**
   - Only use trusted config files
   - Validate `birdPath` and `zaiBin` manually
   - Don't accept folder IDs from untrusted sources
   - Run with minimal privileges

2. **Race Condition:**
   - Use external lock mechanism (e.g., flock)
   - Ensure only one Smaug instance runs at a time
   - Use process managers with single-instance guarantees

3. **Temp Files:**
   - Use private temp directory (`TMPDIR=/private/tmp`)
   - Set restrictive umask (077)

## References

- CWE-78: Improper Neutralization of Special Elements used in an OS Command
- CWE-367: Time-of-check Time-of-use (TOCTOU) Race Condition
- CWE-330: Use of Insufficiently Random Values

## Credits

Discovered and fixed by: GitHub Copilot (@copilot) and Trevor Spencer (@trevoraspencer)

## Timeline

- **2026-02-08**: Vulnerability discovered during code review
- **2026-02-08**: Fix implemented and tested
- **TBD**: Issue reported to upstream
- **TBD**: Fix merged

---

**Note:** This issue is being disclosed responsibly. The vulnerabilities require specific deployment scenarios to exploit and are not known to be exploited in the wild.
