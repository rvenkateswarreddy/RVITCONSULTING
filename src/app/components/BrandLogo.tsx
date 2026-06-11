type BrandLogoProps = {
  inverse?: boolean;
  compact?: boolean;
  className?: string;
};

export default function BrandLogo({
  inverse = false,
  compact = false,
  className = "",
}: BrandLogoProps) {
  return (
    <span className={`inline-flex items-center ${className}`}>
      <span
        className={`mr-3 h-10 w-1 rounded-full ${
          inverse ? "bg-cyan-300" : "bg-blue-600"
        }`}
        aria-hidden
      />
      <span
        className={`display-font font-extrabold tracking-[-0.055em] ${
          inverse ? "text-white" : "text-[#081B33]"
        } ${compact ? "text-xl" : "text-[21px]"}`}
      >
        RV <span className={inverse ? "text-blue-300" : "text-blue-600"}>IT</span>
        {!compact && (
          <span
            className={`mt-1 block text-[8px] font-extrabold uppercase tracking-[0.28em] ${
              inverse ? "text-slate-300" : "text-slate-500"
            }`}
          >
            Consulting
          </span>
        )}
      </span>
    </span>
  );
}
