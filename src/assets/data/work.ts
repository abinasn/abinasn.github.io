import NeuralSpace from '../images/neuralspace.jpeg'
import Reverie from '../images/reverie.jpeg'
import Tripborn from '../images/tripborn.jpeg'
import Metademy from '../images/metademy.jpeg'
import Capgemini from '../images/capgemini.jpeg'

import { FaReact, FaNodeJs, FaAws, FaLaravel, FaCss3, FaHtml5, FaJava } from 'react-icons/fa6'
import { SiMongodb, SiOpenai, SiRedis, SiMysql, SiJquery, SiJavascript, SiSap, SiElastic } from 'react-icons/si'
import { VscAzure } from 'react-icons/vsc'
import { ComponentType } from 'react'

export interface Technology {
  name: string
  icon: ComponentType
}

export interface Highlight {
  project?: string
  link?: string
  points: string[]
}

export interface Experience {
  role: string
  company: string
  period: string
  location: string
  image: string
  link: string
  technologies: Technology[]
  highlights: Highlight[]
}

export const experiences: Experience[] = [
  {
    role: 'Staff Software Engineer',
    company: 'NeuralSpace',
    period: 'Mar 2022 – Present',
    location: 'Bengaluru',
    image: NeuralSpace,
    link: 'https://www.neuralspace.ai/',
    technologies: [
      { name: 'React', icon: FaReact },
      { name: 'Node.js', icon: FaNodeJs },
      { name: 'MongoDB', icon: SiMongodb },
      { name: 'Redis', icon: SiRedis },
      { name: 'OpenAI', icon: SiOpenai },
      { name: 'Azure Blob Storage', icon: VscAzure },
    ],
    highlights: [
      {
        project: 'StorytellerAI',
        link: 'https://www.neuralspace.ai/storyteller-ai',
        points: [
          'Built StorytellerAI using React, Node.js, Redux, and React Flow, integrating OpenAI Assistant APIs for AI-powered creative workflows.',
          'Implemented MidJourney and SunoAI integrations for instant image and music generation from conversation prompts — boosting creative efficiency by 65%.',
          'Designed an infinite canvas Storyboard using React Flow for organizing creative content, increasing productivity by 85% per beta testers.',
          'Attracted 1,000+ end users to the platform.',
        ],
      },
      {
        project: 'Video Localization',
        link: 'https://loc.neuralspace.ai/',
        points: [
          'Built a comprehensive Video Localization Platform from scratch using React and Node.js supporting 80+ languages.',
          'Created an advanced subtitle editor with Waveform JS — timestamp sync, undo/redo, keyboard shortcuts — reducing manual effort by 85%.',
          'Designed a project management system with roles, permissions, deadlines, and metrics — improving turnaround by 90%.',
          'Platform secured a major APAC media deal worth $72,000/year over a 3-year contract.',
        ],
      },
    ],
  },
  {
    role: 'Technical Lead',
    company: 'Reverie Language Technologies',
    period: 'Sept 2019 – Mar 2022',
    location: 'Bengaluru',
    image: Reverie,
    link: 'https://reverieinc.com/',
    technologies: [
      { name: 'React', icon: FaReact },
      { name: 'Node.js', icon: FaNodeJs },
      { name: 'Java', icon: FaJava },
      { name: 'MongoDB', icon: SiMongodb },
      { name: 'Redis', icon: SiRedis },
      { name: 'Elasticsearch', icon: SiElastic },
      { name: 'Azure Blob Storage', icon: VscAzure },
    ],
    highlights: [
      {
        project: 'Prabandhak',
        link: 'https://app.prabandhak.in/',
        points: [
          'Led end-to-end development of Prabandhak, a translation management tool built on React, Node.js, Java, Redis, and Elasticsearch.',
          'Designed a Translation Memory system using Elasticsearch improving accuracy and efficiency.',
          'Built a Marketplace where translation projects could be listed and freelancers could apply.',
          'Led a cross-functional team of 4 developers and 2 testers.',
        ],
      },
    ],
  },
  {
    role: 'Senior Software Engineer',
    company: 'Tripborn',
    period: 'Oct 2018 – Sept 2019',
    location: 'Bengaluru',
    image: Tripborn,
    link: 'https://agents.tripborn.com/index.html',
    technologies: [
      { name: 'Node.js', icon: FaNodeJs },
      { name: 'MongoDB', icon: SiMongodb },
      { name: 'Redis', icon: SiRedis },
      { name: 'AWS', icon: FaAws },
    ],
    highlights: [
      {
        points: [
          'Built a Node.js + MongoDB API aggregator combining ticket data from Redbus, Ticketgoose, Travelyaari, and Abhibus — lowest price shown first.',
          'Implemented rate limiting, JWT authentication, and caching for frequently searched routes.',
        ],
      },
    ],
  },
  {
    role: 'Co-founder',
    company: 'Metaverse Internet Pvt. Ltd.',
    period: 'Jan 2017 – Oct 2018',
    location: 'Bhubaneswar',
    image: Metademy,
    link: 'https://www.linkedin.com/company/onemetaverse/',
    technologies: [
      { name: 'PHP Laravel', icon: FaLaravel },
      { name: 'MySQL', icon: SiMysql },
      { name: 'Redis', icon: SiRedis },
      { name: 'AWS', icon: FaAws },
    ],
    highlights: [
      {
        points: [
          'Co-founded MetaDemy, an ed-tech platform for Competitive Coding and Full Stack Development courses.',
          'Built backend infrastructure using PHP Laravel + MySQL with payment gateway integration.',
          'Enrolled 23 students as first milestone — balancing technical and sales responsibilities.',
        ],
      },
    ],
  },
  {
    role: 'Software Engineer',
    company: 'Capgemini India',
    period: 'Aug 2015 – Dec 2016',
    location: 'Kolkata',
    image: Capgemini,
    link: 'https://www.capgemini.com/',
    technologies: [
      { name: 'HTML5', icon: FaHtml5 },
      { name: 'CSS3', icon: FaCss3 },
      { name: 'JavaScript', icon: SiJavascript },
      { name: 'jQuery', icon: SiJquery },
      { name: 'SAP', icon: SiSap },
    ],
    highlights: [
      {
        points: [
          'Maintained SAP Enterprise Portal UIs for Continental using HTML, CSS, jQuery, and REST APIs.',
          'Fixed and enhanced UX animations improving interface responsiveness.',
        ],
      },
    ],
  },
]