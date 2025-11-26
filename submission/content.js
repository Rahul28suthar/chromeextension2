function extractText(selector) {
  return document.querySelector(selector)?.innerText || "Not Available";
}

setTimeout(() => {
  const data = {
    name: extractText(".text-heading-xlarge"),
    location: extractText(".text-body-small.inline"),
    bio: extractText(".pv-about__summary-text"),
    about: extractText(".pv-shared-text-with-see-more"),
    followerCount: extractText(".t-bold span"),
    connectionCount: extractText(".t-bold span"),
    bioLine: extractText(".text-body-medium"),
  };

  fetch("http://localhost:5000/api/profile/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
}, 3000);
