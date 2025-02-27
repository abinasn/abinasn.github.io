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
          "**Developed StorytellerAI, an innovative creative platform** using React, Node.js, and Redux that enables users to collaborate with AI to brainstorm and develop stories through natural conversation, with integration to generate AI images (MidJourney) and music (SunoAI) based on the story context.",
          "**Implemented an AI conversation system** using OpenAI GPT-4 APIs, MongoDB for data persistence, and custom state management that allows users to define personas and build knowledge bases by uploading files and text content.",
          "**Built a seamless media generation workflow** using RESTful APIs to integrate MidJourney for image creation and SunoAI for music composition directly from conversation prompts, with React Context for managing media state.",
          "**Created an interactive storyboard feature** using React Flow and custom draggable components that provides an infinite canvas where users can organize, bookmark, and structure their creative content."
        ]
      },
      {
        project: "Video Localization",
        link: "https://loc.neuralspace.ai/",
        points: [
          "**Built a comprehensive Video Localization Platform** that allows users to upload video or audio files, extract and generate AI transcriptions, and create translation jobs across 80+ languages using React, Redux, and Node.js.",
          "**Created a powerful subtitle editor** using Waveform JS and BBC audio waveform technology that saves processing data to cloud storage, with smooth performance for long videos containing thousands of subtitle entries.",
          "**Designed a team-based project management system** that lets users assign roles, track deadlines, and monitor performance, improving team productivity by 40% through streamlined workflows.",
          "**Added support for multiple cloud storage providers (Azure, AWS S3, GCP)** so enterprise clients can keep their content in existing systems while using our platform.",
          "**The Video Localization Platform gained market traction,** with a major APAC media company purchasing a $72,000 annual license, proving its value in the competitive media localization market."
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
          "**Led a cross-functional team of 4 developers and 2 testers,** overseeing feature implementation, quality assurance, and timely delivery"
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