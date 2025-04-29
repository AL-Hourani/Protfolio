
import { Globe } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Button } from './ui/button';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'ar' ? 'en' : 'ar';
    i18n.changeLanguage(newLang);
    document.dir = newLang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = newLang;
    
    if (newLang === 'ar') {
      document.documentElement.classList.add('font-tajawal');
    } else {
      document.documentElement.classList.remove('font-tajawal');
    }
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleLanguage}
      className="text-github-text hover:text-github-accent relative"
      title={i18n.language === 'ar' ? 'English' : 'العربية'}
    >
      <Globe className="h-5 w-5" />
      {/* <span className="absolute -bottom-1 -right-1 text-xs font-bold">
        {i18n.language === 'ar' ? 'EN' : 'عربي'}
      </span> */}
    </Button>
  );
};

export default LanguageSwitcher;