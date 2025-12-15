const container = document.getElementById("content");

// 1️⃣ Read data from Chrome storage
chrome.storage.local.get("lastApplication", async (data) => {
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

  // 3️⃣ Save to backend using AXIOS
  document.getElementById("save").addEventListener("click", async () => {
    try {
      await axios.post("http://localhost:8080/api/applications", app,
        {
          headers: {
            "Content-Type": "application/json"
          }
        }
      );

      document.getElementById("status").innerText =
        "✅ Application saved successfully!";
    } catch (error) {
      console.error(error);
      document.getElementById("status").innerText =
        "❌ Failed to save application";
    }
  });
});
