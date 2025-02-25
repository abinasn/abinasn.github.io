const SkillTree = () => {
  const skills = [
    {
      category: "Frontend",
      skills: [
        { name: "HTML", level: 90 },
        { name: "CSS", level: 75 },
        { name: "JavaScript", level: 70 },
        { name: "React.js", level: 75 }
      ]
    },
    {
      category: "Backend",
      skills: [
        { name: "Node.js", level: 75 },
        { name: "Express", level: 80 },
        { name: "Nestjs", level: 50}
      ]
    },
    {
      category: "DevOps",
      skills: [
        { name: "Docker", level: 70 },
        { name: "Kubernetes", level: 40},
        { name: "CI/CD", level: 65 },
        { name: "AWS", level: 50 },
      ]
    },
    {
      category: "Database",
      skills: [
        { name: "MongoDB", level: 85 },
        { name: "PostgreSQL", level: 75 },
        { name: "Redis", level: 65 }
      ]
    },
    {
      category: "System Design",
      skills: [
        { name: "Architecture", level: 80 },
        { name: "API Design", level: 85 },
        { name: "Scalability", level: 70 }
      ]
    },
    {
      category: "Leadership",
      skills: [
        { name: "Team Management", level: 80 },
        { name: "Mentoring", level: 85 },
        { name: "Project Planning", level: 75 }
      ]
    }
  ];

  return (
    <div className="w-full py-8 font-light text-sm">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((category, idx) => (
          <div 
            key={idx}
            className="bg-white dark:bg-stone-900 rounded-md shadow-md overflow-hidden transition-transform hover:scale-105"
          >
            <div 
              className={`p-4 text-lg font-bold bg-slate-200 dark:bg-stone-800`}
            >
              {category.category}
            </div>
            <div className="p-5">
              {category.skills.map((skill, skillIdx) => (
                <div key={skillIdx} className="mb-4">
                  <div className="flex justify-between items-center mb-1">
                    <span>{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="w-full h-2 bg-slate-200 dark:bg-stone-400 rounded-full overflow-hidden">
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