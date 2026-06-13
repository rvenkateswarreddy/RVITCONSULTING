import Image from "next/image";

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
    <span
      role="img"
      aria-label="RV IT"
      className={`inline-flex shrink-0 items-center ${
        inverse ? "rounded-md bg-white px-3 py-2 shadow-sm" : ""
      } ${className}`}
    >
      <Image
        src="/assets/brand/rv-it-logo-mark.png"
        alt=""
        width={567}
        height={302}
        priority
        className={`w-auto object-contain ${
          compact ? "h-8" : inverse ? "h-12" : "h-10"
        }`}
        sizes={compact ? "60px" : inverse ? "90px" : "76px"}
      />
      <span
        className="ml-2 font-sans text-[17px] font-bold tracking-[0.16em] text-[#081B33]"
        aria-hidden
      >
        IT
      </span>
    </span>
  );
}
