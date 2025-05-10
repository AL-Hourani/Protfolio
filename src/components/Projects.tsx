
import { ExternalLink, Github } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { useTranslation } from 'react-i18next';
import imgurl from "../../public/images/im1.png"
import imgurl2 from "../../public/images/im2.png"
import imgurA from "../../public/images/imgA.png"
import imgurD from "../../public/images/imgD.png"
import imgurC from "../../public/images/imgC.png"
import imgurP from "../../public/images/imgP.png"
import imgurF from "../../public/images/imgF.jpg"

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
    description: "This is a full-stack project consisting of a website and desktop application designed for managing diabetic patients. The platform allows healthcare professionals to record patient cases, monitor their health status over time, and provide personalized care.A key feature of the system is its integration with artificial intelligence, which analyzes medical test results to assist in diagnosis and provide early warnings. The AI model is trained to read and interpret lab reports, helping doctors make faster and more informed decisions.The project aims to enhance chronic disease management through intelligent automation, data-driven insights, and seamless user experience for both medical staff and patients.",
    tags: ["React", "shadcn", "Tailwind CSS" , "golang", "API" , "ML" , "Postgres"],
    image: imgurF,
    githubUrl: "#",
    liveUrl: "#",
  },

  {
    title: "helps doctors",
    description: "A smart application that helps doctors manage diabetic patients by tracking medical records, analyzing test results using AI, and receiving real-time alerts for critical health changes. It simplifies patient monitoring and improves decision-making through intelligent insights.",
    tags: ["JavaScript", "API", "CSS" ,"React"],
    image: imgurA,
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    title: "Official Download",
    description: "This website provides secure and direct downloads for the Smart Diabetes Management App on both desktop and mobile platforms. Stay updated with the latest versions and get started in seconds.",
    tags: ["React", "Node.js", "MongoDB"],
    image: imgurD,
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    title: "Pharmacy Management App",
    description: "A smart and easy-to-use system for pharmacy inventory, prescription tracking, sales reports, and medicine expiration monitoring. Designed to help pharmacists streamline operations, ensure stock accuracy, and serve patients more efficiently",
    tags: ["React", "Laravel", "MongoDB"],
    image: imgurP,
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    title: "Public Transport Management App",
    description: "A real-time system for managing and tracking buses, routes, schedules, and passenger flow. Designed for transit operators to optimize routes, monitor vehicle locations, reduce delays, and enhance commuter experience.",
    tags: ["React", "Node.js", "MYSql", "Socket" , "GPS"],
    image: imgurC,
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
              <div className="aspect-video w-full h-[32rem]  overflow-hidden bg-github-darker">
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
