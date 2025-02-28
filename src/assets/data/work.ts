import React from "react";
import NeuralSpace from "../images/neuralspace.jpeg";
import Reverie from "../images/reverie.jpeg";
import Tripborn from "../images/tripborn.jpeg";
import Metademy from "../images/metademy.jpeg";
import Capgemini from "../images/capgemini.jpeg";

import { FaReact, FaNodeJs, FaAws, FaLaravel, FaCss3, FaHtml5, FaJava } from "react-icons/fa6";
import { SiMongodb, SiOpenai, SiRedis, SiMysql, SiJquery,  SiJavascript, SiSap, SiElastic } from "react-icons/si";
import { VscAzure } from "react-icons/vsc";

interface Highlight {
  project?: string;
  link?: string;
  points: string[];
}

interface Technologies{
  name: string,
  icon: React.ComponentType
}

interface Experience {
  role: string;
  company: string;
  period: string;
  location: string;
  image: string;
  link: string;
  technologies: Technologies[];
  highlights: Highlight[];
}


export const experiences: Experience[] = [
  {
    role: "Staff Software Engineer",
    company: "NeuralSpace (A SpeechAI company)",
    period: "Feb 2022 - Present (3 Years)",
    location: "Remote",
    image: NeuralSpace,
    link: "https://www.neuralspace.ai/",
    technologies: [
      {name: "React", icon: FaReact},
      {name: "Node.js", icon: FaNodeJs},
      {name: "MongoDB", icon: SiMongodb},
      {name: "Redis", icon: SiRedis},
      {name: "OpenAI", icon: SiOpenai},
      {name: "Azure Blob Storage", icon: VscAzure},
    ],
    highlights: [
      {
        project: "StorytellerAI",
        link: "https://www.neuralspace.ai/storyteller-ai",
        points: [
          "Content creators struggled with fragmented creative workflows, using multiple disconnected tools for ideation, content creation, and organization, making the creative process inefficient and disjointed.",
          "Built StorytellerAI using React, Node.js, Redux, and React Flow, integrating OpenAI's Assistant APIs for AI-powered conversations that enable users to develop stories naturally with contextual knowledge bases that understand and build upon their creative vision.",
          "Implemented seamless media generation by integrating MidJourney for AI images and SunoAI for music creation directly from conversation prompts, allowing creators to instantly visualize their ideas without switching between tools, boosting creative efficiency by 65%.",
          "Designed an interactive infinite canvas Storyboard feature using React Flow that lets users organize, bookmark, and structure their creative content, increasing productivity by 85% according to beta tester feedback.",
          "Successfully attracted over 1,000 end users to try out the platform, creating a growing community of content creators who benefit from our integrated creative workflow solution."
        ]
      },
      {
        project: "Video Localization",
        link: "https://loc.neuralspace.ai/",
        points: [
          "Media companies faced significant challenges in localizing video content across multiple languages, with fragmented tools for transcription, translation, and subtitle editing, resulting in workflow inefficiencies and high costs.",
          "Built a comprehensive Video Localization Platform from scratch using React, Node.js, and Ant Design that streamlines the entire workflow - from video upload and AI-generated transcriptions to collaborative subtitle editing and translation in 80+ languages.",
          "Created an advanced subtitle editor utilizing Waveform JS for audio visualization, with features like timestamp synchronization, undo/redo, find/replace, keyboard shortcuts, and style customization that significantly reduced manual effort by 85%.",
          "Designed a robust project management system allowing teams to create groups, assign specific roles with custom permissions, track deadlines, and monitor performance metrics - eliminating email-based project requests and improving turnaround time by 90%.",
          "The platform's efficiency (reducing manual effort by 65%) and AI-powered translation pipeline (achieving 95% accuracy without human intervention) led to securing a major deal with a leading APAC media company worth $72,000 annually over a 3-year contract."
        ]
      }
    ]
  },
  {
    role: "Technical Lead",
    company: "Reverie Language Technologies Pvt. Ltd. (A NLP Company)",
    period: "Sept 2019 - Mar 2022 (2 yrs 7 mos)",
    location: "Bengaluru Urban Area",
    image: Reverie,
    link: "https://reverieinc.com/",
    technologies: [
      {name: "React", icon: FaReact},
      {name: "Node.js", icon: FaNodeJs},
      {name: "Java", icon: FaJava},
      {name: "MongoDB", icon: SiMongodb},
      {name: "Redis", icon: SiRedis},
      {name: "Elastic search", icon: SiElastic},
      {name: "Azure Blob Storage", icon: VscAzure},
    ],
    highlights: [
      {
        project: "Prabandhak",
        link: "https://app.prabandhak.in/",
        points: [
          "**Led end-to-end product development of Prabandhak, a comprehensive translation management tool** that processed various text formats into JSON segment format using React, Node.js, Java, Redis, and Elasticsearch.",
          "**Designed and implemented Translation Memory system** using Elasticsearch, significantly improving translation accuracy and efficiency.",
          "**Developed a complete project management system** enabling team creation, collaborator assignment, and efficient workflow management.",
          "**Created an innovative Marketplace feature** where translation projects could be listed and freelancers could apply, expanding the platform's capabilities",
          "**Led a cross-functional team of 4 developers and 2 testers,** overseeing feature implementation, quality assurance, and timely delivery."
        ]
      }
    ]
  },
  {
    role: "Senior Software Engineer",
    company: "Tripborn (A Travel company)",
    period: "Oct 2018 - Sept 2019 (11 mos)",
    location: "Bengaluru Urban Area",
    image: Tripborn,
    link: "https://agents.tripborn.com/index.html",
    technologies: [
      {name: "Node.js", icon: FaNodeJs},
      {name: "MongoDB", icon: SiMongodb},
      {name: "Redis", icon: SiRedis},
      {name: "AWS", icon: FaAws},
    ],
    highlights: [
      {
        points: [
          "**Developed a NodeJS and MongoDB-based API aggregator service** that combined ticket data from multiple providers (Redbus, Ticketgoose, Travelyaari, Abhibus) to display the lowest prices first.",
          "**Implemented the application using OOP concepts and SOLID principles,** creating a modular and maintainable codebase that simplified API development.",
          "**Enhanced system security by implementing rate limiting** to prevent excessive requests, API attacks, and potential threats.",
          "**Designed and implemented JWT token-based authentication** to ensure API request validation and maintain secure communication.",
          "Optimized performance by implementing caching for frequently searched routes and queries, significantly reducing response times."
        ]
      }
    ]
  },
  {
    role: "Co-founder",
    company: "Metaverse Internet Private Limited (An Educational company)",
    period: "Jan 2017 - Oct 2018 (1 yr 10 mos)",
    location: "Bhubaneswar",
    image: Metademy,
    link: "https://www.linkedin.com/company/onemetaverse/",
    technologies: [
      {name: "PHP Laravel", icon: FaLaravel},
      {name: "MySQL", icon: SiMysql},
      {name: "Redis", icon: SiRedis},
      {name: "AWS", icon: FaAws},
    ],
    highlights: [
      {
        points: [
          "**Co-founded MetaDemy, an educational company** focused on delivering high-quality technical courses in Competitive Coding and Full Stack Development.",
          "Developed the **backend infrastructure using PHP Laravel framework and MySQL,** creating APIs to support the platform's core functionality",
          "**Implemented payment gateway integration** to provide students with a seamless checkout and enrollment experience",
          "Served dual roles as both technical developer and sales representative cause it was my company.",
          "Led successful sales initiatives that resulted in enrolling **23 students (both students and working professionals), a significant milestone for initial stage startup**",
          "**Gained valuable experience in entrepreneurship, balancing technical development with business development responsibilities**"
        ]
      }
    ]
  },
  {
    role: "Software Engineer",
    company: "Capgemini India Private Limited (An IT Consulting company)",
    period: "Aug 2015 - Dec 2016 (1 yr 5 mos)",
    location: "Kolkata",
    image: Capgemini,
    link: "https://www.capgemini.com/",
    technologies: [
      {name: "HTML5", icon: FaHtml5},
      {name: "CSS3", icon: FaCss3},
      {name: "JavaScript", icon: SiJavascript},
      {name: "jQuery", icon: SiJquery},
      {name: "SAP", icon: SiSap}
    ],
    highlights: [
      {
        points: [
          "Supported and maintained the interface displaying **Continental's tire repair and maintenance data by working with REST APIs** from their Business Intelligence module.",
          "**Maintained user interfaces within the SAP Enterprise Portal environment using HTML, CSS, and jQuery**.",
          "Fixed and enhanced user experience animations using jQuery, improving the overall interface responsiveness and visual appeal.",
          "Gained valuable experience working with enterprise-level systems while supporting client-specific solutions."
        ]
      }
    ]
  }
];