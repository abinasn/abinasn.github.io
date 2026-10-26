import { Link } from "react-router";
import { useLocation } from "react-router";

export function SectionLink({
  href,
  className,
  style,
  children,
  onClick,
  "aria-label": ariaLabel,
}: {
  href: string;
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
  onClick?: () => void;
  "aria-label"?: string;
}) {
  const pathname = useLocation().pathname;

  const hashAt = href.indexOf("#");
  const targetPath = hashAt <= 0 ? pathname : href.slice(0, hashAt);
  const shared = { className, style, onClick, "aria-label": ariaLabel };

  if (hashAt === -1 || targetPath !== pathname) {
    return (
      <Link to={href} {...shared}>
        {children}
      </Link>
    );
  }

  return (
    <a href={`#${href.slice(hashAt + 1)}`} {...shared}>
      {children}
    </a>
  );
}
