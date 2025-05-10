
import { Github, Linkedin, Twitter } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-github-darker py-12">
      <div className="container mx-auto section-content">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center border-b border-github-medium pb-8 mb-8">
            <div className="flex items-center mb-6 md:mb-0">
              <div className="flex items-center gap-2">
                <div className="h-10 w-10 rounded-full bg-github-blue flex items-center justify-center">
                  <span className="text-white font-bold text-xl">{t('Logo.logo')}</span>
                </div>
                <span className="text-xl font-bold text-github-text"> {t('nav.name')}</span>
              </div>
            </div>
            
            <div className="flex space-x-6">
              <a 
                href="#" 
                className="text-github-text hover:text-github-accent transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a 
                href="#" 
                className="text-github-text hover:text-github-accent transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a 
                href="#" 
                className="text-github-text hover:text-github-accent transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="text-lg font-semibold mb-4">{t('footer.navigation')}</h4>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { name: t('nav.home'), id: 'hero' },
                  { name: t('nav.about'), id: 'about' },
                  { name: t('nav.projects'), id: 'projects' },
                  { name: t('nav.skills'), id: 'skills' },
                  { name: t('nav.contact'), id: 'contact' }
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
              <h4 className="text-lg font-semibold mb-4">{t('footer.services')}</h4>
              <ul className="space-y-2">
                {[
                  { key: 'webDev', text: t('footer.webDev') },
                  { key: 'frontendDev', text: t('footer.frontendDev') },
                  { key: 'backendDev', text: t('footer.backendDev') },
                  { key: 'uiUxDesign', text: t('footer.uiUxDesign') }
                ].map((service) => (
                  <li key={service.key}>
                    <a 
                      href="#"
                      className="text-github-text opacity-80 hover:opacity-100 hover:text-github-accent transition-colors"
                    >
                      {service.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">{t('footer.contact')}</h4>
              <address className="not-italic space-y-2 text-github-text opacity-80">
                <p>{t('contact.address')}</p>
                <p>
                  <a 
                    href="mailto:hello@example.com"
                    className="hover:text-github-accent transition-colors"
                  >
                    jaafar.alhourani.2002@gmail.com
                  </a>
                </p>
                <p>
                  <a 
                    href="tel:+1234567890"
                    className="hover:text-github-accent transition-colors"
                  >
                   {t('contact.phoneNum')}
                  </a>
                </p>
              </address>
            </div>
          </div>
          
          <div className="text-center pt-8 border-t border-github-medium">
            <p className="text-github-text opacity-70 text-sm">
              © {currentYear}   {t('nav.name')} {t('footer.rights')}.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;