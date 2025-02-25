import { ArrowRightIcon, BriefcaseIcon, LightBulbIcon } from "@heroicons/react/24/outline";
import Button from "../components/button";

const keyPoints = [
  {
    key: "frontend",
    name: "Frontend",
    description: "Expertise in React.js, Next.js, and modern JavaScript, building dynamic, responsive, and user-friendly interfaces."
  },
  {
    key: "backend",
    name: "Backend",
    description: "Proficient in Node.js and Express.js, developing robust, scalable, and high-performance server-side applications with a strong focus on Test-Driven Development (TDD)."
  },
  {
    key: "database",
    name: "Database",
    description: "Experienced in SQL and NoSQL databases ensuring efficient data management, optimization, and scalability."
  },
  {
    key: "deployment",
    name: "deployment",
    description: "Moderate amount of experience in CI/CD, Docker, and cloud platforms like AWS, Vercel, and Firebase for seamless application deployment."
  },
  {
    key: "other",
    name: "Other",
    description: 'Demonstrated success as an individual contributor, technical lead, and team lead, with a strong ability to mentor, guide teams, and solve complex problems effectively.'
  }
]

export default function Left() {
  const handleClick = () => {

  }
  return (
    <div className="flex flex-col animate-texts">
      <p className="text-5xl">
        <span className="font-light">Hello!</span> <b>I'm Abinas.</b>

      </p>
      <p className="mt-3 text-md pl-[3px]">
        <span className='font-light'>I am a</span>
        <span> full-stack developer, tech enthusiast, system designer, technical leader.</span>
      </p>
      <p className="mt-1 text-md pl-[3px] font-light">
        Proficient developer with 8 years of experience building fast, user-friendly and scalable web applications using React.js, Node.js and modern development practices.
      </p>
      {/* <div className="mt-3">
        <ul className="list-none space-y-2">
          {keyPoints.map((pt) => (
            <li key={pt.key} className="flex items-start gap-3">
              <ArrowRightIcon className="w-4 h-4 flex-shrink-0 mt-1" />
              <span className="font-sans">{pt.description}</span>
            </li>
          ))}
        </ul>
      </div> */}

      <div className='flex gap-4'>
        <Button onClick={handleClick} variant="primary" className="mt-4">
          <LightBulbIcon className='w-4 h-4 font-sans' />
          Skills
        </Button>
        <Button onClick={handleClick} variant="primary" className="mt-4">
          <BriefcaseIcon className='w-4 h-4 font-sans' />
          Experience
        </Button>
      </div>
    </div>
  )
}