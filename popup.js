document.getElementById("startButton").addEventListener("click", async () => {
    const interval = parseInt(document.getElementById("interval").value, 10);
  
    if (!interval || interval < 1) {
      alert("Please enter a valid interval in seconds.");
      return;
    }
  
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  
    chrome.runtime.sendMessage({
      action: "startAutoRefresh",
      tabId: tab.id,
      interval: interval
    });
  
    document.getElementById("status").innerText = `Auto refresh every ${interval} seconds`;
  });
  
  document.getElementById("stopButton").addEventListener("click", async () => {
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  
    chrome.runtime.sendMessage({
      action: "stopAutoRefresh",
      tabId: tab.id
    });
  
    document.getElementById("status").innerText = "Auto refresh is stopped";
  });
  