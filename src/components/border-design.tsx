import React from "react";

export default function BorderDesign({ children }: { children: React.ReactElement }) {
  return (
    <div className="md:relative min-h-screen  flex items-center justify-start px-4 md:px-24">
      <div className="absolute z-10 top-10 left-0 right-0 border-b-2 border-dashed animate-dotted-border border-slate-200 dark:border-stone-900 animate-home-borders-fadeIn"></div>
      <div className="absolute z-10 top-12 left-0 right-0 border-b-2 border-dashed animate-dotted-border border-slate-200 dark:border-stone-900 animate-home-borders-fadeIn"></div>
      <div className="h-full hidden md:block absolute z-10 left-10 top-0 bottom-0 border-l-2 border-dashed animate-dotted-border border-slate-200 dark:border-stone-900 mx-4 animate-home-borders-fadeIn"></div>
      <div className="h-full hidden md:block absolute z-10 left-12 top-0 bottom-0 border-l-2 border-dashed animate-dotted-border border-slate-200 dark:border-stone-900 mx-4 animate-home-borders-fadeIn"></div>

      <div className="my-16">
        {children}
      </div>

      <div className="absolute z-10 bottom-10 left-0 right-0 border-b-2 border-dashed animate-dotted-border border-slate-200 dark:border-stone-900 animate-home-borders-fadeIn"></div>
      <div className="absolute z-10 bottom-12 left-0 right-0 border-b-2 border-dashed animate-dotted-border border-slate-200 dark:border-stone-900 animate-home-borders-fadeIn"></div>
    </div>
  )
}