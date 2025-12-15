console.log("Smart Job Tracker active on:", location.hostname);

/**
 * 1️⃣ FORM SUBMISSION (MOST RELIABLE)
 */
document.addEventListener(
  "submit",
  (event) => {
    console.log("Form submission detected");
    saveApplication("form-submit");
  },
  true
);

/**
 * 2️⃣ APPLY BUTTON CLICK (Fallback)
 */
document.addEventListener(
  "click",
  (event) => {
    const el = event.target;
    if (!el) return;

    const text =
      el.innerText?.toLowerCase() ||
      el.value?.toLowerCase() ||
      "";

    const keywords = [
      "apply",
      "apply now",
      "submit",
      "send application",
      "easy apply"
    ];

    if (keywords.some((k) => text.includes(k))) {
      console.log("Apply intent detected:", text);
      saveApplication("button-click");
    }
  },
  true
);

/**
 * 3️⃣ SAVE APPLICATION (once per page)
 */
let alreadySaved = false;

function saveApplication(trigger) {
  if (alreadySaved) return;
  alreadySaved = true;

  const jobData = {
    company: getCompanyName(),
    role: getJobTitle(),
    jobUrl: window.location.href,
    appliedAt: new Date().toISOString(),
    source: location.hostname,
    trigger
  };

  chrome.storage.local.set({ lastApplication: jobData }, () => {
    console.log("Application saved:", jobData);
  });
}

/**
 * 🔍 SMART HEURISTICS (works for most sites)
 */
function getJobTitle() {
  const h1 = document.querySelector("h1");
  if (h1) return h1.innerText.trim();

  const titleMeta = document.querySelector("meta[property='og:title']");
  return titleMeta?.content || "Unknown Role";
}

function getCompanyName() {
  const companyMeta = document.querySelector("meta[property='og:site_name']");
  if (companyMeta) return companyMeta.content;

  return location.hostname.replace("www.", "");
}
