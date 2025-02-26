import { useNavigate } from "react-router-dom";
import { EnvelopeIcon } from "@heroicons/react/24/outline";

import { BackgroundIllustration } from "../components/background";
import BorderDesign from "../components/border-design";
import ExperienceTimeline from "./work";
import Button from "../components/button";


function Work() {
  const navigate = useNavigate();
  const handleClick = (route: string) => {
    navigate(route)
  }
  return (
    <BorderDesign>
      <>
        <BackgroundIllustration />
        <div className="mt-3 animate-texts">
          <p className="text-3xl border-b-2 inline-block mb-4">Work experience</p>
          <ExperienceTimeline />
          <Button onClick={() => handleClick("/contact")} variant="primary" className="mt-4">
            <EnvelopeIcon className='w-4 h-4 font-sans' />
            Contact
          </Button>
        </div>
      </>
    </BorderDesign>
  )
}

export default Work