import ContactImage from "../assets/images/contact.jpeg";
import SocialMedia from "../components/social-media";

import {
  AtSymbolIcon,
  PhoneIcon
} from "@heroicons/react/24/outline";
import Resume from "../components/resume";

export default function ContactCard() {
  const infoArr = [
    {
      label: "email",
      value: "2010abinas@gmail.com",
      icon: AtSymbolIcon
    },
    {
      label: "phone",
      value: "+91-9938672003",
      icon: PhoneIcon
    }
  ]
  return (
    <div className="w-full flex justify-center">
      <div className="mb-6 mt-8">
        <div className="w-60 h-60 rounded-full mx-auto mb-4">
          <img src={ContactImage} alt="Profile" className="w-full h-full rounded-full object-cover" />
        </div>
        <p className="text-4xl text-center">Abinas Patra</p>
        <SocialMedia />
        <ul className="list-none space-y-2 mt-4">
          {infoArr.map(({ value, icon: Icon }, i) => (
            <li key={i.toString()} className="flex items-start justify-center gap-1">
              <Icon className="size-4 mt-1" />
              <span>{value}</span>
            </li>
          ))}
        </ul>
        <div className="flex justify-center">
            <Resume />
        </div>
      </div>
    </div>
  )
}