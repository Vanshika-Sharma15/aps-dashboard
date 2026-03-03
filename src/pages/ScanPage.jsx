import DashboardLayout from "../layouts/DashboardLayout";
import { scanPageData } from "../data/scanPageData";
import {
  Radar,
  Boxes,
  FlaskConical,
  ShieldCheck,
  FileText,
  Clock
} from "lucide-react";

function ScanPage() {
  const { header, console, findings, statusBar } = scanPageData;

  return (
    <DashboardLayout>
      {/* Top Breadcrumb + Actions */}
      <div className="flex items-center justify-between px-10 py-4 border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-[#0F1720]">
        <div className="text-sm text-gray-500 dark:text-gray-400 flex gap-2">
          {header.breadcrumb.map((item, index) => (
            <span key={index}>
              {item}
              {index < header.breadcrumb.length - 1 && " / "}
            </span>
          ))}
        </div>

        <div className="flex gap-3">
          <button className="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 text-sm">
            <span className="font-semibold text-black dark:text-white">
              Export Report
            </span>
          </button>
          <button className="px-4 py-2 rounded-lg bg-red-100 text-red-600 text-sm">
            Stop Scan
          </button>
        </div>
      </div>

      {/* Scan Overview */}
      <div className="mt-4 mx-4 bg-white dark:bg-[#111827] rounded-xl shadow-sm p-6">
        <div className="flex items-center gap-12">
          {/* LEFT SIDE – PROGRESS CIRCLE */}
          <div className="flex flex-col items-center">
            <div className="w-28 h-28 rounded-full bg-[#0B1B2B] flex items-center justify-center text-white text-3xl font-semibold">
              {header.progress}%
            </div>
            <span className="text-sm text-gray-500 mt-3">In Progress</span>
          </div>

          <div className="h-32 w-[1px] bg-gray-200 dark:bg-gray-700"></div>

          {/* RIGHT SIDE – STEPS */}
          <div className="flex-1 relative">
            {/* Horizontal Line */}
            <div className="absolute top-6 left-0 right-0 h-[2px] bg-gray-200 dark:bg-gray-700 z-0"></div>

            <div className="flex justify-between items-center relative z-10">
              {[
                { icon: Radar, label: "Spidering" },
                { icon: Boxes, label: "Mapping" },
                { icon: FlaskConical, label: "Testing" },
                { icon: ShieldCheck, label: "Validating" },
                { icon: FileText, label: "Reporting" },
              ].map((step, index) => {
                const Icon = step.icon;
                const isActive = index === 0;

                return (
                  <div
                    key={index}
                    className="flex flex-col items-center relative"
                  >
                    <div
                      className={`w-14 h-14 rounded-full flex items-center justify-center transition
                            ${
                              isActive
                                ? "bg-[#2BB6A8] text-white shadow-lg shadow-[#2BB6A8]/40"
                                : "bg-gray-100 dark:bg-gray-700 text-gray-400"
                            }`}
                    >
                      <Icon size={20} />
                    </div>

                    <p className="text-sm mt-3 text-gray-600 dark:text-gray-300">
                      {step.label}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="border-t border-gray-200 dark:border-gray-700 mt-8 mb-8"></div>

            {/* META INFO */}
            <div className="grid grid-cols-6 gap-10 mt-10 text-sm">
              <div>
                <p className="text-gray-500">Scan Type</p>
                <p className="font-semibold text-black dark:text-white">
                  {header.meta.scanType}
                </p>
              </div>

              <div>
                <p className="text-gray-500">Targets</p>
                <p className="font-semibold text-black dark:text-white">
                  {header.meta.target}
                </p>
              </div>

              <div>
                <p className="text-gray-500">Started At</p>
                <p className="font-semibold text-black dark:text-white">
                  {header.meta.startedAt}
                </p>
              </div>

              <div>
                <p className="text-gray-500">Credentials</p>
                <p className="font-semibold text-black dark:text-white">
                  {header.meta.credentials}
                </p>
              </div>

              <div>
                <p className="text-gray-500">Files</p>
                <p className="font-semibold text-black dark:text-white">
                  {header.meta.files}
                </p>
              </div>

              <div>
                <p className="text-gray-500">Checklists</p>
                <p className="font-semibold text-[#2BB6A8]">
                  {header.meta.checklists}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CONSOLE + FINDINGS PANEL */}
      <div className="mt-4 mx-4 bg-white dark:bg-[#111827] rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
        {/* Header Strip */}
        <div className="flex items-center justify-between px-6 py-3 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
            <span className="font-semibold text-black dark:text-white">
              Live Scan Console
            </span>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-sm font-medium">
  <Clock size={14} />
  <span>Running...</span>
</div>
          </div>

          <div className="text-gray-400 text-sm cursor-pointer">×</div>
        </div>

        {/* Body */}
        <div className="grid grid-cols-3">
          {/* LEFT SIDE */}
          <div className="col-span-2 border-r border-gray-200 dark:border-gray-700">
            {/* Tabs */}
            <div className="flex gap-6 px-6 pt-4 border-b border-gray-200 dark:border-gray-700 text-sm">
              <span className="text-[#2BB6A8] border-b-2 border-[#2BB6A8] pb-2 cursor-pointer">
                Activity Log
              </span>

              <span className="text-gray-500 dark:text-gray-400 pb-2 cursor-pointer">
                Verification Loops
              </span>
            </div>

            {/* Console Output */}
            <div className="p-6">
              <div className="bg-gray-100 dark:bg-[#0F1720] rounded-lg p-4 font-mono text-sm h-[400px] overflow-y-auto">
                {console.logs.map((log, index) => (
                  <p
                    key={index}
                    className="mb-2 text-gray-700 dark:text-gray-300"
                  >
                    {log}
                  </p>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="p-6">
            <h3 className="font-semibold text-black dark:text-white mb-6">
              Finding Log
            </h3>

            <div className="space-y-4">
              {findings.map((item, index) => (
                <div
                  key={index}
                  className="p-5 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm"
                >
                  <span
                    className={`text-xs px-2 py-1 rounded-full font-medium ${
                      item.severity === "Critical"
                        ? "bg-red-100 text-red-600"
                        : item.severity === "High"
                          ? "bg-orange-100 text-orange-600"
                          : "bg-yellow-100 text-yellow-600"
                    }`}
                  >
                    {item.severity}
                  </span>

                  <p className="font-semibold mt-3 text-black dark:text-white">
                    {item.title}
                  </p>

                  <p className="text-sm text-blue-500 mt-1">{item.endpoint}</p>

                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-3">
                    {item.description}
                  </p>

                  <p className="text-xs text-gray-400 mt-3">{item.time}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Status Bar */}
        <div className="flex items-center justify-between px-6 py-3 border-t border-gray-200 dark:border-gray-700 text-xs bg-gray-50 dark:bg-[#0F1720]">
          <div className="flex gap-6 text-gray-600 dark:text-gray-400">
            <span>Sub-Agents: {statusBar.subAgents}</span>
            <span>Parallel Executions: {statusBar.parallelExecutions}</span>
            <span>Operations: {statusBar.operations}</span>
          </div>

          <div className="flex gap-6 font-medium">
            <span className="text-red-500">
              Critical: {statusBar.severityCounts.critical}
            </span>
            <span className="text-orange-500">
              High: {statusBar.severityCounts.high}
            </span>
            <span className="text-yellow-500">
              Medium: {statusBar.severityCounts.medium}
            </span>
            <span className="text-green-500">
              Low: {statusBar.severityCounts.low}
            </span>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default ScanPage;
