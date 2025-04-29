
import { useTranslation } from 'react-i18next';
import { Languages as LanguagesIcon, Globe, Percent } from 'lucide-react';
import { Progress } from '@/components/ui/progress';

interface Language {
  name: string;
  level: number;
  certificate?: string;
}

const Languages = () => {
  const { t } = useTranslation();
  
  const languages: Language[] = [
    {
      name: t('languages.arabic'),
      level: 100,
      certificate: t('languages.nativeSpeaker')
    },
    {
      name: t('languages.english'),
      level: 85,
      certificate: 'TOEFL 110/120'
    },
    {
      name: t('languages.french'),
      level: 60,
      certificate: 'DELF B2'
    },
    {
      name: t('languages.spanish'),
      level: 40
    },
    {
      name: t('languages.german'),
      level: 25
    }
  ];

  return (
    <section id="languages" className="py-20 bg-github-darker relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-github-blue/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-github-accent/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto section-content relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="md:w-5/12">
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-full bg-github-accent/10 text-github-accent">
                    <Globe size={24} />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold">{t('languages.title')}</h2>
                </div>
                
                <p className="text-github-text/80 leading-relaxed">
                  {t('languages.description')}
                </p>
                
                <div className="h-1 w-16 bg-github-accent mt-4"></div>
              </div>
              
              <div className="relative">
                <div className="aspect-square max-w-xs rounded-full bg-gradient-to-br from-github-blue/20 to-github-accent/20 flex items-center justify-center animate-spin-slow relative">
                  <div className="absolute inset-2 rounded-full border-2 border-dashed border-github-accent/30"></div>
                  <div className="absolute inset-8 rounded-full border-2 border-dashed border-github-blue/30"></div>
                  <div className="h-24 w-24 rounded-full bg-github-medium/80 backdrop-blur-lg flex items-center justify-center">
                    <LanguagesIcon size={40} className="text-github-accent" />
                  </div>
                </div>
              </div>
            </div>
            
            <div className="md:w-7/12 space-y-6">
              {languages.map((language, index) => (
                <div key={index} className="backdrop-blur-sm bg-github-medium/30 border border-github-accent/10 p-6 rounded-lg">
                  <div className="flex justify-between mb-2">
                    <div className="text-lg font-semibold">{language.name}</div>
                    <div className="text-github-accent flex items-center gap-1">
                      <Percent size={16} />
                      <span>{language.level}</span>
                    </div>
                  </div>
                  
                  <Progress value={language.level} className="h-2 bg-github-darker">
                    <div 
                      className="h-full bg-gradient-to-r from-github-blue to-github-accent"
                      style={{ width: `${language.level}%` }}
                    />
                  </Progress>
                  
                  {language.certificate && (
                    <div className="mt-2 text-xs text-github-text/70">
                      {language.certificate}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Languages;
