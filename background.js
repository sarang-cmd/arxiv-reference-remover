chrome.action.onClicked.addListener(async (tab) => {
  if (tab.id === undefined) return;

  await chrome.scripting.executeScript({
    target: { tabId: tab.id },
    func: () => {
      document.querySelectorAll('.ltx_cite, #bib, .ltx_bibliography').forEach(el => el.remove());
    }
  });
});
