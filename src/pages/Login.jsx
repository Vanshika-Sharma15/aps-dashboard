import { useNavigate } from "react-router-dom";
import AuthLayout from "../layouts/AuthLayout";

function Login() {
  const navigate = useNavigate();

  return (
    <AuthLayout>
      <div className="bg-white p-10 rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.15)] border border-gray-200 w-full max-w-lg">
        <div className="mb-6">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Don’t have an account?{" "}
            <span
              onClick={() => navigate("/signup")}
              className="text-[#0CC8A8] cursor-pointer hover:underline"
            >
              Sign up
            </span>
          </p>
        </div>

        <h2 className="text-3xl font-semibold text-gray-900 mb-6">Log in</h2>

        <div className="space-y-4">
          <input
            type="email"
            placeholder="Email address"
            className="w-full p-3 rounded-lg border border-gray-300 bg-white text-gray-900 outline-none focus:ring-2 focus:ring-[#0CC8A8] transition"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 rounded-lg border border-gray-300 bg-white text-gray-900 outline-none focus:ring-2 focus:ring-[#0CC8A8] transition"
          />

          <button
            type="button"
            onClick={() => navigate("/dashboard")}
            className="w-full bg-[#0CC8A8] hover:bg-[#09b79a] text-white py-3 rounded-lg font-semibold transition shadow-md"
          >
            Log in
          </button>
        </div>
      </div>
    </AuthLayout>
  );
}

export default Login;
