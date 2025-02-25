import NeuralSpace from "../assets/images/neuralspace.jpeg";
import Reverie from "../assets/images/reverie.jpeg";
import Tripborn from "../assets/images/tripborn.jpeg";
import Metademy from "../assets/images/metademy.jpeg";
import Capgemini from "../assets/images/capgemini.jpeg";
import {
  ArrowRightIcon
} from "@heroicons/react/24/outline";

interface Highlight {
  project?: string;
  link?: string;
  points: string[];
}

interface Experience {
  role: string;
  company: string;
  period: string;
  location: string;
  image: string;
  link: string;
  highlights: Highlight[];
}

const ExperienceTimeline = () => {
  const experiences: Experience[] = [
    {
      role: "Staff Software Engineer",
      company: "NeuralSpace",
      period: "Feb 2022 - Present (3 Years)",
      location: "Remote",
      image: NeuralSpace,
      link: "https://www.neuralspace.ai/",
      highlights: [
        {
          project: "StorytellerAI",
          link: "https://www.neuralspace.ai/storyteller-ai",
          points: [
            "Created StorytellerAI, a creative companion for story creation with AI collaboration features for developing stories/plots.",
            "Developed from scratch using React, Node.js, react-flow, integrating OpenAI GPT-4, MidJourney, and SunoAI.",
            "Designed Storyboard feature to bookmark conversations, images, and music for seamless creative workflow.",
            "Integrated with Video Localization platform's existing subtitling knowledge base."
          ]
        },
        {
          project: "Video Localization",
          link: "https://loc.neuralspace.ai/",
          points: [
            "Designed and built Video Localization Platform from ground up using ReactJs and NodeJs, securing a $72,000 annual deal with a top APAC media company.",
            "Built advanced subtitle editor with audio waveform syncing, undo, search/replace, keyboard shortcuts, and style customization.",
            "Designed project management system enabling role assignment, deadline tracking, and performance monitoring."
          ]
        }
      ]
    },
    {
      role: "Technical Lead",
      company: "Reverie Language Technologies Pvt. Ltd.",
      period: "Sept 2019 - Mar 2022 (2 yrs 7 mos)",
      location: "Bengaluru Urban Area",
      image: Reverie,
      link: "https://reverieinc.com/",
      highlights: [
        {
          points: [
            "Led team of 6 developers and 2 testers to develop Prabandhak, a translation management tool for 50+ languages, improving translator productivity by 80-85%.",
            "Implemented Translation Memory using Elasticsearch with key-value structure and string matching algorithms.",
            "Built project management system enabling team creation, collaborator assignment, and efficient project oversight."
          ]
        }
      ]
    },
    {
      role: "Senior Software Engineer",
      company: "Tripborn",
      period: "Oct 2018 - Sept 2019 (11 mos)",
      location: "Bengaluru Urban Area",
      image: Tripborn,
      link: "https://agents.tripborn.com/index.html",
      highlights: [
        {
          points: [
            "Developed unified API using NodeJS and MongoDB, integrating major providers like Redbus and TicketGoose.",
            "Enhanced security with white labeling for customizable client solutions."
          ]
        }
      ]
    },
    {
      role: "Co-founder",
      company: "Metaverse Internet Private Limited",
      period: "Jan 2017 - Oct 2018 (1 yr 10 mos)",
      location: "Bhubaneswar",
      image: Metademy,
      link: "https://www.linkedin.com/company/onemetaverse/",
      highlights: [
        {
          points: [
            "Co-founded Metademy and created Rapposta, a social networking platform for couples using Ionic framework and PHP Lumen."
          ]
        }
      ]
    },
    {
      role: "Software Engineer",
      company: "Capgemini India Private Limited",
      period: "Aug 2015 - Dec 2016 (1 yr 5 mos)",
      location: "Kolkata",
      image: Capgemini,
      link: "https://www.capgemini.com/",
      highlights: [
        {
          points: [
            "Developed interface for Continental's tire repair and maintenance data using REST API.",
            "Created UIs with HTML, CSS, and jQuery within SAP Enterprise Portal."
          ]
        }
      ]
    }
  ];

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
              <a target="_blank" href={exp.link} className="inline-block underline cursor-pointer mb-2 text-sm">
                {exp.company}
              </a>
              <p className="block mb-2 text-sm font-light leading-none">{exp.period}</p>
              <p className="block mb-2 text-sm font-light leading-none">{exp.location}</p>
              {exp.highlights.map((hg, idx) => (
                <ul key={idx.toString()} className="list-none space-y-2 mt-2 inline-block">
                  {hg.project && (
                    <a target="_blank" href={hg.link} className="inline-block underline cursor-pointer">{hg.project}</a>
                  )}
                  {hg.points.map((pt, i) => (
                    <li key={i.toString()} className="flex items-start gap-3">
                      <ArrowRightIcon className="size-4 mt-1" />
                      <span className="font-light">{pt}</span>
                    </li>
                  ))}
                </ul>
              ))}
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default ExperienceTimeline;