import StatusBadge from "./StatusBadge";

export default function ApplicationTable({ applications }) {
  return (
    <table border="1" cellPadding="8" style={{ marginTop: 10 }}>
      <thead>
        <tr>
          <th>Company</th>
          <th>Role</th>
          <th>Status</th>
          <th>Applied At</th>
        </tr>
      </thead>
      <tbody>
        {applications.map((app) => (
          <tr key={app._id}>
            <td>{app.company}</td>
            <td>{app.role}</td>
            <td>
              <StatusBadge status={app.status} />
            </td>
            <td>{new Date(app.appliedAt).toLocaleDateString()}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
