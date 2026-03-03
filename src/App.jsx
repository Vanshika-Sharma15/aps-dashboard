import { Routes, Route } from "react-router-dom";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import ScanPage from "./pages/ScanPage";

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0F0F0F] transition-colors duration-300">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/scans" element={<ScanPage />} />
      </Routes>
    </div>
  );
}

export default App;
