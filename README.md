# GitHub_Activity_Tracker

A command-line tool to fetch and display recent GitHub activity for any user.

## Features

- 📊 View push activity with commit counts
- 🎯 Track opened/closed issues
- ⭐ See starred repositories
- 🆕 Monitor newly created repositories/branches

## Installation
```bash
git clone git@github.com:Aman-Rautela/GitHub_Activity_Tracker.git
cd GitHub_Activity_Tracker
```

## Usage
```bash
node index.js <github-username>
```

### Example
```bash
node index.js torvalds
```

## Output

The tool displays categorized activity:
- **PUSH ACTIVITY**: Commits pushed to repositories
- **ISSUED ACTIVITY**: Issues opened or closed
- **STARRED ACTIVITY**: Repositories starred
- **CREATED ACTIVITY**: New repositories or branches created

## Requirements

- Node.js 18+ (for native fetch API support)

## Project Inspiration

Backend development practice [🚀](https://roadmap.sh/projects/github-user-activity)

---

**Author:** Aman Rautela  
Made with ❤️
