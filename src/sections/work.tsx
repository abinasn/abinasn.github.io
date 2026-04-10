import { useState } from 'react'
import { experiences, type Experience } from '../assets/data/work'

function WorkCard({ exp, index }: { exp: Experience; index: number }) {
  const [open, setOpen] = useState(index === 0)

  return (
    <div className="border border-zinc-200 dark:border-zinc-800 rounded-xl overflow-hidden">

      <button
        onClick={() => setOpen(prev => !prev)}
        className="w-full flex items-center gap-4 px-5 py-4 bg-white dark:bg-zinc-950 hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors duration-200 cursor-pointer"
      >
        <img
          src={exp.image}
          alt={exp.company}
          className="w-10 h-10 rounded-lg object-cover flex-shrink-0 border border-zinc-100 dark:border-zinc-800"
        />

        <div className="flex-1 text-left">
          <p className="text-base font-medium text-zinc-900 dark:text-zinc-100">
            {exp.role}
          </p>
          <p className="text-sm text-teal-600 dark:text-teal-400 mt-0.5">
            {exp.company}
          </p>
        </div>

        <div className="text-right flex-shrink-0 hidden sm:block">
          <p className="text-sm text-zinc-500 dark:text-zinc-400">{exp.period}</p>
          <p className="text-xs text-zinc-400 dark:text-zinc-600 mt-0.5">{exp.location}</p>
        </div>

        <span
          className={`ml-2 text-zinc-400 dark:text-zinc-600 transition-transform duration-200 ${open ? 'rotate-180' : ''
            }`}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="6 9 12 15 18 9" /></svg>
        </span>
      </button>

      {open && (
        <div className="px-5 pb-6 bg-white dark:bg-zinc-950 border-t border-zinc-100 dark:border-zinc-800">

          <p className="sm:hidden text-sm text-zinc-500 dark:text-zinc-400 pt-4 mb-4">
            {exp.period} · {exp.location}
          </p>

          <div className="flex flex-wrap gap-2 pt-4 mb-5">
            {exp.technologies.map(({ name, icon: Icon }) => (
              <div
                key={name}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-sm text-zinc-600 dark:text-zinc-400"
              >
                <Icon />
                {name}
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-5">
            {exp.highlights.map((highlight, i) => (
              <div key={i}>
                {highlight.project && (
                  <a
                    href={highlight.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-sm font-medium text-zinc-700 dark:text-zinc-300 hover:text-teal-600 dark:hover:text-teal-400 transition-colors mb-3"
                  >
                    {highlight.project} ↗
                  </a>
                )}
                <ul className="flex flex-col gap-2.5">
                  {highlight.points.map((point, j) => (
                    <li
                      key={j}
                      className="flex gap-3 text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed"
                    >
                      <span className="text-teal-500 mt-1 flex-shrink-0">–</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>
      )}
    </div>
  )
}

export default function Work() {
  return (
    <section id="work">
      <div className="mb-8">
        <p className="text-xs tracking-widest uppercase text-teal-600 dark:text-teal-500 mb-1">
          experience
        </p>
        <h2 className="text-3xl font-medium text-zinc-900 dark:text-zinc-100 tracking-tight">
          where I've worked
        </h2>
      </div>

      <div className="flex flex-col gap-3">
        {experiences.map((exp, i) => (
          <WorkCard key={exp.company} exp={exp} index={i} />
        ))}
      </div>
    </section>
  )
}