import { skillGroups } from '../assets/data/skill'

export default function Skills() {
  return (
    <section id="skills">
      <div className="mb-8">
        <p className="text-xs tracking-widest uppercase text-teal-600 dark:text-teal-500 mb-1">
          stack
        </p>
        <h2 className="text-3xl font-medium text-zinc-900 dark:text-zinc-100 tracking-tight">
          what I work with
        </h2>
      </div>

      <div className="flex flex-col gap-8">
        {skillGroups.map(({ category, skills }) => (
          <div key={category}>
            <p className="text-xs text-zinc-400 dark:text-zinc-600 uppercase tracking-widest mb-3">
              {category}
            </p>
            <div className="flex flex-wrap gap-2">
              {skills.map(({ name, icon: Icon }) => (
                <div
                  key={name}
                  className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 text-sm text-zinc-700 dark:text-zinc-300 hover:border-teal-200 dark:hover:border-teal-900 hover:text-teal-600 dark:hover:text-teal-400 transition-all duration-200"
                >
                  <Icon />
                  {name}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}