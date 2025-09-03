import React from 'react';
import './Skills.css';

interface Skill {
  name: string;
  percentage: number;
  icon?: string;
}

const Skills: React.FC = () => {
  const frontendSkills: Skill[] = [
    { name: 'HTML5', percentage: 90, icon: 'fab fa-html5' },
    { name: 'CSS3', percentage: 85, icon: 'fab fa-css3-alt' },
    { name: 'JavaScript', percentage: 75, icon: 'fab fa-js-square' },
    { name: 'React', percentage: 65, icon: 'fab fa-react' },
    { name: 'TypeScript', percentage: 65, icon: 'fas fa-code' },
    { name: 'Figma', percentage: 65, icon: 'fab fa-figma' }
  ];

  const backendSkills: Skill[] = [
    { name: 'Node.js', percentage: 50, icon: 'fab fa-node-js' },
    { name: 'Python', percentage: 50, icon: 'fab fa-python' },
    { name: 'API REST', percentage: 70, icon: 'fas fa-server' },
    { name: 'SQL', percentage: 50, icon: 'fas fa-database' },
    { name: 'Java', percentage: 30, icon: 'fab fa-java' },
    { name: 'PHP', percentage: 30, icon: 'fab fa-php' }
  ];

  const toolsSkills: Skill[] = [
    { name: 'Git & GitHub', percentage: 85, icon: 'fab fa-github' },
    { name: 'Twilio', percentage: 60, icon: 'fas fa-phone' },
    { name: 'Clean Code', percentage: 75, icon: 'fas fa-code' },
    { name: 'SOLID', percentage: 70, icon: 'fas fa-cube' },
    { name: 'WordPress', percentage: 40, icon: 'fab fa-wordpress' },
    { name: 'Excel', percentage: 50, icon: 'fas fa-table' }
  ];

  const softSkills: Skill[] = [
    { name: 'Trabalho em Equipe', percentage: 90, icon: 'fas fa-users' },
    { name: 'Comunicação', percentage: 85, icon: 'fas fa-comments' },
    { name: 'Resolução de Problemas', percentage: 80, icon: 'fas fa-lightbulb' },
    { name: 'Organização', percentage: 85, icon: 'fas fa-tasks' },
    { name: 'Aprendizado Contínuo', percentage: 90, icon: 'fas fa-graduation-cap' },
    { name: 'Pensamento Crítico', percentage: 80, icon: 'fas fa-brain' }
  ];

  return (
    <section id="skills" className="skills">
      <div className="skills-container">
        <div className="section-header">
          <h2>Habilidades</h2>
          <p>Competências Técnicas e Comportamentais</p>
        </div>

        <div className="skills-content">
          <div className="skills-category">
            <h3>Frontend</h3>
            <p>Desenvolvimento de interfaces responsivas e interativas com foco na experiência do usuário</p>
            
            <div className="skills-list">
              {frontendSkills.map((skill, index) => (
                <div key={index} className="skill-item">
                  <div className="skill-header">
                    <div className="skill-info">
                      {skill.icon && <i className={skill.icon}></i>}
                      <span className="skill-name">{skill.name}</span>
                    </div>
                    <span className="skill-percentage">{skill.percentage}%</span>
                  </div>
                  <div className="skill-bar">
                    <div 
                      className="skill-progress" 
                      style={{ width: `${skill.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="skills-category">
            <h3>Backend</h3>
            <p>Criação de APIs, automação de processos e desenvolvimento de sistemas robustos</p>
            
            <div className="skills-list">
              {backendSkills.map((skill, index) => (
                <div key={index} className="skill-item">
                  <div className="skill-header">
                    <div className="skill-info">
                      {skill.icon && <i className={skill.icon}></i>}
                      <span className="skill-name">{skill.name}</span>
                    </div>
                    <span className="skill-percentage">{skill.percentage}%</span>
                  </div>
                  <div className="skill-bar">
                    <div 
                      className="skill-progress" 
                      style={{ width: `${skill.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="skills-category">
            <h3>Ferramentas & Metodologias</h3>
            <p>Ferramentas essenciais e metodologias para desenvolvimento profissional</p>
            
            <div className="skills-list">
              {toolsSkills.map((skill, index) => (
                <div key={index} className="skill-item">
                  <div className="skill-header">
                    <div className="skill-info">
                      {skill.icon && <i className={skill.icon}></i>}
                      <span className="skill-name">{skill.name}</span>
                    </div>
                    <span className="skill-percentage">{skill.percentage}%</span>
                  </div>
                  <div className="skill-bar">
                    <div 
                      className="skill-progress" 
                      style={{ width: `${skill.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="skills-category">
            <h3>Soft Skills</h3>
            <p>Habilidades interpessoais e comportamentais que complementam o conhecimento técnico</p>
            
            <div className="skills-list">
              {softSkills.map((skill, index) => (
                <div key={index} className="skill-item">
                  <div className="skill-header">
                    <div className="skill-info">
                      {skill.icon && <i className={skill.icon}></i>}
                      <span className="skill-name">{skill.name}</span>
                    </div>
                    <span className="skill-percentage">{skill.percentage}%</span>
                  </div>
                  <div className="skill-bar">
                    <div 
                      className="skill-progress" 
                      style={{ width: `${skill.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
