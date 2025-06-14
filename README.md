# X Wirtz Search Chrome Extension

A simple Chrome extension that adds a "Wirtz" button under each post on X (formerly Twitter), allowing you to quickly search for a user's posts about Wirtz before his rumored move to Liverpool FC.

## Features

- Adds a "Wirtz" button under each post on X/Twitter
- One-click search for user's posts about Wirtz
- Custom search query with date filter (until May 15, 2025)
- Clean and minimal UI integration with X's design
- Works on both x.com and twitter.com domains

## Installation

1. Clone or download this repository
2. Open Chrome and navigate to `chrome://extensions/`
3. Enable "Developer mode" in the top right corner
4. Click "Load unpacked" and select the extension directory
5. The extension is now installed and ready to use!

## Usage

1. Visit any X/Twitter page
2. Look for the "Wirtz" button under each post
3. Click the button to open a new tab with the search results
4. The search will show all posts from that user about Wirtz until May 15, 2025

## Search Query Format

The extension uses the following search format:
```
from:{username} wirtz until:2025-05-15
```

## Development

The extension consists of three main files:
- `manifest.json`: Extension configuration and permissions
- `content.js`: Main functionality for adding buttons and handling clicks
- `styles.css`: Styling for the button to match X's UI

## Author

Patrick S.

## License

This project is open source and available under the MIT License. 