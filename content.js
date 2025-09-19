// Return best-effort visible text (trim to avoid huge payloads)
function extractVisibleText(maxChars = 60000) {
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
    acceptNode: (n) => {
      const s = n.parentElement && getComputedStyle(n.parentElement);
      if (!s || s.visibility !== "visible" || s.display === "none") return NodeFilter.FILTER_REJECT;
      const text = n.nodeValue.replace(/\s+/g, " ").trim();
      return text ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
    }
  });
  let out = "";
  while (walker.nextNode()) {
    const t = walker.currentNode.nodeValue.replace(/\s+/g, " ").trim();
    if (!t) continue;
    if (out.length + t.length + 1 > maxChars) break;
    out += (out ? " " : "") + t;
  }
  return out;
}

function getSelectionText() {
  return (window.getSelection && String(window.getSelection())) || "";
}

chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
  if (msg.type === "GET_PAGE_TEXT") {
    sendResponse({ text: extractVisibleText() });
  } else if (msg.type === "GET_PAGE_SELECTION") {
    sendResponse({ selection: getSelectionText() });
  }
  // Keep channel open only when needed
  return false;
});
