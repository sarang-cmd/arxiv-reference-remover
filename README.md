<p align="center">
  <img src="assets/icon128.png" alt="arXiv Reference Remover icon" width="96">
</p>

<p align="center">
  <a href="https://developer.chrome.com/docs/extensions/develop/migrate/what-is-mv3"><img src="https://img.shields.io/badge/Chrome-Manifest%20V3-4285F4?logo=googlechrome&amp;logoColor=white" alt="Chrome Manifest V3"></a>
  <a href="https://learn.microsoft.com/en-us/microsoft-edge/extensions-chromium/"><img src="https://img.shields.io/badge/Edge-compatible-0F6CBD?logo=microsoftedge&amp;logoColor=white" alt="Edge compatible"></a>
  <a href="https://arxiv.org/"><img src="https://img.shields.io/badge/target-arXiv%20HTML-B31B1B" alt="Targets arXiv HTML"></a>
  <a href="#install"><img src="https://img.shields.io/badge/build-none-brightgreen" alt="No build step"></a>
</p>

# arXiv Reference Remover

A minimal Chrome/Edge Manifest V3 extension that removes inline citations and the
bibliography from arXiv HTML pages. Click the toolbar icon to clean the active tab;
there is no popup UI.

**Topics:** `arxiv` · `browser-extension` · `chrome-extension` · `edge-extension` ·
`manifest-v3` · `javascript` · `bibliography` · `academic`

## Install

1. Open `chrome://extensions` (or `edge://extensions` in Edge).
2. Enable **Developer mode**.
3. Choose **Load unpacked** and select this directory.
4. Pin the extension to the toolbar, then click its icon on an arXiv HTML page.

## How it works

The click handler in the background service worker injects a script into the active
tab that removes `.ltx_cite`, `#bib`, and `.ltx_bibliography` elements.
