import Image from "next/image";
import { memo } from "react";

interface LogoProps {
  className?: string;
  variant?: "dark" | "light";
}

export const Logo = memo<LogoProps>(function Logo({ 
  className = "h-8 w-auto", 
  variant = "light" 
}) {
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
      quality={90}
      sizes="(max-width: 768px) 120px, 180px"
    />
  );
});

export const LogoIcon = memo<{ className?: string }>(function LogoIcon({ 
  className = "h-10 w-10" 
}) {
  return (
    <Image
      src="/icon.svg"
      alt="SamOps"
      width={40}
      height={40}
      className={className}
      quality={90}
      sizes="40px"
    />
  );
});
