import { Github} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-github-darker py-12">
      <div className="w-[92%] max-w-6xl mx-auto  section-content">
        <div className="p-8">

          <div className="flex flex-col md:flex-row justify-between items-center border-b border-github-medium pb-8 mb-8">

            <div className="flex items-center  w-full  mb-6 md:mb-0">
              <div className="flex items-center justify-between w-full  gap-2">

                <span className="text-xl font-bold text-github-blue text-github-text">
                  Jaafar
                </span>

            <div className="flex space-x-6">
              <a
                href="https://github.com/AL-Hourani"
                className="text-github-text hover:text-github-accent transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
            </div>

              </div>
            </div>



          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-8">

            <div>
              <h4 className="text-lg font-semibold mb-4">
                Navigation
              </h4>

              <div className="grid grid-cols-2 gap-2">

                {[
                  { name: "Home", id: "hero" },
                  { name: "About", id: "about" },
                  { name: "Projects", id: "projects" },
                  { name: "Skills", id: "skills" },
                  { name: "Contact", id: "contact" },
                ].map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className="text-github-text opacity-80 hover:opacity-100 hover:text-github-accent transition-colors"
                  >
                    {item.name}
                  </a>
                ))}

              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">
                Services
              </h4>

              <ul className="space-y-2">

                {[
                  "Machine Learning",
                  "Frontend Development",
                  "Backend Development",
                  "UI / UX Design",
                ].map((service) => (
                  <li key={service}>
                    <a
                      href="#"
                      className="text-github-text opacity-80 hover:opacity-100 hover:text-github-accent transition-colors"
                    >
                      {service}
                    </a>
                  </li>
                ))}

              </ul>
            </div>

            <div>

              <h4 className="text-lg font-semibold mb-4">
                Contact
              </h4>

              <address className="not-italic space-y-2 text-github-text opacity-80">

                <p>Homs, Syria</p>

                <p>
                  <a
                    href="mailto:hello@example.com"
                    className="hover:text-github-accent transition-colors"
                  >
                    jalhourani3@gmail.com
                  </a>
                </p>

                <p>
                  <a
                    href="tel:+963980329517"
                    className="hover:text-github-accent transition-colors"
                  >
                    +963 980 329 517
                  </a>
                </p>

              </address>

            </div>

          </div>

          <div className="text-center pt-8 border-t border-github-medium">

            <p className="text-github-text opacity-70 text-sm">
              © {currentYear} Jaafar. All rights reserved.
            </p>

          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;