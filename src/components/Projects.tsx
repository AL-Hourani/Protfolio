
import { ExternalLink, Github } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { useTranslation } from 'react-i18next';
import imgurl from "../../public/images/Screenshot (226).png"

type Project = {
  title: string;
  description: string;
  tags: string[];
  image: string;
  githubUrl: string;
  liveUrl: string;
};

const projects: Project[] = [
  {
    title: "Diabetes Care Center Managment",
    description: "A personal portfolio website with 3D animations using Three.js and React. Features a responsive design with smooth scrolling and modern UI.",
    tags: ["React", "shadcn", "Tailwind CSS"],
    image: imgurl,
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    title: "E-Commerce Dashboard",
    description: "An admin dashboard for e-commerce platforms with sales analytics, inventory management, and customer insights. Built with React and Chart.js.",
    tags: ["React", "TypeScript", "Chart.js"],
    image: "https://source.unsplash.com/random/600x400/?dashboard,admin",
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    title: "Weather App",
    description: "A beautiful weather application that shows current weather and forecasts. Features location-based weather data and animated UI elements.",
    tags: ["JavaScript", "API", "CSS"],
    image: "https://source.unsplash.com/random/600x400/?weather,cloud",
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    title: "Task Management System",
    description: "A full-stack task management application with user authentication, task categorization, and progress tracking features.",
    tags: ["React", "Node.js", "MongoDB"],
    image: "https://source.unsplash.com/random/600x400/?task,management",
    githubUrl: "#",
    liveUrl: "#",
  },
];

const Projects = () => {
  const { t } = useTranslation();
  
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto section-content">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('projects.title')}</h2>
          <p className="max-w-2xl mx-auto text-github-text opacity-80">
            {t('projects.description')}
          </p>
          <div className="h-1 w-20 bg-github-accent mx-auto mt-4"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="overflow-hidden border-github-medium bg-github-medium hover:border-github-accent transition-all duration-300 group"
            >
              <div className="aspect-video w-full overflow-hidden bg-github-darker">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-semibold group-hover:text-github-accent transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-sm text-github-text opacity-80 line-clamp-3">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tags.map((tag, i) => (
                    <span 
                      key={i} 
                      className="text-xs px-2 py-1 rounded bg-github-dark text-github-accent"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center pt-4 gap-4">
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-github-text hover:text-github-accent transition-colors flex items-center gap-1 text-sm"
                  >
                    <Github size={16} />
                    {t('projects.viewCode')}
                  </a>
                  <a 
                    href={project.liveUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-github-text hover:text-github-accent transition-colors flex items-center gap-1 text-sm"
                  >
                    <ExternalLink size={16} />
                    {t('projects.viewDemo')}
                  </a>
                </div>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="#"
            className="inline-flex items-center gap-2 text-github-accent hover:underline"
          >
            {t('projects.viewAll')} <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
