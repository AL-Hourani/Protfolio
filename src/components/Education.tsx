import { GraduationCap, Award } from "lucide-react";
import { Card } from "@/components/ui/card";

interface Education {
  title: string;
  institution: string;
  year: string;
  description: string;
  type: "degree" | "certificate";
}

const educationItems: Education[] = [
  {
    title: "Professional Experience",
    institution: "Self Learning & Practical Development",
    year: "2020 - 2025",
    description:
      "More than four years of practical experience in web development and software design. Recently expanded into Artificial Intelligence and Machine Learning through practical projects and experimentation.",
    type: "degree",
  },
  {
    title: "Bachelor's Degree",
    institution: "University of Homs (Syria)",
    year: "2020 - 2025",
    description:
      "Studied core computer science subjects including algorithms, software engineering, and system design while building several development projects.",
    type: "degree",
  },
];

const Education = () => {
  return (
    <section id="education" className="py-24 bg-github-darker/40">

      <div className="w-[92%] max-w-6xl mx-auto">

        {/* Title */}

        <div className="text-center mb-20">

          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Education & Experience
          </h2>

          <p className="max-w-2xl mx-auto text-github-text opacity-80">
            My journey in software engineering, development, and artificial intelligence.
          </p>

          <div className="h-1 w-20 bg-github-accent mx-auto mt-4"></div>

        </div>

        {/* Cards */}

        <div className="grid md:grid-cols-2 gap-8">

          {educationItems.map((item, index) => {

            const Icon = item.type === "degree" ? GraduationCap : Award;

            return (

              <Card
                key={index}
                className="p-8 bg-github-medium border border-github-medium hover:border-github-accent transition-all duration-300 group"
              >

                {/* Header */}

                <div className="flex items-start justify-between mb-6">

                  <div className="flex items-center gap-4">

                    <div className="w-12 h-12 rounded-lg bg-github-accent/10 flex items-center justify-center">

                      <Icon className="text-github-accent" size={22} />

                    </div>

                    <div>

                      <h3 className="text-xl font-semibold group-hover:text-github-accent transition">

                        {item.title}

                      </h3>

                      <p className="text-sm text-github-text/80">

                        {item.institution}

                      </p>

                    </div>

                  </div>

                  <span className="text-sm text-github-accent font-medium">

                    {item.year}

                  </span>

                </div>

                {/* Description */}

                <p className="text-sm text-github-text/80 leading-relaxed">

                  {item.description}

                </p>

              </Card>
            );
          })}

        </div>

      </div>

    </section>
  );
};

export default Education;