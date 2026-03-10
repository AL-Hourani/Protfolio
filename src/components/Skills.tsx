import {
  Code,
  Globe,
  Database,
  Server,
  Cpu,
  GitBranch,
  Box,
  Wrench
} from "lucide-react";

type Skill = {
  name: string;
  icon: any;
  category: string;
};

const skills: Skill[] = [

  // Frontend
  { name: "HTML & CSS", icon: Globe, category: "frontend" },
  { name: "JavaScript", icon: Code, category: "frontend" },
  { name: "React.js", icon: Code, category: "frontend" },
  { name: "TypeScript", icon: Code, category: "frontend" },
  { name: "Three.js", icon: Box, category: "frontend" },

  // Backend
  { name: "Golang", icon: Server, category: "backend" },
  { name: "Node.js", icon: Server, category: "backend" },
  { name: "Express", icon: Server, category: "backend" },
  { name: "MongoDB", icon: Database, category: "backend" },
  { name: "PostgreSQL", icon: Database, category: "backend" },
  { name: "REST API", icon: Server, category: "backend" },

  // AI
  { name: "Machine Learning", icon: Cpu, category: "ai" },
  { name: "PyTorch", icon: Cpu, category: "ai" },
  { name: "Computer Vision", icon: Cpu, category: "ai" },

  // Tools
  { name: "Git & GitHub", icon: GitBranch, category: "tools" },
  { name: "Docker", icon: Box, category: "tools" },
  { name: "Figma", icon: Wrench, category: "tools" },
];

const Skills = () => {

  const frontend = skills.filter(s => s.category === "frontend");
  const backend = skills.filter(s => s.category === "backend");
  const ai = skills.filter(s => s.category === "ai");
  const tools = skills.filter(s => s.category === "tools");

  const SkillCard = ({ skill }: { skill: Skill }) => {
    const Icon = skill.icon;

    return (
      <div className="flex items-center gap-3 px-4 py-3 rounded-lg bg-github-medium border border-github-medium hover:border-github-accent transition">
        <Icon size={20} className="text-github-accent"/>
        <span className="text-sm">{skill.name}</span>
      </div>
    );
  };

  return (
    <section id="skills" className="py-24 bg-github-darker/50">

      <div className="w-[92%] max-w-6xl mx-auto">

        {/* Title */}

        <div className="text-center mb-16">

          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Skills & Technologies
          </h2>

          <p className="max-w-2xl mx-auto text-github-text opacity-80">
            Technologies and tools I use to build modern applications, backend systems, and AI solutions.
          </p>

          <div className="h-1 w-20 bg-github-accent mx-auto mt-4"></div>

        </div>

        {/* Grid */}

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Frontend */}

          <div>
            <h3 className="text-lg font-semibold mb-6 text-github-accent">
              Frontend
            </h3>

            <div className="space-y-3">
              {frontend.map((skill, i) => (
                <SkillCard key={i} skill={skill} />
              ))}
            </div>
          </div>

          {/* Backend */}

          <div>
            <h3 className="text-lg font-semibold mb-6 text-github-accent">
              Backend
            </h3>

            <div className="space-y-3">
              {backend.map((skill, i) => (
                <SkillCard key={i} skill={skill} />
              ))}
            </div>
          </div>

          {/* AI */}

          <div>
            <h3 className="text-lg font-semibold mb-6 text-github-accent">
              AI / Machine Learning
            </h3>

            <div className="space-y-3">
              {ai.map((skill, i) => (
                <SkillCard key={i} skill={skill} />
              ))}
            </div>
          </div>

          {/* Tools */}

          <div>
            <h3 className="text-lg font-semibold mb-6 text-github-accent">
              Tools
            </h3>

            <div className="space-y-3">
              {tools.map((skill, i) => (
                <SkillCard key={i} skill={skill} />
              ))}
            </div>
          </div>

        </div>

      </div>

    </section>
  );
};

export default Skills;