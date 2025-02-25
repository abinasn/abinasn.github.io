import {
  ComputerDesktopIcon,
  CodeBracketSquareIcon,
  CircleStackIcon,
  CommandLineIcon,
  FaceSmileIcon
} from "@heroicons/react/24/outline";
import BorderDesign from "../components/border-design";
import SkillTree from "./skill";
import { BackgroundIllustration } from "../components/background";



const keyPoints = [
  {
    key: "frontend",
    name: "Frontend",
    icon: <ComputerDesktopIcon className="w-5 h-5 mt-0.5 flex-shrink-0 " />,
    description: <span>Expertise in <b>React.js, Next.js, and modern JavaScript</b>, building dynamic, responsive, and user-friendly interfaces.</span>
  },
  {
    key: "backend",
    name: "Backend",
    icon: <CodeBracketSquareIcon className="w-5 h-5 mt-0.5 flex-shrink-0 " />,
    description: <span>Proficient in <b>Node.js and Express.js</b>, developing robust, scalable, and high-performance server-side applications with a <b>strong focus on Test-Driven Development (TDD)</b>.</span>
  },
  {
    key: "database",
    name: "Database",
    icon: <CircleStackIcon className="w-5 h-5 mt-0.5 flex-shrink-0 " />,
    description: "Experienced in SQL and NoSQL databases ensuring efficient data management, optimization, and scalability."
  },
  {
    key: "deployment",
    name: "deployment",
    icon: <CommandLineIcon className="w-5 h-5 mt-0.5 flex-shrink-0 " />,
    description: "Moderate amount of experience in CI/CD, Docker, and cloud platforms like AWS, Vercel, and Firebase for seamless application deployment."
  },
  {
    key: "other",
    name: "Other",
    icon: <FaceSmileIcon className="w-5 h-5 mt-0.5 flex-shrink-0 " />,
    description: 'Demonstrated success as an individual contributor, technical lead, and team lead, with a strong ability to mentor, guide teams, and solve complex problems effectively.'
  }
]

function Skill() {
  return (
    <BorderDesign>
      <>
      <BackgroundIllustration />
        <div className="mt-3 animate-texts">
          <p className="text-3xl border-b-2 inline-block mb-4">Skills</p>
          <ul className="list-none space-y-2">
            {keyPoints.map((pt) => (
              <li key={pt.key} className="flex items-start gap-3">
                {pt.icon}
                <span className="font-sans">{pt.description}</span>
              </li>
            ))}
          </ul>
          <SkillTree />
        </div>
      </>
    </BorderDesign>
  )
}

export default Skill