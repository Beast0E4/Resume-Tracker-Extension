const BASE_URL = "http://localhost:5000/api/applications";

export const getApplications = async () => {
  const res = await fetch(BASE_URL);
  return res.json();
};

export const updateApplicationStatus = async (id, status) => {
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ status })
  });
  return res.json();
};
