import { BsDownload } from 'react-icons/bs'
import me from '../assets/images/me.jpeg'

export default function Hero() {
  const resumePDF = new URL('../assets/data/Abinas_Patra.pdf', import.meta.url).href;

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = resumePDF;
    link.download = 'Abinas_Patra.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  function scrollTo(sectionId: string | null) {
    if (!sectionId) {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }
    const el = document.getElementById(sectionId)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="flex flex-col-reverse gap-10 md:grid md:grid-cols-[1fr_200px] md:gap-12 md:items-center">

      <div className="flex flex-col">

        <div className="flex items-center gap-2 w-fit mb-6">
          <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse" />
          <span className="text-sm text-teal-600 dark:text-teal-400">
            available for work
          </span>
        </div>

        <h1 className="text-4xl md:text-5xl font-medium text-zinc-900 dark:text-zinc-50 tracking-tight leading-tight mb-2">
          I build things <br />
          for the <em className="not-italic text-teal-600 dark:text-teal-400">web.</em>
        </h1>
        <p className="text-xs tracking-widest uppercase text-zinc-500 dark:text-zinc-400 mb-7">
          Full Stack Developer
        </p>

        <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 overflow-hidden mb-8">

          <div className="flex items-center gap-2 px-4 py-2.5 bg-zinc-100 dark:bg-zinc-800 border-b border-zinc-200 dark:border-zinc-700">
            <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
            <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
            <span className="ml-2 text-xs text-zinc-500 dark:text-zinc-400">
              abinas.ts
            </span>
          </div>

          <div className="bg-zinc-950 px-5 py-4 font-mono text-sm leading-loose">
            <p>
              <span className="text-zinc-500">const </span>
              <span className="text-zinc-200">me</span>
              <span className="text-zinc-500"> = {'{'}</span>
            </p>
            <p className="pl-4">
              <span className="text-teal-400">name</span>
              <span className="text-zinc-500">: </span>
              <span className="text-green-400">"Abinas Patra"</span>
              <span className="text-zinc-500">,</span>
            </p>
            <p className="pl-4">
              <span className="text-teal-400">role</span>
              <span className="text-zinc-500">: </span>
              <span className="text-green-400">"Staff Software Engineer"</span>
              <span className="text-zinc-500">,</span>
            </p>
            <p className="pl-4">
              <span className="text-teal-400">stack</span>
              <span className="text-zinc-500">: [</span>
              <span className="text-green-400">"React"</span>
              <span className="text-zinc-500">, </span>
              <span className="text-green-400">"Node.js"</span>
              <span className="text-zinc-500">, </span>
              <span className="text-green-400">"TypeScript"</span>
              <span className="text-zinc-500">],</span>
            </p>
            <p className="pl-4">
              <span className="text-teal-400">experience</span>
              <span className="text-zinc-500">: </span>
              <span className="text-amber-400">10</span>
              <span className="text-zinc-500">, </span>
              <span className="text-zinc-500 text-xs">// years</span>
            </p>
            <p className="pl-4">
              <span className="text-teal-400">open</span>
              <span className="text-zinc-500">: </span>
              <span className="text-sky-400">true</span>
            </p>
            <p>
              <span className="text-zinc-500">{'}'}</span>
            </p>
            <p className="mt-1">
              <span className="text-teal-500">▋</span>
            </p>
          </div>

        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => scrollTo('work')}
            className="px-5 py-2.5 cursor-pointer bg-teal-600 hover:bg-teal-700 text-white text-sm rounded-lg transition-colors duration-200"
          >
            My work
          </button>
          <button
            onClick={handleDownload}
            className="px-5 py-2.5 text-sm flex items-center cursor-pointer gap-2 text-zinc-600 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700 rounded-lg hover:border-zinc-400 dark:hover:border-zinc-500 transition-all duration-200"
          >
            Resume <BsDownload />
          </button>
        </div>

      </div>

      <div className="flex md:flex-col items-center gap-4 md:gap-3">
        <div className="w-20 h-20 md:w-[180px] md:h-[210px] rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800 flex-shrink-0">
          <img
            src={me}
            alt="Abinas Patra"
            className="w-full h-full object-cover object-top"
          />
        </div>

        <div className="hidden md:flex flex-col items-center gap-2">
          <p className="text-xs text-zinc-500 dark:text-zinc-400">Abinas Patra</p>
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-teal-500" />
            <span className="text-xs text-zinc-500 dark:text-zinc-400">
              Bhubaneswar, India
            </span>
          </div>
        </div>

        <div className="flex flex-col md:hidden">
          <p className="text-sm font-medium text-zinc-800 dark:text-zinc-200">
            Abinas Patra
          </p>
          <div className="flex items-center gap-1.5 mt-1">
            <span className="w-1.5 h-1.5 rounded-full bg-teal-500" />
            <span className="text-xs text-zinc-500 dark:text-zinc-400">
              Bhubaneswar, India
            </span>
          </div>
        </div>
      </div>

    </section>
  )
}