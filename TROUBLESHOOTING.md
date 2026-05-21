# Troubleshooting npm ECONNRESET Error

## Problem
When installing npm packages (especially globally with `npm install -g`), you may encounter:
```
npm error code ECONNRESET
```

This error indicates that your connection to the npm registry was reset, usually due to:
- Network timeout issues
- Slow internet connection
- npm registry being temporarily unavailable
- Firewall or proxy interference

## Solutions

### 1. Use the `.npmrc` Configuration (Recommended)
This repository includes a `.npmrc` file with optimized settings to handle connection issues:
- Increased timeouts (60 seconds)
- Retry logic (up to 5 retries)
- Progressive backoff on retries

This file will be automatically used by npm when you run commands in this directory.

### 2. Manual npm Configuration
If you want to apply these settings globally, run:
```bash
npm config set fetch-timeout 60000
npm config set fetch-retry-mintimeout 10000
npm config set fetch-retry-maxtimeout 60000
npm config set fetch-retries 5
```

### 3. Use npm with Verbose Output
To get more information about what's happening:
```bash
npm install -g openclaw --verbose
```

### 4. Try Alternative npm Registry
If the official npm registry is having issues:
```bash
npm config set registry https://registry.npmjs.org/
```

### 5. Clear npm Cache
Sometimes corrupted cache can cause connection issues:
```bash
npm cache clean --force
```

### 6. Check Your Network
- Verify your internet connection
- Check if you're behind a corporate proxy or firewall
- Try a different network if possible

### 7. Wait and Retry
If npm registry is experiencing issues, wait a few minutes and try again.

## Additional Help
For more information about npm configuration, see:
- https://docs.npmjs.com/cli/v8/configuring-npm
- https://docs.npmjs.com/cli/v8/commands/npm-config
