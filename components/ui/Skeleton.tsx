export function Skeleton({ className = "" }: { className?: string }) {
  return <span className={`bg-chip block animate-pulse rounded ${className}`} />;
}
