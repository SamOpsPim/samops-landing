"use client";

import { useState, FormEvent } from "react";

export function EmailForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes("@")) {
      setStatus("error");
      setMessage("Please enter a valid email address");
      return;
    }

    setStatus("loading");
    
    // Simulate API call - replace with actual endpoint
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    setStatus("success");
    setMessage("Thanks for joining! We'll notify you when we launch.");
    setEmail("");
    
    // Reset after 5 seconds
    setTimeout(() => {
      setStatus("idle");
      setMessage("");
    }, 5000);
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="relative">
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              disabled={status === "loading" || status === "success"}
              className="w-full px-5 py-4 bg-[#14161c] border border-[#4a4f5c] rounded-xl text-white placeholder:text-[#6b707c] focus:border-[#d46a3a] focus:ring-2 focus:ring-[#d46a3a]/20 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            />
          </div>
          <button
            type="submit"
            disabled={status === "loading" || status === "success"}
            className="px-8 py-4 bg-[#d46a3a] hover:bg-[#e07844] text-white font-semibold rounded-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg hover:shadow-[#d46a3a]/25 active:scale-95 flex items-center justify-center gap-2 min-w-[140px]"
          >
            {status === "loading" ? (
              <>
                <LoadingSpinner />
                <span>Joining...</span>
              </>
            ) : status === "success" ? (
              <>
                <CheckIcon />
                <span>Joined!</span>
              </>
            ) : (
              "Notify Me"
            )}
          </button>
        </div>
      </form>
      
      {message && (
        <p
          className={`mt-4 text-sm text-center animate-fade-in-up ${
            status === "error" ? "text-red-400" : "text-green-400"
          }`}
        >
          {message}
        </p>
      )}
      
      <p className="mt-4 text-xs text-[#6b707c] text-center">
        No spam, ever. Unsubscribe anytime.
      </p>
    </div>
  );
}

function LoadingSpinner() {
  return (
    <svg
      className="animate-spin h-5 w-5"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M5 13l4 4L19 7"
      />
    </svg>
  );
}
