import Image from "next/image";

interface LogoProps {
  className?: string;
  variant?: "dark" | "light";
}

export function Logo({ className = "h-8 w-auto", variant = "light" }: LogoProps) {
  const src = variant === "light" 
    ? "/samops light-text.svg" 
    : "/samops dark-text.svg";
  
  return (
    <Image
      src={src}
      alt="SamOps"
      width={180}
      height={40}
      className={className}
      priority
    />
  );
}

export function LogoIcon({ className = "h-10 w-10" }: { className?: string }) {
  return (
    <Image
      src="/icon.svg"
      alt="SamOps"
      width={40}
      height={40}
      className={className}
      priority
    />
  );
}
