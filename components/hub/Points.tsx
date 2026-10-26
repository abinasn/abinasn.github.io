export function Points({ children }: { children: React.ReactNode }) {
  return <dl className="mt-4 mb-4.5 flex flex-col">{children}</dl>;
}

export function Point({
  term,
  children,
}: {
  term: string;
  children: React.ReactNode;
}) {
  return (
    <div className="border-line-soft grid grid-cols-1 gap-y-1 border-t py-3.25 md:grid-cols-[9rem_minmax(0,1fr)] md:gap-x-5 md:gap-y-0 lg:grid-cols-[10.5rem_minmax(0,1fr)] lg:gap-x-5.5">
      <dt className="text-[14px] leading-normal font-bold">{term}</dt>

      <dd className="text-ink-soft text-[14px] leading-[1.65] [&_p]:m-0 [&_p]:text-inherit md:text-[14.5px]">
        {children}
      </dd>
    </div>
  );
}
