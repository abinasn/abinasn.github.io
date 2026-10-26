import { ArrowUpRight } from "lucide-react";
import type { Resource } from "@/lib/content";

export function ResourceList({
  resources,
  id,
}: {
  resources: Resource[];
  id?: string;
}) {
  return (
    <section className="mt-12 mb-11">
      <h2
        id={id}
        className="mb-4 scroll-mt-5 text-[19px] font-bold tracking-[-0.7px] md:text-[20px]"
      >
        Where this came from
      </h2>

      <ul className="list-none">
        {resources.map((resource) => (
          <li key={resource.url}>
            <a
              href={resource.url}
              target="_blank"
              rel="noreferrer"
              className="border-line-soft hover:bg-card focus-visible:outline-accent group grid grid-cols-[minmax(0,1fr)_auto] items-center gap-5 rounded-md border-t px-1.5 py-3.75 transition-colors focus-visible:outline-2 focus-visible:-outline-offset-2"
            >
              <span className="min-w-0">
                <span className="group-hover:text-accent block text-[15px] font-semibold transition-colors">
                  {resource.title}
                  <span className="sr-only"> (opens in a new tab)</span>
                </span>
                <span className="text-dim mt-0.5 block font-mono text-[11px]">
                  {resource.kind}
                  {resource.author ? ` · by ${resource.author}` : ""}
                </span>
              </span>

              <ArrowUpRight
                size={14}
                aria-hidden
                className="text-dim flex-none"
              />
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
