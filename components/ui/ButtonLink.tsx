import { Link } from "react-router";
import { SectionLink } from "./SectionLink";

export const buttonVariants = {
  solid: "bg-ink text-paper hover:opacity-90",
  outline: "border border-line hover:border-ink",
  light: "bg-panel-fg text-panel-deep hover:opacity-90",
  ghost: "border border-panel-line text-panel-fg hover:border-accent-soft",
} as const;

export const buttonBase =
  "inline-block rounded-full px-5 py-2.5 text-sm font-semibold transition-colors";

export function ButtonLink({
  href,
  children,
  variant = "solid",
  external = false,
  download = false,
}: {
  href: string;
  children: React.ReactNode;
  variant?: keyof typeof buttonVariants;
  external?: boolean;
  download?: boolean;
}) {
  const className = `${buttonBase} ${buttonVariants[variant]}`;

  if (download) {
    return (
      <a href={href} download className={className}>
        {children}
      </a>
    );
  }

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className={className}
      >
        {children}
      </a>
    );
  }

  if (href.includes("#")) {
    return (
      <SectionLink href={href} className={className}>
        {children}
      </SectionLink>
    );
  }

  return (
    <Link to={href} className={className}>
      {children}
    </Link>
  );
}
