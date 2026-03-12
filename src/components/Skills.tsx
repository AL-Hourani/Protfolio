import {
  Code,
  Globe,
  Database,
  Server,
  Cpu,
  GitBranch,
  Box,
  
} from "lucide-react";

type Skill = {
  name: string;
  icon: any;
  category: string;
};

const skills: Skill[] = [
  { name: "HTML & CSS", icon: Globe, category: "frontend" },
  { name: "JavaScript", icon: Code, category: "frontend" },
  { name: "React.js", icon: Code, category: "frontend" },
  { name: "TypeScript", icon: Code, category: "frontend" },
  { name: "Golang", icon: Server, category: "backend" },
  { name: "MongoDB", icon: Database, category: "backend" },
  { name: "PostgreSQL", icon: Database, category: "backend" },
  { name: "REST API", icon: Server, category: "backend" },
  { name: "Machine Learning", icon: Cpu, category: "ai" },
  { name: "Data Mining", icon: Database, category: "ai" },
  { name: "PyTorch", icon: Cpu, category: "ai" },
  { name: "Computer Vision", icon: Cpu, category: "ai" },
  { name: "Git & GitHub", icon: GitBranch, category: "tools" },
  { name: "Docker", icon: Box, category: "tools" },
];

const Skills = () => {
  const categories = ["frontend", "backend", "ai", "tools"];

  const categoryNames: { [key: string]: string } = {
    frontend: "Frontend",
    backend: "Backend",
    ai: "AI / Machine Learning",
    tools: "Tools",
  };

  return (
    <section id="skills" className="py-24 bg-gradient-to-b from-github-dark to-github-darker">
      <div className="w-[92%] max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4 text-github-accent">Skills & Technologies</h2>
        <p className="max-w-2xl mx-auto text-github-text opacity-80 mb-12">
          Modern technologies and tools I use to build applications, backend systems, and AI solutions.
        </p>

        <div className="grid md:grid-cols-2 gap-10">
          {categories.map((cat) => {
            const catSkills = skills.filter((s) => s.category === cat);
            return (
              <div key={cat}>
                <h3 className="text-2xl font-semibold mb-6 text-github-accent">{categoryNames[cat]}</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {catSkills.map((skill, i) => {
                    const Icon = skill.icon;
                    return (
                      <div
                        key={i}
                        className="group flex flex-col items-center p-4 bg-github-medium rounded-xl border border-github-dark hover:border-github-accent hover:scale-105 transition-transform duration-300 cursor-pointer"
                      >
                        <Icon size={36} className="text-github-accent mb-2 group-hover:text-white transition-colors"/>
                        <span className="text-sm text-github-text opacity-90 group-hover:text-white">{skill.name}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;