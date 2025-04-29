
import { useEffect } from 'react';
import ThreeScene from '@/components/ThreeScene';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import '@/i18n/config';
import { useTranslation } from 'react-i18next';
import Education from '@/components/Education';
import Languages from '@/components/Languages';

const Index = () => {
  const { i18n } = useTranslation();

  useEffect(() => {
    // Set both dir and lang attributes
    document.dir = i18n.language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = i18n.language;
    
    // For Tajawal font to take effect
    if (i18n.language === 'ar') {
      document.documentElement.classList.add('font-tajawal');
    } else {
      document.documentElement.classList.remove('font-tajawal');
    }
  }, [i18n.language]);

  return (
    <div className="min-h-screen bg-github-dark" dir={i18n.language === 'ar' ? 'rtl' : 'ltr'}>
      {/* 3D animated background */}
      <ThreeScene />
      
      {/* Navigation */}
      <Navbar />
      
      {/* Main content sections */}
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Education />
      <Languages />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;