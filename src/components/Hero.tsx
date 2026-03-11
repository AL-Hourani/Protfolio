import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FileDown } from "lucide-react";


const techStack = [
  {
    name: "Python",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  {
    name: "PyTorch",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg",
  },
  {
    name: "NumPy",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg",
  },
  {
    name: "Pandas",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg",
  },
  {
    name: "Scikit-Learn",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg",
  },
  {
    name: "React",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "TypeScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  {
    name: "Node.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "TensorFlow",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
  },
   {
    name: "Golang",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg",
  },
];
const Hero = () => {

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="pt-8  pb-24">
      <div className="w-[92%] max-w-6xl mx-auto px-4">

        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* LEFT SIDE */}
          <div className="space-y-6">

            <div className="inline-block px-4 py-1 bg-github-medium rounded-full text-github-accent text-sm">
              AI Engineer • Full Stack Developer
            </div>

            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Building Intelligent
              <span className="text-github-accent"> Digital Products</span>
            </h1>

            <p className="text-github-text opacity-80 text-lg max-w-xl">
              I design and build machine learning systems, modern web
              applications, and scalable data solutions that transform ideas
              into powerful digital experiences.
            </p>

            {/* Buttons */}
            <div className="flex gap-4 pt-2">

              <Button
                className="bg-github-blue w-full flex items-center gap-2 px-6 py-6"
                onClick={scrollToContact}
              >
                Contact Me <ArrowRight size={18} />
              </Button>

              <Button
                variant="outline"
                className="border-github-accent w-full text-github-accent px-6 py-6"
                onClick={() =>
                  document
                    .getElementById("projects")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                View Projects
              </Button>

            </div>

           

            {/* Social Icons */}
            <div className="flex gap-4 pt-4">
              <a href="/public/Jaafar_Alhourani_cv.pdf" download>
                 <Button
                      variant="outline"
                     className="border-github-accent flex-1 text-github-accent flex gap-2"
                    >
                      <FileDown size={18} />
                              Download CV
                </Button>
                </a>
              <a
                href="https://github.com/AL-Hourani"
                target="_blank"
                className="p-3 rounded-lg bg-github-medium hover:bg-github-accent transition"
              >
                <Github size={20} />
              </a>


              <a
                href="mailto:jalhourani3@gmail.com"
                className="p-3 rounded-lg bg-github-medium hover:bg-github-accent transition"
              >
                <Mail size={20} />
              </a>

            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="bg-github-medium rounded-2xl p-8 shadow-xl">

            <p className="text-github-accent mb-4 font-semibold">
              Tech Stack
            </p>

             <div className="grid grid-cols-2 gap-4">
              {techStack.map((tech) => (
                <div
                  key={tech.name}
                  className="flex items-center gap-3 bg-github-darker px-4 py-3 rounded-lg"
                >
                  <img
                    src={tech.icon}
                    alt={tech.name}
                    className="w-6 h-6"
                  />
                  <span className="text-github-text text-sm">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
           

            

          </div>

        </div>

      </div>
    </section>
  );
};

export default Hero;