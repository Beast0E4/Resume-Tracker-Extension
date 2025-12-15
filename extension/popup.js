chrome.storage.local.get("lastApplication", (data) => {
  const container = document.getElementById("content");

  if (!data.lastApplication) {
    container.innerText = "No application detected yet.";
    return;
  }

  const app = data.lastApplication;

  container.innerHTML = `
    <div class="item"><b>Company:</b> ${app.company}</div>
    <div class="item"><b>Role:</b> ${app.role}</div>
    <div class="item"><b>Date:</b> ${new Date(app.appliedAt).toLocaleString()}</div>
  `;
});

fetch("http://localhost:5000/api/applications", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(app)
});
