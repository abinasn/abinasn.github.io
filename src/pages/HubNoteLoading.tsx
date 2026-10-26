import { Skeleton } from "@/components/ui/Skeleton";

const PARAGRAPH_WIDTHS = [
  ["w-full", "w-full", "w-[92%]", "w-[64%]"],
  ["w-full", "w-[96%]", "w-[88%]"],
  ["w-full", "w-[90%]", "w-full", "w-[47%]"],
];

export function HubNoteLoading() {
  return (
    <div className="w-full px-5 md:px-8 lg:px-11.5">
      <p role="status" className="sr-only">
        Loading note
      </p>

      <div
        aria-hidden
        className="max-w-hub mx-auto w-full pt-7 pb-18 md:pt-10 md:pb-24 lg:pt-11 lg:pb-28"
      >
        <Skeleton className="mb-4 h-[13px] w-56" />

        <Skeleton className="h-[33px] w-[78%] md:h-[40px] lg:h-[46px]" />

        <div className="mt-4 space-y-2.5">
          <Skeleton className="h-[18px] w-full" />
          <Skeleton className="h-[18px] w-[72%]" />
        </div>

        <div className="border-line mt-5.5 mb-9.5 flex flex-wrap items-center gap-1.75 border-b pb-8">
          <Skeleton className="h-[25px] w-20 rounded-full" />
          <Skeleton className="h-[25px] w-24 rounded-full" />
          <Skeleton className="h-[25px] w-16 rounded-full" />
          <Skeleton className="ml-auto h-[13px] w-20" />
        </div>

        {PARAGRAPH_WIDTHS.map((widths, index) => (
          <div key={index} className="mt-9 first:mt-0">
            <Skeleton className="mb-5 h-[26px] w-[42%]" />
            <div className="space-y-2.5">
              {widths.map((width, line) => (
                <Skeleton key={line} className={`h-[15px] ${width}`} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
