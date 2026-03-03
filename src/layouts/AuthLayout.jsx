function AuthLayout({ children }) {
  return (
    <div className="min-h-screen flex relative overflow-hidden">
      {/* GLOBAL BACKGROUND GRADIENT */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0F0F0F] via-[#0F2A2A] to-[#0C1E1E]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(12,200,168,0.25),transparent_40%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(255,120,60,0.25),transparent_40%)]" />

      {/* CONTENT */}
      <div className="relative z-10 flex w-full">
        {/* LEFT SIDE */}
        <div className="hidden md:flex w-1/2 p-16 lg:p-20 flex-col justify-between text-white">
          <div>
            <div className="flex items-center gap-3 mb-10">
              <div className="w-8 h-8 rounded-full bg-[#2BB6A8] flex items-center justify-center">
                <div className="w-3 h-3 bg-white rounded-full"></div>
              </div>
              <span className="text-lg font-semibold text-[#2BB6A8]">aps</span>
            </div>

            <h2 className="text-5xl font-semibold leading-tight mb-10">
              Expert level Cybersecurity in{" "}
              <span className="text-[#0CC8A8]">hours</span> not weeks.
            </h2>

            <div className="space-y-5 text-gray-300 text-lg">
              <p>
                ✓ Effortlessly spider and map targets to uncover hidden security
                flaws
              </p>
              <p>
                ✓ Deliver high-quality, validated findings in hours, not weeks.
              </p>
              <p>
                ✓ Generate professional, enterprise-grade security reports
                automatically.
              </p>
            </div>
          </div>

          <div className="text-sm text-gray-400 mt-10">
            <div className="text-[#0CC8A8] mb-1">★ Trustpilot</div>
            Rated 4.5/5.0 (100k+ reviews)
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex w-full md:w-1/2 items-center justify-center px-6">
          {children}
        </div>
      </div>
    </div>
  );
}

export default AuthLayout;
