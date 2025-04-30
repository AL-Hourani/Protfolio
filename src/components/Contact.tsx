
import { useState, FormEvent, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowRight, Mail, MapPin, Phone } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import emailjs from '@emailjs/browser';
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const { t } = useTranslation();
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    toast.success('Message sent successfully! I will get back to you soon.');
    e.preventDefault();
    if (!form.current) return;

    setIsSubmitting(true);
    
    try {
      const result = await emailjs.sendForm(
        'service_q75w7jv', // Replace with your EmailJS service ID
        'template_5jtlj7a', // Replace with your EmailJS template ID
        form.current,
        'rJIyvHjP0nGFgau1X' // Replace with your EmailJS public key
      );

      if (result.text === 'OK') {
        toast.success('Message sent successfully! I will get back to you soon.');
        form.current.reset();
      }
    } catch (error) {
      toast.error('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto section-content">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('contact.title')}</h2>
          <p className="max-w-2xl mx-auto text-github-text opacity-80">
            {t('contact.description')}
          </p>
          <div className="h-1 w-20 bg-github-accent mx-auto mt-4"></div>
        </div>
        
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          <div>
            <Card className="h-full p-8 border-github-medium bg-github-medium bg-opacity-50 flex flex-col">
              <h3 className="text-2xl font-semibold mb-6">{t('contact.info')}</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-full bg-github-blue bg-opacity-10 flex items-center justify-center flex-shrink-0">
                    <Mail className="h-5 w-5 text-github-accent" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-github-text opacity-70">{t('contact.email')}</h4>
                    <a href="mailto:hello@example.com" className="text-github-accent hover:underline">
                      hello@example.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-full bg-github-blue bg-opacity-10 flex items-center justify-center flex-shrink-0">
                    <Phone className="h-5 w-5 text-github-accent" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-github-text opacity-70">{t('contact.phone')}</h4>
                    <a href="tel:+1234567890" className="text-github-accent hover:underline">
                      +963  0980 329 517
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-full bg-github-blue bg-opacity-10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-5 w-5 text-github-accent" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-github-text opacity-70">{t('contact.location')}</h4>
                    <p>Homs, Homs , SYRIA</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-auto pt-12">
                <h4 className="text-lg font-medium mb-4">{t('contact.connectWithMe')}</h4>
                <div className="flex gap-4 justify-center">
                  {['github', 'twitter', 'linkedin'].map((social) => (
                    <a 
                      key={social} 
                      href="#" 
                      className="h-10 w-10 rounded-full bg-github-dark flex items-center justify-center hover:bg-github-blue transition-colors"
                    >
                      <span className="sr-only">{social}</span>
                      <i className={`icon-${social}`} aria-hidden="true"></i>
                    </a>
                  ))}
                </div>
              </div>
            </Card>
          </div>
          
          <div>
            <Card className="p-8 border-github-medium bg-github-medium bg-opacity-50">
              <h3 className="text-2xl font-semibold mb-6">{t('contact.message')}</h3>
              
              <form ref={form} onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="user_name" className="block text-sm font-medium mb-1">
                    {t('contact.name')}
                  </label>
                  <Input
                    id="user_name"
                    name="from_name"
                    className="bg-github-dark border-github-dark"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="user_email" className="block text-sm font-medium mb-1">
                    {t('contact.email')}
                  </label>
                  <Input
                    id="user_email"
                    name="user_email"
                    type="email"
                    className="bg-github-dark border-github-dark"
                    required
                  />
                </div>
                
                {/* <div> */}
                  {/* <label htmlFor="subject" className="block text-sm font-medium mb-1">
                    {t('contact.subject')}
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    className="bg-github-dark border-github-dark"
                    required
                  />
                </div> */}
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1">
                    {t('contact.message')}
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    className="bg-github-dark border-github-dark min-h-[120px]"
                    required
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-github-blue hover:bg-opacity-90 mt-4 flex items-center justify-center gap-2 has-arrow-icon"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? t('contact.sending') : t('contact.send')}
                  {!isSubmitting && <ArrowRight size={18} className="icon-arrow-right" />}
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
