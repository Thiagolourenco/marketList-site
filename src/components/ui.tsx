import Link from "next/link";

export function Icon({ src, alt = "" }: { src: string; alt?: string }) {
  return <img src={src} alt={alt} />;
}

export function Brand() {
  return (
    <Link href="/" className="brand" aria-label="MarketList">
      <img className="brand-mark" src="/assets/logo.png" alt="" />
      <p className="brand-name">
        Market<span>List</span>
      </p>
    </Link>
  );
}

export function Cta({
  href,
  children,
  variant = "primary",
}: {
  href: string;
  children: string;
  variant?: "primary" | "ghost";
}) {
  return (
    <a className={`cta cta-${variant}`} href={href}>
      {children}
      {variant === "primary" ? <Icon src="/assets/arrow-right.svg" /> : null}
    </a>
  );
}

export function Point({ children }: { children: string }) {
  return (
    <div className="point">
      <span className="dot">
        <Icon src="/assets/check.svg" />
      </span>
      <span>{children}</span>
    </div>
  );
}
