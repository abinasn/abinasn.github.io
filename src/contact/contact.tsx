import ContactImage from "../assets/images/contact.jpeg";
import SocialMedia from "../components/social-media";

import {
  AtSymbolIcon,
  PhoneIcon
} from "@heroicons/react/24/outline";

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
    <div className="w-full md:p-32 min-h-[400px] flex rounded-md shadow-md bg-slate-200 dark:bg-stone-800 p-8 mx-auto my-6">
      <div className="mb-6 mt-8">
        <div className="w-50 h-50 rounded-full mx-auto mb-4">
          <img src={ContactImage} alt="Profile" className="w-full h-full rounded-full object-cover" />
        </div>
        <p className="text-2xl text-center">Abinas Patra</p>
        <SocialMedia />
        <ul className="list-none space-y-2 mt-4 inline-block">
          {infoArr.map(({ value, icon: Icon }, i) => (
            <li key={i.toString()} className="flex items-start gap-3">
              <Icon className="size-4 mt-1" />
              <span>{value}</span>
            </li>
          ))}
        </ul>
      </div>


    </div>
  )
}