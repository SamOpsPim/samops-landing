import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Background } from "@/components/ui/background";
import { EmailForm } from "@/components/ui/email-form";
import { LogoIcon } from "@/components/logo";

/* ── Icon components ── */
function IconAnomalyDetection() {
  return (
    <svg
      className="w-7 h-7"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
      />
    </svg>
  );
}

function IconRecommendation() {
  return (
    <svg
      className="w-7 h-7"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"
      />
    </svg>
  );
}

function IconCodeAgent() {
  return (
    <svg
      className="w-7 h-7"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
      />
    </svg>
  );
}

function IconDashboard() {
  return (
    <svg
      className="w-7 h-7"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6"
      />
    </svg>
  );
}

function IconTicket() {
  return (
    <svg
      className="w-7 h-7"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 010 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 010-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375Z"
      />
    </svg>
  );
}

function IconNotification() {
  return (
    <svg
      className="w-7 h-7"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
      />
    </svg>
  );
}

function IconShield() {
  return (
    <svg
      className="w-7 h-7"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"
      />
    </svg>
  );
}

function IconCloud() {
  return (
    <svg
      className="w-7 h-7"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15Z"
      />
    </svg>
  );
}

function IconChart() {
  return (
    <svg
      className="w-7 h-7"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6Z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5Z"
      />
    </svg>
  );
}

function IconArrowRight() {
  return (
    <svg
      className="w-4 h-4"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
      />
    </svg>
  );
}

function IconCheck() {
  return (
    <svg
      className="w-5 h-5 text-[#d46a3a]"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.5 12.75l6 6 9-13.5"
      />
    </svg>
  );
}

/* ── Data ── */
const features = [
  {
    icon: <IconAnomalyDetection />,
    title: "Anomaly Detection",
    description:
      "ML-powered detection of spend spikes, budget drifts, and structural cost changes — scored with business context and statistical confidence.",
  },
  {
    icon: <IconRecommendation />,
    title: "Smart Recommendations",
    description:
      "Compute rightsizing, scheduling, storage tiering, commitment planning, and network optimization — each with a concrete savings estimate.",
  },
  {
    icon: <IconCodeAgent />,
    title: "AI Code Analysis Agent",
    description:
      "An LLM agent that correlates cost anomalies to source code, identifies wasteful patterns (N+1 queries, polling loops), and opens a fix PR automatically.",
  },
  {
    icon: <IconDashboard />,
    title: "Unified Dashboard",
    description:
      "Web and mobile dashboards to explore costs by service, tag, project, or region — with drill-down, comparison, and time-series views.",
  },
  {
    icon: <IconTicket />,
    title: "Action Workflows",
    description:
      "Turn any signal into a ticket with configurable approvals, execute fixes via provider connectors, and audit every step end-to-end.",
  },
  {
    icon: <IconNotification />,
    title: "Alerts & Reporting",
    description:
      "Real-time notifications (email, push, webhook), budget threshold alerts, and periodic PDF/CSV reports with savings KPIs.",
  },
];

const howItWorks = [
  {
    step: "01",
    title: "Connect Your Clouds",
    description:
      "Plug in your AWS, Azure, or GCP accounts with secure read-only connectors. SamOps normalizes billing, usage, and performance metrics into a unified model.",
  },
  {
    step: "02",
    title: "Detect & Analyze",
    description:
      "Our ML pipeline continuously scans for anomalies — spikes, drifts, and budget exceedances — and generates scored, explainable findings.",
  },
  {
    step: "03",
    title: "Recommend & Prioritize",
    description:
      "Optimization recommendations are ranked by savings potential, risk, and confidence — rightsizing, scheduling, commitments, storage lifecycle, and more.",
  },
  {
    step: "04",
    title: "Fix & Automate",
    description:
      "One-click actions or automated workflows execute fixes, create ITSM tickets, and when the root cause is in code — the AI Agent opens a pull request.",
  },
];

const stats = [
  { value: "40%", label: "Average cost savings" },
  { value: "<5 min", label: "Anomaly detection time" },
  { value: "Multi-cloud", label: "AWS · Azure · GCP" },
  { value: "100%", label: "Auditable actions" },
];

const platformCapabilities = [
  {
    icon: <IconCloud />,
    title: "Multi-Cloud Connectors",
    description:
      "Extensible adapter pattern for any cloud provider billing and metrics API.",
  },
  {
    icon: <IconShield />,
    title: "Governance & Compliance",
    description:
      "Budgets, policies, role-based access, and full audit trail for every action.",
  },
  {
    icon: <IconChart />,
    title: "FinOps Analytics",
    description:
      "Cost breakdowns by service, tag, project, team — with trend analysis and forecasting.",
  },
];

const pricingTiers = [
  {
    name: "Starter",
    price: "Free",
    description: "For small teams getting started with cloud cost visibility.",
    features: [
      "1 cloud account",
      "Cost dashboard",
      "Basic anomaly alerts",
      "Weekly email reports",
      "Community support",
    ],
    cta: "Get Started",
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$499",
    period: "/mo",
    description: "For growing teams that need optimization and automation.",
    features: [
      "Unlimited cloud accounts",
      "ML anomaly detection",
      "Smart recommendations",
      "Action workflows & approvals",
      "Slack / Teams integration",
      "Priority support",
    ],
    cta: "Start Free Trial",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description:
      "For organizations requiring full governance and AI code analysis.",
    features: [
      "Everything in Pro",
      "AI Code Analysis Agent",
      "Auto PR generation",
      "SSO / SCIM",
      "Custom SLA",
      "Dedicated success manager",
    ],
    cta: "Contact Sales",
    highlighted: false,
  },
];

/* ── Page ── */
export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col relative">
      <Background />
      <Header />

      <main className="flex-1">
        {/* ═══════════════════════ HERO ═══════════════════════ */}
        <section className="relative pt-36 pb-24 sm:pt-44 sm:pb-32 px-4">
          <div className="max-w-5xl mx-auto text-center space-y-8">
            {/* Badge */}
            <div className="animate-fade-in-up opacity-0 stagger-1">
              <span className="inline-flex items-center gap-2 px-5 py-2 text-sm font-medium text-[#d46a3a] bg-[#d46a3a]/10 border border-[#d46a3a]/30 rounded-full">
                <span className="w-2 h-2 rounded-full bg-[#d46a3a] animate-pulse" />
                Cloud FinOps Intelligence Platform
              </span>
            </div>

            {/* Heading */}
            <div className="space-y-6 animate-fade-in-up opacity-0 stagger-2">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight">
                Stop Guessing.
                <br />
                <span className="gradient-text">Start Optimizing.</span>
              </h1>
              <p className="text-lg sm:text-xl text-[#a0aec0] max-w-3xl mx-auto leading-relaxed">
                SamOps centralizes cloud cost visibility, detects anomalies in
                real time, generates optimization recommendations, and automates
                remediation — all the way from billing data to a code-level pull
                request.
              </p>
            </div>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 animate-fade-in-up opacity-0 stagger-3">
              <a
                href="#waitlist"
                className="group px-8 py-4 bg-[#d46a3a] hover:bg-[#e07844] text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-[#d46a3a]/25 active:scale-95 flex items-center gap-2"
              >
                Join the Waitlist
                <IconArrowRight />
              </a>
              <a
                href="#features"
                className="px-8 py-4 text-[#a0aec0] hover:text-white border border-[#4a4f5c] hover:border-[#d46a3a]/40 rounded-xl transition-all duration-300"
              >
                Explore Features
              </a>
            </div>

            {/* Dashboard mockup */}
            <div className="relative mt-16 animate-fade-in-up opacity-0 stagger-4">
              <div className="glass-strong rounded-2xl p-2 max-w-4xl mx-auto animate-border-glow">
                <div className="bg-[#0d0f14] rounded-xl overflow-hidden border border-[#2b2f3a]/60">
                  {/* Browser chrome */}
                  <div className="flex items-center gap-2 px-4 py-3 border-b border-[#2b2f3a]/60">
                    <div className="flex gap-1.5">
                      <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                      <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
                      <span className="w-3 h-3 rounded-full bg-[#28c840]" />
                    </div>
                    <div className="flex-1 mx-4">
                      <div className="bg-[#1a1d24] rounded-md px-4 py-1.5 text-xs text-[#6b707c] text-center max-w-xs mx-auto">
                        app.samops.io/dashboard
                      </div>
                    </div>
                  </div>
                  {/* Dashboard placeholder content */}
                  <div className="p-6 sm:p-8 space-y-6">
                    {/* Top stats row */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {[
                        {
                          label: "Monthly Spend",
                          value: "$24,830",
                          change: "-12%",
                          positive: true,
                        },
                        {
                          label: "Active Anomalies",
                          value: "3",
                          change: "+1",
                          positive: false,
                        },
                        {
                          label: "Open Recommendations",
                          value: "17",
                          change: "new",
                          positive: true,
                        },
                        {
                          label: "Savings This Quarter",
                          value: "$18.2k",
                          change: "+34%",
                          positive: true,
                        },
                      ].map((stat, i) => (
                        <div
                          key={i}
                          className="bg-[#14161c] rounded-lg p-4 border border-[#2b2f3a]/60"
                        >
                          <p className="text-xs text-[#6b707c] mb-1">
                            {stat.label}
                          </p>
                          <p className="text-xl font-bold text-white">
                            {stat.value}
                          </p>
                          <span
                            className={`text-xs ${stat.positive ? "text-green-400" : "text-red-400"}`}
                          >
                            {stat.change}
                          </span>
                        </div>
                      ))}
                    </div>
                    {/* Chart area placeholder */}
                    <div className="bg-[#14161c] rounded-lg p-6 border border-[#2b2f3a]/60 h-48 flex items-end justify-between gap-2">
                      {[40, 55, 35, 65, 50, 75, 60, 80, 45, 70, 55, 85].map(
                        (h, i) => (
                          <div
                            key={i}
                            className="flex-1 flex flex-col items-center gap-1"
                          >
                            <div
                              className="w-full rounded-t-sm transition-all duration-500"
                              style={{
                                height: `${h}%`,
                                background:
                                  h > 70
                                    ? "linear-gradient(to top, #d46a3a, #e07844)"
                                    : "linear-gradient(to top, #2b2f3a, #3a3f4b)",
                              }}
                            />
                          </div>
                        ),
                      )}
                    </div>
                  </div>
                </div>
              </div>
              {/* Glow effect behind */}
              <div
                className="absolute inset-0 -z-10 blur-3xl opacity-20"
                style={{
                  background:
                    "radial-gradient(ellipse at center, #d46a3a 0%, transparent 70%)",
                }}
              />
            </div>
          </div>
        </section>

        {/* ═══════════════════════ STATS BAR ═══════════════════════ */}
        <section className="py-16 px-4 border-y border-[#2b2f3a]/40">
          <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((s, i) => (
              <div key={i} className="space-y-2">
                <p className="text-3xl sm:text-4xl font-bold gradient-text">
                  {s.value}
                </p>
                <p className="text-sm text-[#a0aec0]">{s.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ═══════════════════════ FEATURES ═══════════════════════ */}
        <section id="features" className="py-24 sm:py-32 px-4">
          <div className="max-w-6xl mx-auto">
            {/* Section header */}
            <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
              <span className="text-sm font-medium text-[#d46a3a] uppercase tracking-wider">
                Features
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white">
                Everything you need to{" "}
                <span className="gradient-text">master cloud costs</span>
              </h2>
              <p className="text-[#a0aec0] leading-relaxed">
                From real-time visibility to automated code fixes — SamOps
                covers the entire FinOps lifecycle.
              </p>
            </div>

            {/* Feature grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((f, i) => (
                <div
                  key={i}
                  className="group glass-strong rounded-2xl p-6 hover:border-[#d46a3a]/30 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#d46a3a]/10 text-[#d46a3a] flex items-center justify-center mb-4 group-hover:bg-[#d46a3a]/20 transition-colors">
                    {f.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {f.title}
                  </h3>
                  <p className="text-sm text-[#a0aec0] leading-relaxed">
                    {f.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════ HOW IT WORKS ═══════════════════════ */}
        <section
          id="how-it-works"
          className="py-24 sm:py-32 px-4 border-t border-[#2b2f3a]/40"
        >
          <div className="max-w-5xl mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
              <span className="text-sm font-medium text-[#d46a3a] uppercase tracking-wider">
                How It Works
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white">
                Four steps from{" "}
                <span className="gradient-text">chaos to control</span>
              </h2>
            </div>

            <div className="space-y-8">
              {howItWorks.map((item, i) => (
                <div
                  key={i}
                  className="group relative flex flex-col sm:flex-row gap-6 glass-strong rounded-2xl p-6 sm:p-8 hover:border-[#d46a3a]/20 transition-all duration-300"
                >
                  {/* Step number */}
                  <div className="shrink-0 w-14 h-14 rounded-xl bg-[#d46a3a]/10 text-[#d46a3a] flex items-center justify-center font-bold text-lg group-hover:bg-[#d46a3a]/20 transition-colors">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-[#a0aec0] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════ PLATFORM ═══════════════════════ */}
        <section
          id="platform"
          className="py-24 sm:py-32 px-4 border-t border-[#2b2f3a]/40"
        >
          <div className="max-w-6xl mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
              <span className="text-sm font-medium text-[#d46a3a] uppercase tracking-wider">
                Platform
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white">
                Built for{" "}
                <span className="gradient-text">enterprise FinOps</span>
              </h2>
              <p className="text-[#a0aec0] leading-relaxed">
                Multi-cloud, multi-team, and fully auditable — with the security
                and governance your organization demands.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-16">
              {platformCapabilities.map((cap, i) => (
                <div
                  key={i}
                  className="glass-strong rounded-2xl p-6 text-center hover:border-[#d46a3a]/20 transition-all duration-300"
                >
                  <div className="w-14 h-14 rounded-full bg-[#d46a3a]/10 text-[#d46a3a] flex items-center justify-center mx-auto mb-4">
                    {cap.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {cap.title}
                  </h3>
                  <p className="text-sm text-[#a0aec0] leading-relaxed">
                    {cap.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Tech stack */}
            <div className="glass-strong rounded-2xl p-8 sm:p-10">
              <h3 className="text-lg font-semibold text-white mb-6 text-center">
                Technology Stack
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 text-center">
                {[
                  "Next.js",
                  "Flutter",
                  "PostgreSQL (Supabase)",
                  "Python ML",
                  "REST / GraphQL",
                  "Prometheus",
                  "Grafana",
                  "LLM Agents",
                ].map((tech) => (
                  <div
                    key={tech}
                    className="px-4 py-3 rounded-xl bg-[#14161c] border border-[#2b2f3a]/60 text-sm text-[#a0aec0]"
                  >
                    {tech}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════ PRICING ═══════════════════════ */}
        <section
          id="pricing"
          className="py-24 sm:py-32 px-4 border-t border-[#2b2f3a]/40"
        >
          <div className="max-w-5xl mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
              <span className="text-sm font-medium text-[#d46a3a] uppercase tracking-wider">
                Pricing
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white">
                Simple,{" "}
                <span className="gradient-text">transparent pricing</span>
              </h2>
              <p className="text-[#a0aec0] leading-relaxed">
                Start free. Scale as you grow. Pay only for what your team
                needs.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {pricingTiers.map((tier) => (
                <div
                  key={tier.name}
                  className={`relative rounded-2xl p-6 sm:p-8 transition-all duration-300 ${
                    tier.highlighted
                      ? "glass-strong border-[#d46a3a]/40 ring-1 ring-[#d46a3a]/20 scale-[1.02]"
                      : "glass-strong hover:border-[#d46a3a]/20"
                  }`}
                >
                  {tier.highlighted && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <span className="px-4 py-1 text-xs font-semibold text-white bg-[#d46a3a] rounded-full">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-white">
                      {tier.name}
                    </h3>
                    <div className="mt-3 flex items-baseline gap-1">
                      <span className="text-4xl font-bold text-white">
                        {tier.price}
                      </span>
                      {tier.period && (
                        <span className="text-[#6b707c]">{tier.period}</span>
                      )}
                    </div>
                    <p className="mt-2 text-sm text-[#a0aec0]">
                      {tier.description}
                    </p>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {tier.features.map((feat) => (
                      <li
                        key={feat}
                        className="flex items-start gap-2 text-sm text-[#a0aec0]"
                      >
                        <IconCheck />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#waitlist"
                    className={`block w-full text-center py-3 rounded-xl font-semibold text-sm transition-all duration-300 ${
                      tier.highlighted
                        ? "bg-[#d46a3a] hover:bg-[#e07844] text-white hover:shadow-lg hover:shadow-[#d46a3a]/25"
                        : "border border-[#4a4f5c] text-[#a0aec0] hover:border-[#d46a3a]/40 hover:text-white"
                    }`}
                  >
                    {tier.cta}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════ CTA / WAITLIST ═══════════════════════ */}
        <section
          id="waitlist"
          className="py-24 sm:py-32 px-4 border-t border-[#2b2f3a]/40"
        >
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <div className="space-y-2">
              <LogoIcon className="h-16 w-16 mx-auto animate-float" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Ready to take control of your{" "}
              <span className="gradient-text">cloud spend</span>?
            </h2>
            <p className="text-lg text-[#a0aec0] max-w-xl mx-auto leading-relaxed">
              Join the waitlist and be the first to experience the future of
              FinOps — from anomaly detection to automated code fixes.
            </p>
            <div className="pt-4">
              <EmailForm />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
