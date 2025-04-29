
import { useTranslation } from 'react-i18next';
import { GraduationCap, Award } from 'lucide-react';
import { Card } from '@/components/ui/card';

interface Education {
  degree: string;
  institution: string;
  year: string;
  description: string;
  type: 'degree' | 'certificate';
}

const Education = () => {
  const { t } = useTranslation();
  
  const educationItems: Education[] = [
    {
      degree: t('education.masters'),
      institution: t('education.mastersInstitution'),
      year: '2020 - 2022',
      description: t('education.mastersDescription'),
      type: 'degree'
    },
    {
      degree: t('education.bachelors'),
      institution: t('education.bachelorsInstitution'),
      year: '2016 - 2020',
      description: t('education.bachelorsDescription'),
      type: 'degree'
    },
    {
      degree: t('education.certification1'),
      institution: t('education.certification1Institution'),
      year: '2023',
      description: t('education.certification1Description'),
      type: 'certificate'
    },
    {
      degree: t('education.certification2'),
      institution: t('education.certification2Institution'),
      year: '2022',
      description: t('education.certification2Description'),
      type: 'certificate'
    }
  ];

  return (
    <section id="education" className="py-20 bg-github-medium/30 backdrop-blur-lg">
      <div className="container mx-auto section-content">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('education.title')}</h2>
            <p className="max-w-2xl mx-auto text-github-text opacity-80">
              {t('education.description')}
            </p>
            <div className="h-1 w-20 bg-github-accent mx-auto mt-4"></div>
          </div>

          <div className="relative">
            {/* Vertical timeline line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-github-accent/30 rounded-full"></div>
            
            <div className="space-y-12">
              {educationItems.map((item, index) => (
                <div key={index} className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  {/* Timeline dot */}
                  <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                    <div className="h-8 w-8 rounded-full border-4 border-github-darker bg-github-accent flex items-center justify-center shadow-lg shadow-github-accent/20">
                      {item.type === 'degree' ? (
                        <GraduationCap className="h-4 w-4 text-github-darker" />
                      ) : (
                        <Award className="h-4 w-4 text-github-darker" />
                      )}
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className={`w-full  md:w-1/2 ${index % 2 === 0 ? 'md:pl-0 md:pr-12' : 'md:pr-0 md:pl-12'} pl-10`}>
                    <Card className="bg-github-medium/80 backdrop-blur-md border border-github-accent/20 hover:border-github-accent/50 transition-all overflow-hidden group">
                      <div className="p-6">
                        <div className="text-sm text-github-accent font-medium mb-2">{item.year}</div>
                        <h3 className="text-xl font-bold mb-1 group-hover:text-github-accent transition-colors">
                          {item.degree}
                        </h3>
                        <p className="text-github-text opacity-90 font-medium">{item.institution}</p>
                        <p className="mt-3 text-sm text-github-text/80">{item.description}</p>
                      </div>
                      <div className="h-1 w-full bg-gradient-to-r from-github-accent/0 via-github-accent to-github-accent/0"></div>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;