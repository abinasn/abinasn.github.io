import { BriefcaseIcon, LightBulbIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";
import Button from "../components/button";
import Resume from "../components/resume";


export default function Left() {
  const navigate = useNavigate();
  const handleClick = (route: string) => {
    navigate(route)
  }
  return (
    <div className="flex flex-col animate-texts">
      <p className="md:text-5xl text-4xl">
        <span className="font-light">Hello!</span> <b>I'm Abinas.</b>

      </p>
      <p className="mt-3 text-md pl-[3px]">
        <span className='font-light'>I am a</span>
        <span> full-stack developer, tech enthusiast, system designer, technical leader.</span>
      </p>
      <p className="mt-1 text-md pl-[3px] font-light">
        Proficient developer with 8 years of experience building fast, user-friendly and scalable web applications in both frontend and backend using React.js, Node.js and modern development practices.
      </p>
      

      <div className='flex gap-4'>
        <Button onClick={()=>handleClick("/skill")} variant="primary" className="mt-4">
          <LightBulbIcon className='w-4 h-4 font-sans' />
          Skills
        </Button>
        <Button onClick={()=>handleClick("/work")} variant="primary" className="mt-4">
          <BriefcaseIcon className='w-4 h-4 font-sans' />
          Experience
        </Button>
        <Resume />
      </div>
    </div>
  )
}