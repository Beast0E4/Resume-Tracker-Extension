import StatusBadge from "./StatusBadge";

export default function ApplicationTable({ applications }) {
  return (
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
              </tr>
            </thead>

            <tbody className="divide-y divide-indigo-100">
              {applications.map((app) => (
                <tr
                  key={app._id}
                  className="group transition-all hover:bg-indigo-50"
                >
                  {/* Company */}
                  <td className="px-5 py-4">
                    <p className="text-sm font-semibold text-indigo-900">
                      {app.company}
                    </p>
                  </td>

                  {/* Role */}
                  <td className="px-5 py-4">
                    <p className="text-sm text-slate-700">
                      {app.role}
                    </p>
                  </td>

                  {/* Status */}
                  <td className="px-5 py-4">
                    <StatusBadge
                        appId={app._id}
                        initialStatus={app.status}
                    />
                </td>


                  {/* Date */}
                  <td className="px-5 py-4">
                    <span className="inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700 group-hover:bg-blue-200">
                      {new Date(app.appliedAt).toLocaleDateString("en-GB", {
                        day: "2-digit",
                        month: "short"
                      })}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {applications.length === 0 && (
        <div className="mt-12 rounded-xl bg-gradient-to-r from-indigo-50 to-blue-50 p-8 text-center">
          <p className="text-sm font-semibold text-indigo-700">
            No applications yet
          </p>
          <p className="mt-1 text-xs text-indigo-500">
            Start applying and your dashboard will light up 🚀
          </p>
        </div>
      )}
    </div>
  );
}
