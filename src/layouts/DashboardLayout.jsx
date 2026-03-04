import { useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import { ThemeContext } from "../context/ThemeContext";
import {
  LayoutDashboard,
  Folder,
  Scan,
  Calendar,
  Bell,
  Settings,
  LifeBuoy,
} from "lucide-react";

function DashboardLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-[#0F0F0F]">
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 z-30 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}
      {/* Mobile Top Bar */}
      <div className="lg:hidden flex items-center justify-between p-4 border-b bg-white dark:bg-[#111]">
        <span className="font-semibold text-lg">aps</span>
        <button onClick={() => setSidebarOpen(!sidebarOpen)}>☰</button>
      </div>
      <div className="flex">
        {/* SIDEBAR */}
        <div
          className={`fixed inset-y-0 left-0 z-40 w-64 bg-white dark:bg-[#111] border-r border-gray-200 dark:border-gray-800 p-6 flex flex-col justify-between transform transition-transform duration-300 ease-in-out
  ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
  lg:translate-x-0 lg:static lg:transform-none`}
        >
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
                <LayoutDashboard size={18} />
                <span>Dashboard</span>
              </div>

              <div
                onClick={() => navigate("/projects")}
                className="flex items-center gap-3 cursor-pointer px-4 py-3 rounded-full transition text-[#4B5563] hover:bg-gray-200"
              >
                <Folder size={18} />
                <span>Projects</span>
              </div>

              <div
                onClick={() => navigate("/scans")}
                className={`flex items-center gap-3 px-4 py-3 rounded-full transition cursor-pointer ${
                  location.pathname.startsWith("/scans")
                    ? "bg-[#DFF5F2] text-[#2BB6A8] dark:bg-[#0A2F37] dark:text-[#0CC8A8]"
                    : "text-[#4B5563] dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-[#1F2937]"
                }`}
              >
                <Scan size={18} />
                <span>Scan</span>
              </div>

              <div
                onClick={() => navigate("/projects")}
                className="flex items-center gap-3 cursor-pointer px-4 py-3 rounded-full transition text-[#4B5563] hover:bg-gray-200"
              >
                <Bell size={18} />
                <span>Schedule</span>
              </div>

              <div className="border-t border-gray-200 my-6"></div>

              <div
                onClick={() => navigate("/projects")}
                className="flex items-center gap-3 cursor-pointer px-4 py-3 rounded-full transition text-[#4B5563] hover:bg-gray-200"
              >
                <Calendar size={18} />
                <span>Notification</span>
              </div>

              <div
                onClick={() => navigate("/projects")}
                className="flex items-center gap-3 cursor-pointer px-4 py-3 rounded-full transition text-[#4B5563] hover:bg-gray-200"
              >
                <Settings size={18} />
                <span>Settings</span>
              </div>

              <div
                onClick={() => navigate("/projects")}
                className="flex items-center gap-3 cursor-pointer px-4 py-3 rounded-full transition text-[#4B5563] hover:bg-gray-200"
              >
                <LifeBuoy size={18} />
                <span>Support</span>
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
    </div>
  );
}

export default DashboardLayout;
