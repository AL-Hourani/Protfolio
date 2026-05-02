import { Button } from "@/components/ui/button";
import { FileDown } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-24 bg-github-darker/50">

      <div className="w-[92%] max-w-6xl mx-auto px-4">

        {/* Title */}
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About Me
          </h2>

          <div className="h-1 w-20 bg-github-accent mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* LEFT SIDE */}
          <div className="space-y-6">

            <h3 className="text-2xl font-bold text-github-accent">
              AI Engineer & Full Stack Developer
            </h3>

            <p className="text-github-text opacity-90 leading-relaxed">
              I'm a developer specialized in Artificial Intelligence,
              Machine Learning, and modern web technologies. I build
              intelligent systems and scalable digital products that
              solve real-world problems.
            </p>

            <p className="text-github-text opacity-90 leading-relaxed">
              My work focuses on combining data science with modern
              software engineering to create powerful applications,
              automation systems, and data-driven solutions.
            </p>

            {/* Approach */}
            <div className="pt-4">
              <h4 className="text-xl font-semibold mb-4">
                My Approach
              </h4>

              <div className="space-y-3">

                <div className="flex items-center gap-3">
                  <span className="text-github-accent">✓</span>
                  <p>Clean, scalable and maintainable code</p>
                </div>

                <div className="flex items-center gap-3">
                  <span className="text-github-accent">✓</span>
                  <p>User-centered product design</p>
                </div>

                <div className="flex items-center gap-3">
                  <span className="text-github-accent">✓</span>
                  <p>Continuous learning & experimentation</p>
                </div>

              </div>
            </div>

            {/* Download CV */}
            <div className="pt-6">
              <a href="/public/jaafar_alhourani_cv.pdf" download = "jaafar_alhourani_cv.pdf">
                <Button
                  variant="outline"
                  className="border-github-accent text-github-accent flex gap-2"
                >
                  <FileDown size={18} />
                  Download CV
                </Button>
              </a>
            </div>

          </div>

          {/* RIGHT SIDE */}
          <div className="bg-github-medium rounded-2xl p-10 shadow-xl relative">

            {/* Status */}
            <div className="absolute top-6 right-6 bg-github-dark px-3 py-1 rounded-full text-sm flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              Available for work
            </div>

            {/* Avatar */}
            <div className="flex justify-center mb-8">
              <div className="w-40 h-40 rounded-full bg-github-blue/10 flex items-center justify-center text-5xl font-bold text-github-accent">
                J
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6 text-center">

              <div>
                <p className="text-2xl font-bold text-github-accent">35+</p>
                <p className="text-sm opacity-70">Projects</p>
              </div>

              <div>
                <p className="text-2xl font-bold text-github-accent">5+</p>
                <p className="text-sm opacity-70">AI Models</p>
              </div>

              <div>
                <p className="text-2xl font-bold text-github-accent">4+</p>
                <p className="text-sm opacity-70">Years Learning</p>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default About;