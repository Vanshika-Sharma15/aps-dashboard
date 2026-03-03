import { useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";

function DashboardLayout({ children }) {
  const navigate = useNavigate();
  const location = useLocation();
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="min-h-screen flex bg-gray-100 dark:bg-[#0F0F0F]">
      {/* SIDEBAR */}
      <div className="w-64 bg-white dark:bg-[#111] border-r border-gray-200 dark:border-gray-800 p-6 flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-3 mb-10">
            <div className="w-8 h-8 rounded-full bg-[#2BB6A8] flex items-center justify-center">
              <div className="w-3 h-3 bg-white rounded-full"></div>
            </div>
            <span className="text-lg font-semibold text-[#2BB6A8]">aps</span>
          </div>

          <nav className="space-y-2">
            <div
              onClick={() => navigate("/dashboard")}
              className={`flex items-center gap-3 px-4 py-3 rounded-full transition cursor-pointer ${
                location.pathname.startsWith("/dashboard")
                  ? "bg-[#DFF5F2] text-[#2BB6A8]"
                  : "text-[#4B5563] hover:bg-gray-200"
              }`}
            >
              Dashboard
            </div>

            <div className="cursor-pointer px-3 py-2 rounded-md text-gray-600 dark:text-gray-400 hover:text-teal-500">
              Projects
            </div>

            <div
              onClick={() => navigate("/scans")}
              className={`flex items-center gap-3 px-4 py-3 rounded-full transition cursor-pointer ${
                location.pathname.startsWith("/scans")
                  ? "bg-[#DFF5F2] text-[#2BB6A8] dark:bg-[#0A2F37] dark:text-[#0CC8A8]"
                  : "text-[#4B5563] dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-[#1F2937]"
              }`}
            >
              Scans
            </div>

            <div className="cursor-pointer px-3 py-2 rounded-md text-gray-600 dark:text-gray-400 hover:text-teal-500">
              Schedule
            </div>

            <div className="border-t border-gray-200 my-6"></div>

            <div className="cursor-pointer px-3 py-2 rounded-md text-gray-600 dark:text-gray-400 hover:text-teal-500">
              Notifications
            </div>

            <div className="cursor-pointer px-3 py-2 rounded-md text-gray-600 dark:text-gray-400 hover:text-teal-500">
              Settings
            </div>

            <div className="cursor-pointer px-3 py-2 rounded-md text-gray-600 dark:text-gray-400 hover:text-teal-500">
              Support
            </div>
          </nav>
        </div>

        <div className="space-y-6">
          <button
            onClick={toggleTheme}
            className="w-full bg-gray-200 dark:bg-gray-800 text-black dark:text-white py-2 rounded-md text-sm"
          >
            Switch to {theme === "dark" ? "Light" : "Dark"} Mode
          </button>

          {/* Profile Section */}
          <div className="flex items-center gap-3 p-3 rounded-xl bg-gray-100 dark:bg-[#1A1A1A] border border-gray-200 dark:border-gray-800">
            <div className="w-10 h-10 rounded-full bg-[#0CC8A8] flex items-center justify-center text-white font-semibold">
              A
            </div>

            <div className="text-sm">
              <p className="font-medium text-black dark:text-white">
                admin@edu.com
              </p>
              <p className="text-gray-500 dark:text-gray-400 text-xs">
                Security Lead
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="flex-1">{children}</div>
    </div>
  );
}

export default DashboardLayout;
