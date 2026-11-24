# arxiv-reference-remover

A minimal Chrome/Edge Manifest V3 extension that removes inline citations and the
bibliography from arXiv HTML pages. Click the toolbar icon to clean the active tab;
there is no popup UI.

## Install

1. Open `chrome://extensions` (or `edge://extensions` in Edge).
2. Enable **Developer mode**.
3. Choose **Load unpacked** and select this directory.
4. Pin the extension to the toolbar, then click its icon on an arXiv HTML page.

## How it works

The click handler in the background service worker injects a script into the active
tab that removes `.ltx_cite`, `#bib`, and `.ltx_bibliography` elements.
