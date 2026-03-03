import { useNavigate } from "react-router-dom";
import DashboardLayout from "../layouts/DashboardLayout";
import { mockScans } from "../data/mockScans";
import { useState } from "react";
import { dashboardStats } from "../data/dashboardData";
import { Search, Filter, Columns3, Plus } from "lucide-react";
import {
  AlertOctagon,
  AlertTriangle,
  AlertCircle,
  ArrowUp,
  ArrowDown,
} from "lucide-react";

function Dashboard() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 15;

  const filteredScans = mockScans.filter(
    (scan) =>
      scan.name.toLowerCase().includes(search.toLowerCase()) ||
      scan.type.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <DashboardLayout>
      {/* TOP ACTION BAR */}
      <div className="flex items-center justify-between px-10 py-4 bg-white dark:bg-[#111]">
        {/* Breadcrumb */}
        <div className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-2">
          <span className="text-black dark:text-white font-medium">Scan</span>
          <span>/</span>
          <span>Private Assets</span>
          <span>/</span>
          <span className="text-[#0CC8A8] font-medium">New Scan</span>
        </div>

        {/* Actions */}
        <div className="flex gap-3">
          <button className="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 text-sm font-medium hover:bg-gray-100 dark:hover:bg-[#1F1F1F] transition">
            <span className="font-semibold text-black dark:text-white">
              Export Report
            </span>
          </button>

          <button className="px-4 py-2 rounded-lg bg-red-100 text-red-600 text-sm font-medium hover:bg-red-200 transition">
            Stop Scan
          </button>
        </div>
      </div>

      {/* ORG STATS BAR */}
      <div className="mt-4 bg-white dark:bg-[#111] border-b border-gray-200 dark:border-gray-800 px-10 pt-6 pb-4">
        <div className="flex flex-wrap items-center justify-between text-sm text-gray-600 dark:text-gray-400">
          <div>
            Org:{" "}
            <span className="font-semibold text-black dark:text-white">
              {dashboardStats.organization.name}
            </span>
          </div>

          <div>
            Owner:{" "}
            <span className="font-semibold text-black dark:text-white">
              {dashboardStats.organization.owner}
            </span>
          </div>

          <div>
            Total Scans:{" "}
            <span className="font-semibold text-black dark:text-white">
              {dashboardStats.organization.totalScans}
            </span>
          </div>

          <div>
            Scheduled:{" "}
            <span className="font-semibold text-black dark:text-white">
              {dashboardStats.organization.scheduled}
            </span>
          </div>

          <div>
            Rescans:{" "}
            <span className="font-semibold text-black dark:text-white">
              {dashboardStats.organization.rescans}
            </span>
          </div>

          <div>
            Failed Scans:{" "}
            <span className="font-semibold text-black dark:text-white">
              {dashboardStats.organization.failed}
            </span>
          </div>

          <div className="text-[#0CC8A8] font-medium">
            {dashboardStats.organization.lastUpdated}
          </div>
        </div>

        {/* STATS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 px-6 pb-6">
          {dashboardStats.severityOverview.map((stat, index) => (
            <div key={index} className="p-6">
              {/* Label + Icon */}
              <div className="flex items-center justify-between mb-2">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {stat.label}
                </p>

                {stat.icon === "critical" && (
                  <AlertOctagon size={18} className="text-red-500" />
                )}

                {stat.icon === "high" && (
                  <AlertTriangle size={18} className="text-orange-500" />
                )}

                {stat.icon === "medium" && (
                  <AlertCircle size={18} className="text-yellow-500" />
                )}

                {stat.icon === "low" && (
                  <Search size={18} className="text-blue-500" />
                )}
              </div>

              <div className="flex items-end gap-3 mt-2">
                {/* Number */}
                <span className="text-l font-semibold text-black dark:text-white leading-none">
                  {stat.count}
                </span>

                {/* Change with Arrow */}
                <span
                  className={`flex items-center gap-1 text-xs font-medium whitespace-nowrap ${
                    stat.changeColor === "red"
                      ? "text-red-500"
                      : "text-green-500"
                  }`}
                >
                  {stat.changeColor === "red" ? (
                    <ArrowUp size={14} />
                  ) : (
                    <ArrowDown size={14} />
                  )}
                  {stat.change}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* SCAN TABLE SECTION */}
      <div className="mt-4 mx-4 bg-white dark:bg-[#111] rounded-lg shadow-sm p-6">
        {/* Toolbar */}
        <div className="flex flex-wrap gap-4 justify-between items-center mb-6">
          {/* Search */}
          <div className="relative flex-1 min-w-[250px]">
            <Search
              size={16}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            />
            <input
              type="text"
              placeholder="Search scans by name or type..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-9 pr-3 py-2.5 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-[#1A1A1A] text-black dark:text-white outline-none focus:ring-2 focus:ring-[#0CC8A8] transition"
            />
          </div>

          <div className="flex gap-3">
            <button
              onClick={() => alert("Filter clicked")}
              className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 
                    bg-white dark:bg-[#1F1F1F] 
                    text-sm font-medium text-gray-700 dark:text-gray-200 
                    hover:bg-gray-100 dark:hover:bg-[#2A2A2A] 
                    transition"
            >
              <Filter size={16} />
              Filter
            </button>

            <button
              onClick={() => alert("Column clicked")}
              className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 
                    bg-white dark:bg-[#1F1F1F] 
                    text-sm font-medium text-gray-700 dark:text-gray-200 
                    hover:bg-gray-100 dark:hover:bg-[#2A2A2A] 
                    transition"
            >
              <Columns3 size={16} />
              Column
            </button>

            <button
              onClick={() => alert("New Scan clicked")}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#0CC8A8] hover:bg-[#09b79a] text-white text-sm font-semibold transition shadow"
            >
              <Plus size={16} />
              New Scan
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-gray-200 dark:border-gray-800 text-sm text-gray-500 dark:text-gray-400">
                <th className="py-3 px-4">Scan Name</th>
                <th className="py-3 px-4">Type</th>
                <th className="py-3 px-4">Status</th>
                <th className="py-3 px-4">Progress</th>
                <th className="py-3 px-4">Vulnerabilities</th>
                <th className="py-3 px-4">Last Scan</th>
              </tr>
            </thead>

            <tbody className="text-black dark:text-white">
              {filteredScans
                .slice(
                  (currentPage - 1) * rowsPerPage,
                  currentPage * rowsPerPage,
                )
                .map((scan) => (
                  <tr
                    key={scan.id}
                    className="border-b border-gray-200 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-[#1A1A1A] cursor-pointer transition"
                  >
                    <td className="py-4 px-4">{scan.name}</td>
                    <td className="px-4">{scan.type}</td>

                    <td className="px-4">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium ${
                          scan.status === "Completed"
                            ? "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300"
                            : scan.status === "Failed"
                              ? "bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300"
                              : "bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-300"
                        }`}
                      >
                        {scan.status}
                      </span>
                    </td>

                    <td className="px-4">
                      <div className="flex items-center gap-3">
                        <div className="w-28 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                          <div
                            className={`h-full ${
                              scan.status === "Failed"
                                ? "bg-red-500"
                                : "bg-[#0CC8A8]"
                            }`}
                            style={{ width: `${scan.progress}%` }}
                          />
                        </div>

                        <span className="text-sm text-gray-700 dark:text-gray-300">
                          {scan.progress}%
                        </span>
                      </div>
                    </td>

                    <td className="px-4">
                      <div className="flex gap-2 text-xs font-semibold">
                        <span className="px-2 py-1 rounded bg-red-100 text-red-600 dark:bg-red-900 dark:text-red-300">
                          {scan.vulnerabilities.critical}
                        </span>
                        <span className="px-2 py-1 rounded bg-orange-100 text-orange-600 dark:bg-orange-900 dark:text-orange-300">
                          {scan.vulnerabilities.high}
                        </span>
                        <span className="px-2 py-1 rounded bg-yellow-100 text-yellow-600 dark:bg-yellow-900 dark:text-yellow-300">
                          {scan.vulnerabilities.medium}
                        </span>
                        <span className="px-2 py-1 rounded bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-300">
                          {scan.vulnerabilities.low}
                        </span>
                      </div>
                    </td>

                    <td className="px-4">{scan.lastScan}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
        <div className="mt-6 flex items-center justify-between text-sm text-gray-600 dark:text-gray-400">
          <div>
            Showing{" "}
            <span className="font-semibold text-black dark:text-white">
              {filteredScans.length === 0
                ? 0
                : (currentPage - 1) * rowsPerPage + 1}
            </span>{" "}
            -
            <span className="font-semibold text-black dark:text-white">
              {" "}
              {Math.min(currentPage * rowsPerPage, filteredScans.length)}
            </span>{" "}
            of{" "}
            <span className="font-semibold text-black dark:text-white">
              {filteredScans.length}
            </span>{" "}
            Scans
          </div>

          <div className="flex gap-2">
            <button
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((prev) => prev - 1)}
              className="px-2 py-1 border rounded disabled:opacity-40"
            >
              ‹
            </button>

            <button
              disabled={currentPage * rowsPerPage >= filteredScans.length}
              onClick={() => setCurrentPage((prev) => prev + 1)}
              className="px-2 py-1 border rounded disabled:opacity-40"
            >
              ›
            </button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default Dashboard;
