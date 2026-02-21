import { ExternalLink, Github } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import ipo from "../../public/images/po.png"
import ipot from "../../public/images/poo.png"
import ipor from "../../public/images/pth.png"
import ipof from "../../public/images/pfor.png"
import ipov from "../../public/images/pfiv.png"
import ipx from "../../public/images/px.png"
import ipe from "../../public/images/psv.png"

import im1 from "../../public/images/صورة2.png"
import im2 from "../../public/images/صورة3.png"
import im3 from "../../public/images/صورة7.png"
import im4 from "../../public/images/صورة8.png"
import im5 from "../../public/images/صورة10.png"
import im6 from "../../public/images/صورة11.png"
import im7 from "../../public/images/صورة12.png"
import im8 from "../../public/images/صورة13.png"
import im9 from "../../public/images/صورة14.png"
import im10 from "../../public/images/صورة15.png"
import im11 from "../../public/images/صورة16.png"
import im12 from "../../public/images/صورة18.png"
import im13 from "../../public/images/صورة20.png"
import im14 from "../../public/images/صورة21.png"


type Project = {
  title: string;
  description: string;
  tags: string[];
  images: string[];
  githubUrl: string;
  liveUrl: string;
  status?: 'live' | 'in-progress';
};

const projects: Project[] = [

  {
    title: "service health monitor (VIGIL)",
    description: "A monitoring system built with Go for tracking the availability and performance of critical services. Provides real-time alerts, logs, and dashboards to ensure system reliability and rapid issue resolution.",
    tags: ["React", "python", "Golang"],
    images: [ipo , ipe , ipot , ipof , ipx , ipov],
    githubUrl: "#",
    liveUrl: "#",
    status: "in-progress"
  },

  {
    title: "National Diabetes Program (NDP)",
    description: "A comprehensive platform designed to support the registration, management, and monitoring of diabetic patients.",
    tags: ["React", "Golang"],
    images: [im1 , im2 , im3 , im4 , im5 , im6 , im7 ,im8 , im9 , im10 , im11 , im12 , im13 , im14],
    githubUrl: "#",
    liveUrl: "#",
    status: "live"
  },


];

const Projects = () => {
  const { t } = useTranslation();


  // لكل مشروع نخزن الصورة الحالية
  const [currentImageIndex, setCurrentImageIndex] = useState<Record<string, number>>(
    projects.reduce((acc, project) => {
      acc[project.title] = 0;
      return acc;
    }, {} as Record<string, number>)
  );

  const handleDotClick = (projectTitle: string, index: number) => {
    setCurrentImageIndex((prev) => ({ ...prev, [projectTitle]: index }));
  };

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

        <div className="grid md:grid-cols-1 gap-8 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="overflow-hidden border-github-medium bg-github-medium hover:border-github-accent transition-all duration-300 group relative"
            >
              {/* حالة المشروع */}
              {project.status && (
                <span className={`absolute top-2 right-2 px-2 py-1 text-xs rounded 
                  ${project.status === 'live' ? 'bg-green-500' : 'bg-yellow-500'} text-white`}>
                  {project.status === 'live' ? 'Live' : 'In Progress'}
                </span>
              )}

              {/* عرض الصور */}
              <div className="flex gap-2 overflow-x-auto py-4 px-2 bg-github-darker">
                {project.images.map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt={`${project.title} screenshot ${i+1}`}
                    className="object-cover rounded-lg flex-shrink-0"
                  />
                ))}
              </div>

                  {/* Dots */}
            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-2">
              {project.images.map((_, i) => (
                <span
                  key={i}
                  className={`w-3 h-3 rounded-full cursor-pointer transition-colors ${
                    currentImageIndex[project.title] === i ? 'bg-github-accent' : 'bg-github-dark'
                  }`}
                  onClick={() => handleDotClick(project.title, i)}
                />
              ))}
            </div>

              {/* محتوى المشروع */}
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