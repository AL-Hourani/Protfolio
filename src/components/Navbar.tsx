
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const navItems = [
    { name: t('nav.home'), id: 'hero' },
    { name: t('nav.about'), id: 'about' },
    { name: t('nav.projects'), id: 'projects' },
    { name: t('nav.skills'), id: 'skills' },
    { name: t('nav.education'), id: 'education' },
    { name: t('nav.languages'), id: 'languages' },
    { name: t('nav.contact'), id: 'contact' },
  ];

  return (
    <header
      className={cn(
        'fixed top-0 left-0 w-full z-50 transition-all duration-300',
        scrolled ? 'bg-github-darker bg-opacity-95 shadow-lg' : 'bg-transparent'
      )}
    >
      <div className="container mx-auto py-4">
        <nav className="flex justify-between items-center">
          <div className="flex items-center">
            <a href="#" className="flex items-center gap-2">
              <div className="h-10 w-10 rounded-full bg-github-blue flex items-center justify-center">
                <span className="text-white font-bold text-xl">   {t('Logo.logo')}</span>
              </div>
              <span className="text-xl font-bold text-github-text hidden sm:block">
                 {t('nav.name')}
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-github-text hover:text-github-accent transition-colors"
              >
                {item.name}
              </button>
            ))}
            <LanguageSwitcher />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <LanguageSwitcher />
            <button
              className="text-github-text hover:text-github-accent"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-github-medium animate-fade-in">
          <div className="container mx-auto py-4 flex flex-col gap-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-github-text py-2 hover:text-github-accent transition-colors text-left"
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
