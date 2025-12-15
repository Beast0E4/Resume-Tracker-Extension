import { useEffect, useState } from "react";
import { getApplications } from "../api/application.api";
import ApplicationTable from "../components/ApplicationTable";

export default function Dashboard() {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    getApplications().then(setApplications);
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h2>My Job Applications</h2>
      <ApplicationTable applications={applications} />
    </div>
  );
}
