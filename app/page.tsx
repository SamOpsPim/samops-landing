import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Background } from "@/components/ui/background";
import { EmailForm } from "@/components/ui/email-form";
import { LogoIcon } from "@/components/logo";

export default function ComingSoonPage() {
  return (
    <div className="min-h-screen flex flex-col relative">
      <Background />
      <Header />
      
      <main className="flex-1 flex flex-col items-center justify-center px-4 py-32">
        {/* Hero Section */}
        <div className="max-w-3xl mx-auto text-center space-y-8">
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

          {/* Email Signup */}
          <div className="pt-8 animate-fade-in-up opacity-0 stagger-4">
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-white">
                Get notified when we launch
              </h2>
              <EmailForm />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
