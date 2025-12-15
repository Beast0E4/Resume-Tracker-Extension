(function () {
  console.log("Smart Job Tracker content script loaded");

  document.addEventListener("click", (event) => {
    const target = event.target;

    if (!target || !target.innerText) return;

    const text = target.innerText.toLowerCase();

    if (text.includes("apply") || text.includes("submit")) {
      const jobData = {
        company: getCompanyName(),
        role: getJobTitle(),
        jobUrl: window.location.href,
        appliedAt: new Date().toISOString()
      };

      chrome.storage.local.set(
        { lastApplication: jobData },
        () => {
          console.log("Job application detected:", jobData);
        }
      );
    }
  });

  function getJobTitle() {
    const titleEl = document.querySelector("h1");
    return titleEl ? titleEl.innerText : "Unknown Role";
  }

  function getCompanyName() {
    const companyEl = document.querySelector(
      ".job-details-jobs-unified-top-card__company-name"
    );
    return companyEl ? companyEl.innerText : "Unknown Company";
  }
})();
