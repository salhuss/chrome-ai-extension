chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "ask-ai-selection",
    title: "Ask AI about selection",
    contexts: ["selection", "page"]
  });
});

chrome.contextMenus.onClicked.addListener(async (info, tab) => {
  if (!tab?.id) return;
  // Open side panel for this tab
  await chrome.sidePanel.open({ tabId: tab.id });
  // Send selection text (if any) to side panel
  chrome.tabs.sendMessage(tab.id, { type: "GET_PAGE_SELECTION" }, (selection) => {
    chrome.runtime.sendMessage({ type: "SIDE_PANEL_QUESTION", selection, sourceTabId: tab.id });
  });
});

// Let toolbar button open the side panel
chrome.action.onClicked.addListener(async (tab) => {
  if (!tab?.id) return;
  await chrome.sidePanel.open({ tabId: tab.id });
});
