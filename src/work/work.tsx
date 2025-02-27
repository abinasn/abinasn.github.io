import { experiences } from "../assets/data/work";
import {
  ArrowRightIcon
} from "@heroicons/react/24/outline";
import { MdOpenInNew } from "react-icons/md";
import Tag from "../components/tag";

const formatText = (text: string) => {
  let formattedText = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
  formattedText = formattedText.replace(/_(.*?)_/g, '<em>$1</em>');

  formattedText = formattedText.replace(/`(.*?)`/g, '<code>$1</code>');
  formattedText = formattedText.replace(/~(.*?)~/g, '<u>$1</u>');

  return formattedText;
};

const ExperienceTimeline = () => {
  return (
    <div>
      <h2 className="text-xl mb-8">
        8+ Years of experience in Full Stack Development.
      </h2>

      <div className="px-2">
        <ol className="relative border-s-2 border-slate-300 dark:border-stone-800 ml-3">
          {experiences.map((exp, index) => (
            <li key={index.toString()} className="mb-10 ms-10">
              <span className="absolute flex items-center justify-center w-10 h-10 bg-slate-300 rounded-full -start-5 ring-8 ring-slate-100 dark:ring-stone-900 dark:bg-stone-300">
                <img src={exp.image} alt="Profile" className="w-full h-full rounded-full object-cover" />
              </span>
              <h3 className="flex items-center text-lg font-semibold">
                {exp.role}
                {index == 0 && (
                  <span className="bg-slate-300 text-sm font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-stone-700 ms-3">Present</span>
                )}
              </h3>
              <a target="_blank" href={exp.link} className="flex items-center gap-1 underline cursor-pointer mb-2">
                {exp.company} <MdOpenInNew />
              </a>
              <p className="block mb-2 text-sm font-light leading-none">{exp.period}</p>
              <p className="block mb-2 text-sm font-light leading-none">{exp.location}</p>
              {exp.highlights.map((hg, idx) => (
                <ul key={idx.toString()} className="list-none space-y-2 mt-2 inline-block">
                  {hg.project && (
                    <a target="_blank" href={hg.link} className="flex items-center gap-1 underline cursor-pointer mb-2 text-sm">{hg.project} <MdOpenInNew /></a>
                  )}
                  {hg.points.map((pt, i) => (
                    <li key={i.toString()} className="flex items-start gap-3">
                      <ArrowRightIcon className="size-4 mt-1" />
                      <span className="font-light" dangerouslySetInnerHTML={{ __html: formatText(pt) }} />
                    </li>
                  ))}
                </ul>
              ))}
              <div className="flex flex-wrap gap-3 mt-4">
                {exp.technologies.map(({ name, icon: Icon }) => (
                  <Tag key={name} color="primary">
                    <Icon />
                    <span>{name}</span>
                  </Tag>
                ))}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default ExperienceTimeline;