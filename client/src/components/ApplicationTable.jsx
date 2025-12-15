import { useState } from "react";
import StatusBadge from "./StatusBadge";
import ConfirmDialog from "./ConfirmDialog";
import { deleteApplication } from "../api/application.api";

export default function ApplicationTable({ applications, setApplications }) {
  const [deleteId, setDeleteId] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleConfirmDelete = async () => {
    try {
      setLoading(true);

      // Optimistic UI
      setApplications((prev) =>
        prev.filter((app) => app._id !== deleteId)
      );

      await deleteApplication(deleteId);
    } catch (error) {
      console.error("Failed to delete application", error);
      alert("Delete failed. Please refresh.");
    } finally {
      setLoading(false);
      setDeleteId(null);
    }
  };

  return (
    <>
      <div className="mt-8 overflow-x-auto">
        <div className="rounded-2xl bg-gradient-to-br from-indigo-50 via-white to-emerald-50 p-1 shadow-lg">
          <div className="overflow-hidden rounded-2xl bg-white">
            <table className="min-w-full">
              <thead>
                <tr className="bg-gradient-to-r from-indigo-600 to-blue-600">
                  <th className="px-5 py-4 text-left text-xs font-bold uppercase tracking-wider text-white">
                    Company
                  </th>
                  <th className="px-5 py-4 text-left text-xs font-bold uppercase tracking-wider text-white">
                    Role
                  </th>
                  <th className="px-5 py-4 text-left text-xs font-bold uppercase tracking-wider text-white">
                    Status
                  </th>
                  <th className="px-5 py-4 text-left text-xs font-bold uppercase tracking-wider text-white">
                    Applied
                  </th>
                  <th className="px-5 py-4 text-center text-xs font-bold uppercase tracking-wider text-white">
                    Actions
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-indigo-100">
                {applications.map((app) => (
                  <tr
                    key={app._id}
                    className="group transition-all hover:bg-indigo-50"
                  >
                    <td className="px-5 py-4">
                      <p className="text-sm font-semibold text-indigo-900">
                        {app.company}
                      </p>
                    </td>

                    <td className="px-5 py-4">
                      <p className="text-sm text-slate-700">
                        {app.role}
                      </p>
                    </td>

                    <td className="px-5 py-4">
                      <StatusBadge
                        appId={app._id}
                        initialStatus={app.status}
                      />
                    </td>

                    <td className="px-5 py-4">
                      <span className="inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">
                        {new Date(app.appliedAt).toLocaleDateString("en-GB", {
                          day: "2-digit",
                          month: "short"
                        })}
                      </span>
                    </td>

                    {/* Delete */}
                    <td className="px-5 py-4 text-center">
                      <button
                        onClick={() => setDeleteId(app._id)}
                        className="rounded-full p-2 text-red-600 hover:bg-red-100 transition"
                        title="Delete"
                      >
                        🗑️
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Confirm Dialog */}
      <ConfirmDialog
        open={Boolean(deleteId)}
        title="Delete application"
        message="This action cannot be undone. Are you sure you want to delete this application?"
        onCancel={() => setDeleteId(null)}
        onConfirm={handleConfirmDelete}
        loading={loading}
      />
    </>
  );
}
