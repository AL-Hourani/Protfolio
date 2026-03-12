import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X  , Github } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
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
    { name: 'Home', id: 'hero' },
    { name: 'About', id: 'about' },
    { name: 'Projects', id: 'projects' },
    { name: 'Research', id: 'research' },
    { name: 'Skills', id: 'skills' },
    { name: 'Education', id: 'education' },
    { name: 'Languages', id: 'languages' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <header
      className={cn(
        'fixed top-6 left-1/2 -translate-x-1/2 w-[92%] max-w-6xl z-50 transition-all duration-300',
        scrolled
          ? 'bg-github-darker/90 backdrop-blur-md shadow-xl'
          : 'bg-github-darker/70 backdrop-blur-md'
      )}
      style={{ borderRadius: '14px' }}
    >
      <div className="px-6 py-4">
        <nav className="flex justify-between items-center">

          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <div className="h-10 w-10 rounded-full bg-github-blue flex items-center justify-center">
              <span className="text-white font-bold text-xl">J</span>
            </div>

            <span className="text-xl font-bold text-github-text hidden sm:block">
              Jaafar Al-Hourani
            </span>
          </a>

          {/* Desktop Menu */}
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
            <span className='w-0.5 h-8 rounded-sm bg-slate-300'></span>
            <a
                  href="https://github.com/AL-Hourani"
                target="_blank"
              rel="noopener noreferrer"
              className="text-github-text hover:text-github-accent transition-colors"
            >
              <Github size={22} />
            </a>
          </div>

          {/* Mobile Button */}
          <div className="md:hidden flex gap-6">
            

            <a
              
             href="https://github.com/AL-Hourani"
                target="_blank"
              className="text-github-text hover:text-github-accent transition-colors"
            >
              <Github size={22} />
            </a>

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
        <div className="md:hidden bg-github-darker/70 rounded-b-xl animate-fade-in">
          <div className="flex flex-col px-6 py-4 gap-4">
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