import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Brain, Github, FileText } from "lucide-react";
import { Link } from "react-router-dom";

const Research = () => {

  const researchProjects = [
    {
      title: "Multi-Dendrite Learning Neuron",
      description:
        "A biologically inspired neuron model where each dendrite learns using a different local learning rule such as Hebbian, Predictive, and Coactivity learning.",
      icon: Brain,
      progress: 40,
      status: "Experimental",
      links: {
        paper: "#",
        code: "#",
        experiments: "#"
      }
    },

  

  ];

  return (
    <section id="research" className="py-24 bg-github-dark">

      <div className="w-[92%] max-w-6xl mx-auto">

        {/* Title */}
        <div className="text-center mb-20">

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            AI Research Lab
          </h2>

          <p className="max-w-2xl mx-auto text-github-text opacity-80">
            Experimental research and scientific explorations focused on
            biologically inspired artificial intelligence, neural learning
            mechanisms, and new computational architectures.
          </p>

          <div className="h-1 w-24 bg-github-accent mx-auto mt-6"></div>

        </div>

        {/* Research Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

          {researchProjects.map((research, index) => {

            const Icon = research.icon;

            return (

              <Card
                key={index}
                className="group bg-github-darker border-github-medium hover:border-github-accent transition-all duration-300 hover:scale-[1.03]"
              >

                <CardContent className="p-8 space-y-6">

                  {/* Icon */}
                  <div className="flex items-center gap-3">

                    <Icon
                      size={30}
                      className="text-github-accent group-hover:scale-110 transition"
                    />

                    <h3 className="text-xl font-bold">
                      {research.title}
                    </h3>

                  </div>

                  {/* Description */}
                  <p className="text-github-text opacity-80 leading-relaxed">
                    {research.description}
                  </p>

                  {/* Status */}
                  <div className="text-sm text-github-accent">
                    Status: {research.status}
                  </div>

                  {/* Progress bar */}
                  <div>

                    <div className="flex justify-between text-sm mb-1">
                      <span>Research Progress</span>
                      <span>{research.progress}%</span>
                    </div>

                    <div className="w-full h-2 bg-github-medium rounded-full overflow-hidden">
                      <div
                        className="h-full bg-github-accent"
                        style={{ width: `${research.progress}%` }}
                      ></div>
                    </div>

                  </div>

                  {/* Buttons */}
                  <div className="flex gap-3 pt-2 flex-wrap">

                <Link to="/research/multi-dendrite-neuron">
                    <Button size="sm" variant="outline">
                      <FileText size={16} className="mr-2" />
                      Paper
                    </Button>
                </Link>

                    <Button size="sm" variant="outline">
                      <Github size={16} className="mr-2" />
                      Code
                    </Button>

  

                  </div>

                </CardContent>

              </Card>
            );

          })}

        </div>

      </div>

    </section>
  );
};

export default Research;