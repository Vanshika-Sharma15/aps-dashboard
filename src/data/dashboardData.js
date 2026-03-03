export const dashboardStats = {
  organization: {
    name: "Project X",
    owner: "Nammagiri",
    totalScans: 100,
    scheduled: 1000,
    rescans: 100,
    failed: 100,
    lastUpdated: "10 mins ago",
  },

  severityOverview: [
    {
      label: "Critical Severity",
      count: 86,
      numberColor: "red",
      change: "+2% increase from yesterday",
      changeColor: "red",
      icon: "critical",
    },
    {
      label: "High Severity",
      count: 16,
      numberColor: "orange",
      change: "+0.9% increase from yesterday",
      changeColor: "red",
      icon: "high",
    },
    {
      label: "Medium Severity",
      count: 26,
      numberColor: "yellow",
      change: "-0.9% decrease from yesterday",
      changeColor: "green",
      icon: "medium",
    },
    {
      label: "Low Severity",
      count: 16,
      numberColor: "blue",
      change: "+0.9% increase from yesterday",
      changeColor: "red",
      icon: "low",
    },
  ],
};
