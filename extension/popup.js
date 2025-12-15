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
    <div class="item">
        <label class="label">Company</label>
        <input
        id="companyInput"
        type="text"
        value="${app.company || ""}"
        class="input"
        placeholder="Company name"
        />
    </div>

    <div class="item">
        <label class="label">Role</label>
        <input
        id="roleInput"
        type="text"
        value="${app.role || ""}"
        class="input"
        placeholder="Role / Position"
        />
    </div>

    <div class="item">
        <b>Date:</b>
        ${new Date(app.appliedAt).toLocaleString()}
    </div>

    <button id="save" class="btn-primary">
        Save to Dashboard
    </button>

    <p id="status" class="status-text"></p>
    `;


  // 3️⃣ Save to backend using FETCH
  document.getElementById("save").addEventListener("click", () => {
    (async () => {
        try {
        const updatedApp = {
            ...app,
            company: document.getElementById("companyInput").value.trim(),
            role: document.getElementById("roleInput").value.trim()
        };

        console.log("Saving edited application:", updatedApp);

        const res = await fetch(
            "http://localhost:8080/api/applications",
            {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updatedApp)
            }
        );

        if (!res.ok) {
            throw new Error("Failed to save application");
        }

        document.getElementById("status").innerText =
            "✅ Application saved successfully!";
        } catch (error) {
        console.error(error);
        document.getElementById("status").innerText =
            "❌ Failed to save application";
        }
    })();
    });

});
