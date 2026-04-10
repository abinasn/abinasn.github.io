import { FaReact, FaNodeJs, FaAws, FaLaravel, FaCss3, FaHtml5, FaJava, FaGitAlt, FaDocker } from 'react-icons/fa6'
import { SiMongodb, SiOpenai, SiRedis, SiMysql, SiJquery, SiJavascript, SiTypescript, SiPostgresql, SiNextdotjs, SiTailwindcss, SiGraphql, SiElastic } from 'react-icons/si'
import { VscAzure } from 'react-icons/vsc'
import { ComponentType } from 'react'

export interface Skill {
  name: string
  icon: ComponentType
}

export interface SkillGroup {
  category: string
  skills: Skill[]
}

export const skillGroups: SkillGroup[] = [
  {
    category: 'Frontend',
    skills: [
      { name: 'React', icon: FaReact },
      { name: 'TypeScript', icon: SiTypescript },
      { name: 'JavaScript', icon: SiJavascript },
      { name: 'Next.js', icon: SiNextdotjs },
      { name: 'Tailwind', icon: SiTailwindcss },
      { name: 'HTML5', icon: FaHtml5 },
      { name: 'CSS3', icon: FaCss3 },
      { name: 'jQuery', icon: SiJquery },
    ],
  },
  {
    category: 'Backend',
    skills: [
      { name: 'Node.js', icon: FaNodeJs },
      { name: 'Java', icon: FaJava },
      { name: 'Laravel', icon: FaLaravel },
      { name: 'GraphQL', icon: SiGraphql },
      { name: 'OpenAI', icon: SiOpenai },
    ],
  },
  {
    category: 'Database',
    skills: [
      { name: 'MongoDB', icon: SiMongodb },
      { name: 'PostgreSQL', icon: SiPostgresql },
      { name: 'MySQL', icon: SiMysql },
      { name: 'Redis', icon: SiRedis },
      { name: 'Elasticsearch', icon: SiElastic },
    ],
  },
  {
    category: 'Infrastructure',
    skills: [
      { name: 'AWS', icon: FaAws },
      { name: 'Azure', icon: VscAzure },
      { name: 'Docker', icon: FaDocker },
      { name: 'Git', icon: FaGitAlt },
    ],
  },
]