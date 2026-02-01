import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Background } from "@/components/ui/background";
import { Countdown } from "@/components/ui/countdown";
import { EmailForm } from "@/components/ui/email-form";
import { LogoIcon } from "@/components/logo";

// Set launch date to 3 months from now
const LAUNCH_DATE = new Date(Date.now() + 90 * 24 * 60 * 60 * 1000);

export default function ComingSoonPage() {
  return (
    <div className="min-h-screen flex flex-col relative">
      <Background />
      <Header />
      
      <main className="flex-1 flex flex-col items-center justify-center px-4 py-32">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Animated Logo */}
          <div className="flex justify-center mb-8 animate-fade-in-up opacity-0 stagger-1">
            <div className="relative">
              <LogoIcon className="h-20 w-20 sm:h-24 sm:w-24 animate-float" />
              <div 
                className="absolute inset-0 rounded-full animate-pulse-glow"
                style={{
                  background: "radial-gradient(circle, rgba(212,106,58,0.3) 0%, transparent 70%)",
                  transform: "scale(1.5)",
                }}
              />
            </div>
          </div>

          {/* Coming Soon Badge */}
          <div className="animate-fade-in-up opacity-0 stagger-2">
            <span className="inline-flex items-center gap-2 px-6 py-2 text-sm font-medium text-[#d46a3a] bg-[#d46a3a]/10 border border-[#d46a3a]/30 rounded-full">
              <span className="w-2 h-2 rounded-full bg-[#d46a3a] animate-pulse" />
              Launching Soon
            </span>
          </div>

          {/* Main Heading */}
          <div className="space-y-4 animate-fade-in-up opacity-0 stagger-3">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
              Something{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d46a3a] to-[#e07844] animate-gradient">
                Amazing
              </span>
              <br />
              is Coming
            </h1>
            <p className="text-lg sm:text-xl text-[#a0aec0] max-w-2xl mx-auto leading-relaxed">
              SamOps transforms complex system data into actionable intelligence. 
              Simplify operations, optimize costs, and gain clear insights.
            </p>
          </div>

          {/* Countdown Timer */}
          <div className="py-8 animate-fade-in-up opacity-0 stagger-4">
            <Countdown targetDate={LAUNCH_DATE} />
          </div>

          {/* Email Signup */}
          <div className="animate-fade-in-up opacity-0 stagger-5">
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-white">
                Get notified when we launch
              </h2>
              <EmailForm />
            </div>
          </div>

          {/* Features Preview */}
          <div className="mt-16 pt-12 border-t border-[#2b2f3a]/50 animate-fade-in-up opacity-0" style={{ animationDelay: "0.6s" }}>
            <p className="text-sm text-[#6b707c] mb-8 uppercase tracking-wider">
              What to expect
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <div
                  key={feature.title}
                  className="glass rounded-2xl p-6 hover:border-[#d46a3a]/50 transition-all duration-300 hover:transform hover:scale-105"
                  style={{ animationDelay: `${0.7 + index * 0.1}s` }}
                >
                  <div className="w-12 h-12 rounded-xl bg-[#d46a3a]/10 flex items-center justify-center mb-4 mx-auto">
                    {feature.icon}
                  </div>
                  <h3 className="text-white font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-[#a0aec0]">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

const features = [
  {
    title: "Real-time Monitoring",
    description: "Track your cloud resources and system metrics with live dashboards and alerts.",
    icon: (
      <svg className="w-6 h-6 text-[#d46a3a]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    title: "Cost Optimization",
    description: "Identify inefficiencies and receive actionable recommendations to reduce cloud spend.",
    icon: (
      <svg className="w-6 h-6 text-[#d46a3a]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Anomaly Detection",
    description: "AI-powered detection of unusual patterns before they become critical issues.",
    icon: (
      <svg className="w-6 h-6 text-[#d46a3a]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
];
