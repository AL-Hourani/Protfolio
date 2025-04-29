
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          nav: {
            home: 'Home',
            about: 'About',
            projects: 'Projects',
            skills: 'Skills',
            education: 'Education',
            languages: 'Languages',
            contact: 'Contact',
            name:'Jaafar AL-Hourani'
          },
          hero: {
            title: 'Crafting Digital Experiences with Code and Creativity',
            subtitle: 'Full Stack Developer',
            description: 'I build innovative web applications with modern technologies, focusing on clean code, exceptional user experiences, and scalable solutions.',
            contact: 'Contact me',
            viewProjects: 'View Projects',
            techStack: 'Tech Stack'
          },
          about: {
            title: 'About Me',
            whoAmI: 'Who am I?',
            description1: "I'm a passionate Full Stack Developer with a love for creating elegant solutions to complex problems. With over 5 years of experience in web development, I specialize in building responsive and interactive applications using modern JavaScript frameworks and libraries.",
            description2: 'My journey in software development began with a curiosity about how things work online. That curiosity evolved into a passion for crafting digital experiences that are not only functional but also aesthetically pleasing and user-friendly.',
            approach: 'My approach:',
            downloadResume: 'Download Resume',
            availableForWork: 'Available for work',
            cleanCode: 'Clean, maintainable code with best practices',
            userCentered: 'User-centered design and development',
            continuousLearning: 'Continuous learning and staying updated with tech trends'
          },
          projects: {
            title: 'Featured Projects',
            description: "Explore some of my recent work. Each project represents unique challenges and solutions that I've implemented.",
            viewAll: 'View All Projects',
            viewCode: 'Code',
            viewDemo: 'Live Demo'
          },
          skills: {
            title: 'Skills & Expertise',
            description: 'My technical skills and expertise have been cultivated through years of hands-on experience and continuous learning in web development and artificial intelligence.',
            professionalDev: 'Professional Development',
            learning: 'Continuous Learning & AI Research',
            problemSolving: 'Problem Solving & Algorithm Design',
            aiTraining: 'AI Model Training & Optimization',
            dataScience: 'Data Science & Analytics',
            frontend: 'Frontend Development',
            backend: 'Backend Development',
            tools: 'Tools & Technologies'
          },
          education: {
            title: 'Education & Certifications',
            description: 'My academic background and professional certifications',
            masters: 'Master of Science in Computer Science',
            mastersInstitution: 'Stanford University',
            mastersDescription: 'Specialized in artificial intelligence and web technologies with research focus on interactive web applications',
            bachelors: 'Bachelor of Science in Software Engineering',
            bachelorsInstitution: 'MIT',
            bachelorsDescription: 'Graduated with honors, specializing in software architecture and design patterns',
            certification1: 'AWS Certified Solutions Architect',
            certification1Institution: 'Amazon Web Services',
            certification1Description: 'Professional certification in designing distributed systems on AWS',
            certification2: 'Google Professional Cloud Developer',
            certification2Institution: 'Google Cloud',
            certification2Description: 'Advanced certification in building scalable applications on Google Cloud Platform',
          },
          languages: {
            title: 'Languages',
            description: 'I can communicate fluently in multiple languages, which helps me work effectively with international teams and clients around the world.',
            arabic: 'Arabic',
            english: 'English',
            french: 'French',
            spanish: 'Spanish',
            german: 'German',
            nativeSpeaker: 'Native Speaker',
          },
          contact: {
            title: 'Get In Touch',
            description: "Have a project in mind or want to collaborate? Feel free to reach out and I'll get back to you as soon as possible.",
            info: 'Contact Information',
            name: 'Your Name',
            email: 'Email',
            subject: 'Subject',
            message: 'Message',
            send: 'Send Message',
            sending: 'Sending...',
            phone: 'Phone',
            location: 'Location',
            connectWithMe: 'Connect with me',
            address:"Homs , Homs , SYRIA",
            phoneNum:  '+963 0980 329 517'
          },
          footer: {
            navigation: 'Navigation',
            services: 'Services',
            contact: 'Contact',
            webDev: 'Web Development',
            frontendDev: 'Front-End Development',
            backendDev: 'Back-End Development',
            uiUxDesign: 'UI/UX Design',
            rights: 'All rights reserved'
          },
          Logo :{
            logo:'J'
          }
          
        }
      },
      ar: {
        translation: {
          nav: {
            home: 'الرئيسية',
            about: 'عني',
            projects: 'المشاريع',
            skills: 'المهارات',
            education: 'التعليم',
            languages: 'اللغات',
            contact: 'اتصل بي',
            name:'جعفر الحوراني'
          },
          hero: {
            title: 'تصميم تجارب رقمية بالبرمجة والإبداع',
            subtitle: 'مطور ويب متكامل',
            description: 'أقوم ببناء تطبيقات ويب مبتكرة باستخدام التقنيات الحديثة، مع التركيز على الكود النظيف وتجارب المستخدم الاستثنائية والحلول القابلة للتطوير.',
            contact: 'اتصل بي',
            viewProjects: 'عرض المشاريع',
            techStack: 'التقنيات المستخدمة'
          },
          about: {
            title: 'نبذة عني',
            whoAmI: 'من أنا؟',
            description1: 'أنا مطور ويب متكامل شغوف بإنشاء حلول أنيقة للمشكلات المعقدة. مع خبرة تزيد عن 5 سنوات في تطوير الويب، أتخصص في بناء تطبيقات تفاعلية ومتجاوبة باستخدام أطر عمل جافا سكريبت الحديثة.',
            description2: 'بدأت رحلتي في تطوير البرمجيات بفضول حول كيفية عمل الأشياء عبر الإنترنت. تطور هذا الفضول إلى شغف بتصميم تجارب رقمية ليست وظيفية فحسب، بل جذابة بصرياً وسهلة الاستخدام.',
            approach: 'منهجي:',
            downloadResume: 'تحميل السيرة الذاتية',
            availableForWork: 'متاح للعمل',
            cleanCode: 'كود نظيف وقابل للصيانة مع أفضل الممارسات',
            userCentered: 'تصميم وتطوير يركز على المستخدم',
            continuousLearning: 'التعلم المستمر ومواكبة اتجاهات التكنولوجيا'
          },
          projects: {
            title: 'المشاريع المميزة',
            description: 'استكشف بعض أعمالي الحديثة. كل مشروع يمثل تحديات وحلول فريدة قمت بتنفيذها.',
            viewAll: 'عرض جميع المشاريع',
            viewCode: 'الكود',
            viewDemo: 'العرض الحي'
          },
          skills: {
            title: 'المهارات والخبرات',
            description: 'تم صقل مهاراتي التقنية وخبراتي من خلال سنوات من الخبرة العملية والتعلم المستمر في تطوير الويب والذكاء الاصطناعي.',
            professionalDev: 'التطوير المهني',
            learning: 'التعلم المستمر وأبحاث الذكاء الاصطناعي',
            problemSolving: 'حل المشكلات وتصميم الخوارزميات',
            aiTraining: 'تدريب وتحسين نماذج الذكاء الاصطناعي',
            dataScience: 'علوم البيانات والتحليلات',
            frontend: 'تطوير الواجهة الأمامية',
            backend: 'تطوير الخلفية',
            tools: 'الأدوات والتقنيات'
          },
          education: {
            title: 'التعليم والشهادات',
            description: 'خلفيتي الأكاديمية والشهادات المهنية',
            masters: 'ماجستير العلوم في علوم الكمبيوتر',
            mastersInstitution: 'جامعة ستانفورد',
            mastersDescription: 'تخصص في الذكاء الاصطناعي وتقنيات الويب مع التركيز البحثي على تطبيقات الويب التفاعلية',
            bachelors: 'بكالوريوس العلوم في هندسة البرمجيات',
            bachelorsInstitution: 'معهد ماساتشوستس للتكنولوجيا',
            bachelorsDescription: 'تخرج بمرتبة الشرف، متخصص في هندسة البرمجيات وأنماط التصميم',
            certification1: 'مهندس حلول AWS معتمد',
            certification1Institution: 'أمازون ويب سيرفيسز',
            certification1Description: 'شهادة مهنية في تصميم الأنظمة الموزعة على AWS',
            certification2: 'مطور سحابة Google المحترف',
            certification2Institution: 'سحابة Google',
            certification2Description: 'شهادة متقدمة في بناء تطبيقات قابلة للتوسع على منصة سحابة Google',
          },
          languages: {
            title: 'اللغات',
            description: 'أستطيع التواصل بطلاقة بعدة لغات، مما يساعدني على العمل بكفاءة مع الفرق الدولية والعملاء حول العالم.',
            arabic: 'العربية',
            english: 'الإنجليزية',
            french: 'الفرنسية',
            spanish: 'الإسبانية',
            german: 'الألمانية',
            nativeSpeaker: 'اللغة الأم',
          },
          contact: {
            title: 'تواصل معي',
            description: 'هل لديك مشروع في ذهنك أو ترغب في التعاون؟ لا تتردد في التواصل وسأرد عليك في أقرب وقت ممكن.',
            info: 'معلومات التواصل',
            name: 'اسمك',
            email: 'بريدك الإلكتروني',
            subject: 'الموضوع',
            message: 'الرسالة',
            send: 'إرسال الرسالة',
            sending: 'جاري الإرسال...',
            phone: 'الهاتف',
            location: 'الموقع',
            connectWithMe: 'تواصل معي',
            address:"حمص , حمص , سوريا",
            phoneNum:  '517 329 0980 963+'
          },
          footer: {
            navigation: 'التنقل',
            services: 'الخدمات',
            contact: 'اتصل بنا',
            webDev: 'تطوير الويب',
            frontendDev: 'تطوير الواجهة الأمامية',
            backendDev: 'تطوير الخلفية',
            uiUxDesign: 'تصميم واجهة المستخدم',
            rights: 'جميع الحقوق محفوظة'
          },
          Logo :{
            logo:'ج'
          }
          
        }
      }
    },
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;