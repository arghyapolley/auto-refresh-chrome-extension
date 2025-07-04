let refreshTimers = {};

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  const { tabId, interval } = message;

  if (message.action === "startAutoRefresh") {
    if (refreshTimers[tabId]) {
      clearInterval(refreshTimers[tabId]);
    }

    refreshTimers[tabId] = setInterval(() => {
      chrome.tabs.reload(tabId);
    }, interval * 1000);
  }

  if (message.action === "stopAutoRefresh") {
    if (refreshTimers[tabId]) {
      clearInterval(refreshTimers[tabId]);
      delete refreshTimers[tabId];
    }
  }
});
