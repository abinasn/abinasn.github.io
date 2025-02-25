import { ArrowRightIcon } from "@heroicons/react/24/outline";
import BorderDesign from "../components/border-design";



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

function Skill() {
  return (
    <BorderDesign>
      <div className="mt-3 animate-texts">
        <ul className="list-none space-y-2">
          {keyPoints.map((pt) => (
            <li key={pt.key} className="flex items-start gap-3">
              <ArrowRightIcon className="w-4 h-4 flex-shrink-0 mt-1" />
              <span className="font-sans">{pt.description}</span>
            </li>
          ))}
        </ul>
      </div>
    </BorderDesign>
  )
}

export default Skill