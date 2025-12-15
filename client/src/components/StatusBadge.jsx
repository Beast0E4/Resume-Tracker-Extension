export default function StatusBadge({ status }) {
  const statusStyles = {
    Applied: {
      backgroundColor: "#FEF3C7",
      color: "#92400E"
    },
    Interview: {
      backgroundColor: "#DBEAFE",
      color: "#1E40AF"
    },
    Rejected: {
      backgroundColor: "#FEE2E2",
      color: "#991B1B"
    },
    Offer: {
      backgroundColor: "#DCFCE7",
      color: "#166534"
    }
  };

  const style = {
    padding: "4px 10px",
    borderRadius: "999px",
    fontSize: "12px",
    fontWeight: 600,
    display: "inline-block",
    ...statusStyles[status]
  };

  return <span style={style}>{status}</span>;
}
