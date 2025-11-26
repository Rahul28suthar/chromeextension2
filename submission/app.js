document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("getTitle");
  const out = document.getElementById("title");
  const status = document.getElementById("status");

  btn.addEventListener("click", async () => {
    status.textContent = "Fetching title...";
    try {
      const [tab] = await chrome.tabs.query({
        active: true,
        currentWindow: true,
      });
      out.textContent = tab.title || "No title found";
      out.style.color = "#000";
    } catch (err) {
      out.textContent = "Error: " + err.message;
      out.style.color = "red";
    } finally {
      status.textContent = "";
    }
  });
});
document.getElementById("start").addEventListener("click", () => {
  chrome.runtime.sendMessage({ action: "start_scraping" });
});
