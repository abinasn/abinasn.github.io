import { BackgroundIllustration } from "../components/background"
import BorderDesign from "../components/border-design"
import ContactCard from "./contact"

function Contact() {
  return (
    <BorderDesign>
      <>
        <BackgroundIllustration />
        <div className="mx-8 md:mx-32 animate-texts">
          <ContactCard />
        </div>
      </>
    </BorderDesign>
  )
}

export default Contact