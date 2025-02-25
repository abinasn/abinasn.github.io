import { BackgroundIllustration } from "../components/background";
import BorderDesign from "../components/border-design";
import ExperienceTimeline from "./work";


function Work() {
  return (
    <BorderDesign>
      <>
        <BackgroundIllustration />
        <div className="mt-3 animate-texts">
          <p className="text-3xl border-b-2 inline-block mb-4">Work experience</p>
          <ExperienceTimeline />
        </div>
      </>
    </BorderDesign>
  )
}

export default Work