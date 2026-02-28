interface LogoProps {
  size?: "sm" | "md" | "lg";
}

const sizeConfig = {
  sm: { icon: 30, title: "text-sm", subtitle: "text-[10px]", gap: "gap-2" },
  md: { icon: 38, title: "text-base", subtitle: "text-xs", gap: "gap-2.5" },
  lg: { icon: 48, title: "text-xl", subtitle: "text-sm", gap: "gap-3" },
};

const Logo = ({ size = "md" }: LogoProps) => {
  const config = sizeConfig[size];

  return (
    <a href="/" className={`flex items-center ${config.gap}`}>
      {/* Wave icon — smooth flowing ocean wave */}
      <svg
        width={config.icon}
        height={config.icon}
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0"
      >
        {/* Main wave crest */}
        <path
          d="M4 28C8 20 14 14 20 18C26 22 28 30 34 26C40 22 44 16 46 12"
          className="stroke-primary"
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
        />
        {/* Secondary wave */}
        <path
          d="M2 34C6 28 12 22 18 26C24 30 26 36 32 32C38 28 42 22 44 18"
          className="stroke-primary"
          strokeWidth="2.5"
          strokeLinecap="round"
          fill="none"
          opacity="0.5"
        />
        {/* Subtle third wave */}
        <path
          d="M6 40C10 36 14 32 18 34C22 36 24 40 28 38C32 36 36 32 38 30"
          className="stroke-primary"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
          opacity="0.25"
        />
      </svg>

      {/* Stacked text */}
      <div className="flex flex-col leading-none">
        <span
          className={`${config.title} font-logo font-extrabold uppercase tracking-[0.2em] text-foreground`}
        >
          Cape Fear
        </span>
        <span
          className={`${config.subtitle} font-logo font-semibold uppercase tracking-[0.15em] text-primary`}
        >
          Web Co.
        </span>
      </div>
    </a>
  );
};

export default Logo;
