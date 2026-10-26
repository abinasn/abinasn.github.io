import { useEffect, useRef, type CSSProperties, type ElementType } from "react";

const ROOT_MARGIN = "0px 0px -12% 0px";

export function Reveal({
  children,
  delay = 0,
  as = "div",
  className = "",
  style,
}: {
  children: React.ReactNode;
  delay?: number;
  as?: "div" | "li" | "section" | "article";
  className?: string;
  style?: CSSProperties;
}) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const reveal = () => {
      node.dataset.reveal = "in";
    };

    if (typeof IntersectionObserver === "undefined") {
      reveal();
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          reveal();
          observer.disconnect();
        }
      },
      { rootMargin: ROOT_MARGIN },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const Tag = as as ElementType;

  return (
    <Tag
      ref={ref}
      data-reveal=""
      style={
        delay
          ? ({ ...style, "--reveal-delay": `${delay}ms` } as CSSProperties)
          : style
      }
      className={className}
    >
      {children}
    </Tag>
  );
}
