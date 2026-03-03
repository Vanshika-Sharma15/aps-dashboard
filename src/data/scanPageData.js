export const scanPageData = {
  header: {
    breadcrumb: ["Scan", "Private Assets", "New Scan"],
    progress: 0,
    statusSteps: [
      { label: "Spidering", active: true },
      { label: "Mapping", active: false },
      { label: "Testing", active: false },
      { label: "Validating", active: false },
      { label: "Reporting", active: false },
    ],
    meta: {
      scanType: "Grey Box",
      target: "google.com",
      startedAt: "Nov 22, 09:00AM",
      credentials: "2 Active",
      files: "Control.pdf",
      checklists: "40/350",
    },
  },

  console: {
    status: "Running...",
    logs: [
      "[09:00:00] I'll begin a systematic penetration test on helpdesk.democorp.com.",
      "[09:01:00] Good! target is online. Now let me perform port scanning.",
      "[09:02:00] Excellent reconnaissance results.",
      "[09:03:00] Found login page at /password/test.",
      "[09:04:00] POST method not allowed.",
      "[09:05:00] Exploring endpoints and testing credentials.",
      "[09:06:00] Accessed dashboard using X-UserId header.",
    ],
  },

  findings: [
    {
      severity: "Critical",
      title: "SQL Injection in Authentication Endpoint",
      endpoint: "/api/users/profile",
      description:
        "Time-based blind SQL injection confirmed on user-controlled input during authentication flow.",
      time: "10:45:23",
    },
    {
      severity: "High",
      title: "Unauthorized Access to User Metadata",
      endpoint: "/api/auth/login",
      description:
        "Authenticated low-privilege user accessed metadata of other users.",
      time: "10:45:23",
    },
    {
      severity: "Medium",
      title: "Broken Authentication Rate Limiting",
      endpoint: "/api/search",
      description: "No effective rate limiting detected on login attempts.",
      time: "10:45:23",
    },
  ],
  statusBar: {
    subAgents: 0,
    parallelExecutions: 2,
    operations: 1,
    severityCounts: {
      critical: 0,
      high: 0,
      medium: 0,
      low: 0,
    },
  },
};
