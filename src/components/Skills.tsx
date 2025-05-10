
import { Progress } from '@/components/ui/progress';
import { useTranslation } from 'react-i18next';

const skills: Skill[] = [
  // Frontend Skills
  { name: 'HTML & CSS', level: 90, category: 'frontend' },
  { name: 'JavaScript', level: 85, category: 'frontend' },
  { name: 'React.js', level: 85, category: 'frontend' },
  { name: 'TypeScript', level: 80, category: 'frontend' },
  { name: 'Three.js', level: 70, category: 'frontend' },
  
  // Backend Skills
  { name: 'Golang', level: 90, category: 'backend' },
  { name: 'Node.js', level: 80, category: 'backend' },
  { name: 'Express', level: 75, category: 'backend' },
  { name: 'MongoDB', level: 70, category: 'backend' },
  { name: 'PostgreSQL', level: 65, category: 'backend' },
  { name: 'REST API', level: 85, category: 'backend' },
  
  // AI Skills
  { name: 'Machine Learning', level: 60, category: 'ai' },
  { name: 'TensorFlow', level: 0, category: 'ai' },
  { name: 'PyTorch', level: 10, category: 'ai' },
  { name: 'Natural Language Processing', level: 10, category: 'ai' },
  { name: 'Computer Vision', level: 20, category: 'ai' },
  { name: 'OpenAI Integration', level: 0, category: 'ai' },
  
  // Tools
  { name: 'Git & GitHub', level: 85, category: 'tools' },
  { name: 'Docker', level: 60, category: 'tools' },
  { name: 'AWS', level: 0, category: 'tools' },
  { name: 'Figma', level: 70, category: 'tools' },
];

const Skills = () => {
  const { t } = useTranslation();
  
  const frontendSkills = skills.filter(skill => skill.category === 'frontend');
  const backendSkills = skills.filter(skill => skill.category === 'backend');
  const aiSkills = skills.filter(skill => skill.category === 'ai');
  const tools = skills.filter(skill => skill.category === 'tools');
  
  return (
    <section id="skills" className="py-20 bg-github-darker bg-opacity-60">
      <div className="container mx-auto section-content">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('skills.title')}</h2>
          <p className="max-w-2xl mx-auto text-github-text opacity-80">
            {t('skills.description')}
          </p>
          <div className="h-1 w-20 bg-github-accent mx-auto mt-4"></div>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <span className="h-4 w-4 rounded-full bg-github-blue"></span>
                {t('skills.frontend')}
              </h3>
              
              <div className="space-y-4">
                {frontendSkills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between text-sm mb-1">
                      <span>{skill.name}</span>
                      <span>{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2 bg-github-medium" />
                  </div>
                ))}
              </div>
              
              <h3 className="text-xl font-semibold mb-4 pt-6 flex items-center gap-2">
                <span className="h-4 w-4 rounded-full bg-github-accent"></span>
                {t('skills.backend')}
              </h3>
              
              <div className="space-y-4">
                {backendSkills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between text-sm mb-1">
                      <span>{skill.name}</span>
                      <span>{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2 bg-github-medium" />
                  </div>
                ))}
              </div>

              <h3 className="text-xl font-semibold mb-4 pt-6 flex items-center gap-2">
                <span className="h-4 w-4 rounded-full bg-[#10B981]"></span>
                {t('skills.title').split('&')[0]}
              </h3>
              
              <div className="space-y-4">
                {aiSkills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between text-sm mb-1">
                      <span>{skill.name}</span>
                      <span>{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2 bg-github-medium" />
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <span className="h-4 w-4 rounded-full bg-[#F78166]"></span>
                {t('skills.tools')}
              </h3>
              
              <div className="space-y-4">
                {tools.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between text-sm mb-1">
                      <span>{skill.name}</span>
                      <span>{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2 bg-github-medium" />
                  </div>
                ))}
              </div>
              
              <div className="mt-12 p-6 border border-github-medium rounded-lg bg-github-medium bg-opacity-50">
                <h4 className="text-lg font-medium mb-4">{t('skills.professionalDev')}</h4>
                <div className="space-y-2">
                  <div className="flex items-start">
                    <div className="h-5 w-5 rounded-full bg-github-blue/20 text-github-accent flex items-center justify-center mr-3 mt-1 text-xs">
                      ✓
                    </div>
                    <p className="text-sm">{t('skills.learning')}</p>
                  </div>
                  <div className="flex items-start">
                    <div className="h-5 w-5 rounded-full bg-github-blue/20 text-github-accent flex items-center justify-center mr-3 mt-1 text-xs">
                      ✓
                    </div>
                    <p className="text-sm">{t('skills.problemSolving')}</p>
                  </div>
                  <div className="flex items-start">
                    <div className="h-5 w-5 rounded-full bg-github-blue/20 text-github-accent flex items-center justify-center mr-3 mt-1 text-xs">
                      ✓
                    </div>
                    <p className="text-sm">{t('skills.aiTraining')}</p>
                  </div>
                  <div className="flex items-start">
                    <div className="h-5 w-5 rounded-full bg-github-blue/20 text-github-accent flex items-center justify-center mr-3 mt-1 text-xs">
                      ✓
                    </div>
                    <p className="text-sm">{t('skills.dataScience')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;