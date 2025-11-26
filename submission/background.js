const links = [
  "https://www.linkedin.com/in/rahul-suthar-95a16329a/",
  "https://www.linkedin.com/in/ruchit-prajapati-353540356/",
  "https://www.linkedin.com/in/mahendra-patil-0427882b9/",
];

let index = 0;

chrome.runtime.onMessage.addListener((msg) => {
  if (msg.action === "start_scraping") {
    index = 0;
    openNext();
  }
});

function openNext() {
  if (index >= links.length) return;

  chrome.tabs.create({ url: links[index] }, (tab) => {
    setTimeout(() => {
      chrome.tabs.remove(tab.id);
      index++;
      openNext();
    }, 8000);
  });
}
