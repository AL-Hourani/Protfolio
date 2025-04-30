
import { Button } from '@/components/ui/button';
import { FileDown } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="py-20 bg-github-darker bg-opacity-60">
      <div className="container mx-auto section-content">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('about.title')}</h2>
            <div className="h-1 w-20 bg-github-accent mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 order-2 md:order-1">
              <h3 className="text-2xl font-bold text-github-accent">{t('about.whoAmI')}</h3>
              <p className="text-github-text opacity-90 leading-relaxed">
                {t('about.description1')}
              </p>
              
              <p className="text-github-text opacity-90 leading-relaxed">
                {t('about.description2')}
              </p>
              
              <div className="pt-4">
                <h4 className="text-xl font-semibold mb-3">{t('about.approach')}</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-github-blue/20 text-github-accent flex items-center justify-center mr-3 mt-1">
                      ✓
                    </div>
                    <p>{t('about.cleanCode')}</p>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-github-blue/20 text-github-accent flex items-center justify-center mr-3 mt-1">
                      ✓
                    </div>
                    <p>{t('about.userCentered')}</p>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-github-blue/20 text-github-accent flex items-center justify-center mr-3 mt-1">
                      ✓
                    </div>
                    <p>{t('about.continuousLearning')}</p>
                  </li>
                </ul>
              </div>
              
              <div className="pt-4">
                <a href="/cv.pdf" download>
                  <Button variant="outline" className="border-github-accent text-github-accent hover:bg-github-accent hover:bg-opacity-10 flex gap-2">
                    <FileDown size={18} /> {t('about.downloadResume')}
                  </Button>
                </a>
              </div>
            </div>
            
            <div className="relative order-1 md:order-2">
              <div className="aspect-square rounded-2xl overflow-hidden border-2 border-github-medium bg-github-medium relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-48 h-48 rounded-full bg-github-blue bg-opacity-10 flex items-center justify-center text-7xl font-bold text-github-accent animate-float">
                  {t('Logo.logo')}
                  </div>
                </div>
                
                <div className="absolute top-5 right-5 bg-github-dark rounded-full py-1 px-4 text-sm">
                  <span className="flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-green-500"></span>
                    {t('about.availableForWork')}
                  </span>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute bottom-8 left-8 h-20 w-20 rounded-lg border-2 border-github-accent border-dashed rotate-12 opacity-40"></div>
                <div className="absolute top-10 left-10 h-12 w-12 rounded-full border-2 border-github-blue border-dashed opacity-40"></div>
                <div className="absolute top-1/3 right-8 h-8 w-8 bg-github-accent opacity-20 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;