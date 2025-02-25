import { useState } from 'react';

const SkillTree = () => {
  const skills = [
    {
      category: "Frontend",
      color: "#314158",
      skills: [
        { name: "React", level: 90 },
        { name: "Tailwind CSS", level: 85 },
        { name: "JavaScript", level: 92 },
        { name: "JavaScript", level: 92 }
      ]
    },
    {
      category: "Backend",
      color: "#10B981",
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Express", level: 80 },
        { name: "Python", level: 75 }
      ]
    },
    {
      category: "DevOps",
      color: "#EC4899", 
      skills: [
        { name: "Docker", level: 70 },
        { name: "CI/CD", level: 65 },
        { name: "AWS", level: 60 }
      ]
    },
    {
      category: "Database",
      color: "#F59E0B", 
      skills: [
        { name: "MongoDB", level: 85 },
        { name: "PostgreSQL", level: 75 },
        { name: "Redis", level: 65 }
      ]
    },
    {
      category: "System Design",
      color: "#8B5CF6",
      skills: [
        { name: "Architecture", level: 80 },
        { name: "API Design", level: 85 },
        { name: "Scalability", level: 70 }
      ]
    },
    {
      category: "Leadership",
      color: "#EF4444", 
      skills: [
        { name: "Team Management", level: 80 },
        { name: "Mentoring", level: 85 },
        { name: "Project Planning", level: 75 }
      ]
    }
  ];

  return (
    <div className="w-full py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((category, idx) => (
          <div 
            key={idx}
            className="bg-white dark:bg-stone-900 rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105"
          >
            <div 
              className={`p-4 text-xl font-bold bg-slate-200 dark:bg-stone-800`}
            >
              {category.category}
            </div>
            <div className="p-5">
              {category.skills.map((skill, skillIdx) => (
                <div key={skillIdx} className="mb-4">
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-sm">{skill.level}%</span>
                  </div>
                  <div className="w-full h-2 bg-slate-200 dark:bg-stone-500 rounded-full overflow-hidden">
                    <div 
                      className={`h-full rounded-full transition-all duration-500 bg-slate-400 dark:bg-stone-700`}
                      style={{ 
                        width: `${skill.level}%`, 
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillTree;