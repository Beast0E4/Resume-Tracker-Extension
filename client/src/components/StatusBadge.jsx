import { useState } from "react";
import { updateApplicationStatus } from "../api/application.api";

const statusStyles = {
  Applied: "bg-blue-100 text-blue-700",
  Interview: "bg-yellow-100 text-yellow-700",
  Rejected: "bg-red-100 text-red-700",
  Offer: "bg-green-100 text-green-700"
};

export default function StatusBadge({ appId, initialStatus }) {
  const [status, setStatus] = useState(initialStatus);
  const [loading, setLoading] = useState(false);

  const handleChange = async (e) => {
    const newStatus = e.target.value;
    setStatus(newStatus); // optimistic update
    setLoading(true);

    console.log (appId, initialStatus, newStatus);

    try {
      await updateApplicationStatus(appId, newStatus);
    } catch (err) {
      console.error("Failed to update status", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <select
      value={status}
      onChange={handleChange}
      disabled={loading}
      className={`rounded-full px-3 py-1 text-xs font-semibold outline-none transition
        ${statusStyles[status]}
        ${loading ? "opacity-60 cursor-not-allowed" : "cursor-pointer"}
      `}
    >
      <option value="Applied">Applied</option>
      <option value="Interview">Interview</option>
      <option value="Rejected">Rejected</option>
      <option value="Offer">Offer</option>
    </select>
  );
}
