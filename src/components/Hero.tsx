import { ArrowRight, Github, Linkedin  , Mail , Microscope} from "lucide-react";
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
    name: "Node.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
   {
    name: "Golang",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg",
  },
    {
    name: "JavaScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "matplotlib",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matplotlib/matplotlib-original.svg",
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
             I build intelligent systems using Machine Learning and Deep Learning, 
              with a focus on Medical AI and medical image analysis.
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
          
                <a
                  href="/Jaafar_Alhourani_cv.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="flex gap-2">
                    View CV
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
                href="https://zenodo.org/me/uploads?q=&f=shared_with_me%3Afalse&l=list&p=1&s=10&sort=newest"
                target="_blank"
                className="p-3 rounded-lg bg-github-medium hover:bg-github-accent transition"
              >
                <span>My Research on Zenodo</span>
                         
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
          <div className="bg-github-medium rounded-2xl p-4 shadow-xl">
            {/* PROFILE IMAGE */}
            <div className="flex justify-center">
              <div className="p-1 rounded-full bg-gradient-to-r from-purple-500 to-blue-500">
                <img
                  src="/images/profile.jpg"
                  alt="Profile"
                  className="w-40 h-40 md:w-52 md:h-52 rounded-full object-cover"
                />
              </div>
            </div>



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