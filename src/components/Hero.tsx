
import { ArrowRight , Edit } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTranslation } from 'react-i18next';

const Hero = () => {
  const { t, i18n } = useTranslation();
  
  const scrollToContact = () => {
    const contact = document.getElementById('contact');
    contact?.scrollIntoView({ behavior: 'smooth' });
  };
  
  return (
    <section id="hero" className="min-h-screen flex items-center pt-16 relative">
      <div className="container mx-auto section-content">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <div className="inline-block px-4 py-1.5  bg-github-medium rounded-full mb-4 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <span className="text-github-accent font-medium">{t('hero.subtitle')}</span>
          </div>
          
          <h1 className="font-bold tracking-tighter animate-fade-in" style={{ animationDelay: '0.4s' }}>
            {i18n.language === 'ar' ? (
              <>
                <span className="text-github-accent">{t('hero.title').split(' ')[0]} </span>
                {t('hero.title').split(' ').slice(1).join(' ')}
              </>
            ) : (
              <>
                {t('hero.title').split('Digital')[0]}
                <span className="text-github-accent">Digital Experiences</span> 
                {t('hero.title').split('Experiences')[1]}
              </>
            )}
          </h1>
          
          <p className="text-lg md:text-xl text-github-text opacity-90 leading-relaxed max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.6s' }}>
            {t('hero.description')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4 animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <Button 
              className="bg-github-blue hover:bg-opacity-90 flex items-center gap-2 px-6 py-6 has-arrow-icon" 
              onClick={scrollToContact}
            >
              {t('hero.contact')} <ArrowRight size={18} className="icon-arrow-right" />
            </Button>
            <Button 
              variant="outline" 
              className="border-github-accent text-github-accent hover:bg-github-accent hover:bg-opacity-10 px-6 py-6"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              {t('hero.viewProjects')}
            </Button>
          </div>
          
          <div className="pt-16 animate-fade-in" style={{ animationDelay: '1s' }}>
            <p className="text-github-text opacity-70 mb-3">{t('hero.techStack')}</p>
            <div className="flex flex-wrap justify-center gap-6">
              {['React', 'TypeScript', 'Node.js', 'Three.js', 'Tailwind'].map((tech) => (
                <div key={tech} className="px-4 py-2 bg-github-medium rounded-lg text-github-text">
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* <div className="w-40 h-40 absolute bottom-10 right-10 rounded-full bg-github-blue bg-opacity-10 flex items-center justify-center text-7xl font-bold text-github-accent animate-float">
              <Edit className='h-10 w-10'/>
      </div> */}
    </section>
  );
};

export default Hero;