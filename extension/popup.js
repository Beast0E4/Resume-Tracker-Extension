const container = document.getElementById("content");

// 1️⃣ Read data from Chrome storage (SYNC callback)
chrome.storage.local.get("lastApplication", (data) => {
  if (!data.lastApplication) {
    container.innerText = "No application detected yet.";
    return;
  }

  const app = data.lastApplication;

  // 2️⃣ Show data in popup
  container.innerHTML = `
    <div class="item"><b>Company:</b> ${app.company}</div>
    <div class="item"><b>Role:</b> ${app.role}</div>
    <div class="item"><b>Date:</b> ${new Date(app.appliedAt).toLocaleString()}</div>
    <button id="save">Save to Dashboard</button>
    <p id="status"></p>
  `;

  // 3️⃣ Save to backend using FETCH
  document.getElementById("save").addEventListener("click", () => {
    (async () => {
      try {
        console.log("Saving application:", app);

        const res = await fetch(
          "http://localhost:8080/api/applications",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(app)
          }
        );

        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }

        document.getElementById("status").innerText =
          "✅ Application saved successfully!";
      } catch (error) {
        console.error("Save failed:", error);
        document.getElementById("status").innerText =
          "❌ Failed to save application";
      }
    })();
  });
});
