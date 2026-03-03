import { useNavigate } from "react-router-dom";
import AuthLayout from "../layouts/AuthLayout";
import { FaApple, FaGoogle } from "react-icons/fa";
import { SiMeta } from "react-icons/si";
import { FiEye } from "react-icons/fi";

function Signup() {
  const navigate = useNavigate();

  return (
    <AuthLayout>
      <div className="bg-white py-8 px-10 mx-4 rounded-2xl shadow-[0_25px_70px_rgba(0,0,0,0.25)] w-full max-w-md transition-all duration-300">
        <div className="mb-6 text-center">
          <h2 className="text-4xl font-semibold text-gray-900 mb-2">Sign up</h2>
          <p className="text-sm text-gray-500">
            Already have an account?{" "}
            <span
              onClick={() => navigate("/login")}
              className="text-[#0CC8A8] cursor-pointer font-medium"
            >
              Log in
            </span>
          </p>
        </div>

        <div className="space-y-4">
          <input
            type="text"
            placeholder="First name*"
            className="w-full h-12 px-4 rounded-xl border border-gray-300 bg-gray-50 text-gray-800 placeholder-gray-400 outline-none focus:ring-2 focus:ring-[#0CC8A8] focus:border-transparent transition"
          />

          <input
            type="text"
            placeholder="Last name*"
            className="w-full h-12 px-4 rounded-xl border border-gray-300 bg-gray-50 text-gray-800 placeholder-gray-400 outline-none focus:ring-2 focus:ring-[#0CC8A8] focus:border-transparent transition"
          />

          <input
            type="text"
            placeholder="Email address*"
            className="w-full h-12 px-4 rounded-xl border border-gray-300 bg-gray-50 text-gray-800 placeholder-gray-400 outline-none focus:ring-2 focus:ring-[#0CC8A8] focus:border-transparent transition"
          />

          <div className="relative">
            <input
              type="password"
              placeholder="Password (8+ characters)*"
              className="w-full h-12 px-4 pr-10 rounded-xl border border-gray-300 bg-gray-50 text-gray-800 placeholder-gray-400 outline-none focus:ring-2 focus:ring-[#0CC8A8] focus:border-transparent transition"
            />
            <FiEye
              size={18}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer"
            />
          </div>

          <div className="flex items-start gap-3 text-sm text-gray-600">
            <input
              type="checkbox"
              className="mt-1 h-4 w-4 rounded border-gray-300 accent-[#0CC8A8]"
            />
            <p>
              I agree to{" "}
              <span className="text-blue-600 cursor-pointer">
                Aps’s Terms & Conditions
              </span>{" "}
              and acknowledge the{" "}
              <span className="text-blue-600 cursor-pointer">
                Privacy Policy
              </span>
            </p>
          </div>

          <button
            type="button"
            onClick={() => navigate("/dashboard")}
            className="w-full h-12 bg-[#0CC8A8] hover:bg-[#0bb79a] hover:shadow-lg text-white rounded-full font-semibold transition shadow-md"
          >
            Create account
          </button>

          {/* Social login row */}
          <div className="flex justify-between items-center gap-4 pt-5">
            <button className="flex-1 h-12 bg-black text-white rounded-full flex items-center justify-center hover:opacity-90 transition">
              <FaApple size={20} />
            </button>

            <button className="flex-1 h-12 bg-gray-100 border border-gray-300 rounded-full flex items-center justify-center hover:bg-gray-200 transition">
              <FaGoogle size={18} className="text-red-500" />
            </button>

            <button className="flex-1 h-12 bg-[#2D6CDF] text-white rounded-full flex items-center justify-center hover:opacity-90 transition">
              <SiMeta size={20} />
            </button>
          </div>
        </div>
      </div>
    </AuthLayout>
  );
}

export default Signup;
