import React, { useState } from 'react';
import './Qualificacoes.css';

interface Qualification {
  title: string;
  institution: string;
  period: string;
  description?: string;
  technologies?: string[];
}

const Qualificacoes: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'education' | 'work'>('education');

  const education: Qualification[] = [
    {
      title: 'Bacharel em Ciências Sociais',
      institution: 'UFSCar - Universidade Federal de São Carlos',
      period: '2017 - 2024',
      description: 'Formação que proporcionou uma visão humanizada e analítica, essencial para entender as necessidades dos usuários e criar soluções centradas no ser humano.'
    },
    {
      title: 'Bootcamp Desenvolvedor Web FullStack',
      institution: 'Labenu',
      period: '2021 - 2022',
      description: 'Programa intensivo com foco em JavaScript, React, Node.js, TypeScript e metodologias ágeis. Desenvolvimento de projetos práticos e colaborativos.',
      technologies: ['JavaScript', 'React', 'Node.js', 'TypeScript', 'Git']
    },
    {
      title: 'Cursos de Especialização',
      institution: 'Diversas plataformas, entre elas: Twilio, Google Cloud, Desec, DSA) ',
      period: '2022 - Presente',
      description: 'Formação contínua em tecnologias emergentes e melhores práticas de desenvolvimento.',
      technologies: ['IA', 'API REST', 'Twilio', 'LLM', 'Pentest', 'Data Science']
    }
  ];

  const work: Qualification[] = [
    {
      title: 'Twilio Developer',
      institution: 'Athan',
      period: '08/2024 - 08/2025',
      description: 'Desenvolvimento e manutenção de fluxos automatizados utilizando Twilio Studio Flow, Flex e TaskRouter. Integração de APIs REST e implementação de Clean Code seguindo princípios SOLID.',
      technologies: ['Twilio', 'JavaScript', 'API REST', 'Clean Code', 'SOLID']
    },
    {
      title: 'Instrutora de Robótica',
      institution: 'Suprema Educacional',
      period: '07/2024 - 08/2024',
      description: 'Ministração de aulas de robótica para crianças e adolescentes, focando em programação básica e desenvolvimento de projetos práticos.',
      technologies: ['Programação Básica', 'Robótica', 'Educação Tecnológica']
    },
    {
      title: 'Instrutora de Informática',
      institution: 'Sette Modi',
      period: '05/2024 - 06/2024',
      description: 'Ensino de ferramentas básicas de informática e introdução à programação para diferentes faixas etárias.',
      technologies: ['Word', 'PowerPoint', 'Excel', 'HTML', 'CSS', 'Figma']
    },
    {
      title: 'Auxiliar de Auditoria',
      institution: 'PwC Brasil',
      period: '09/2023 - 08/2024',
      description: 'Validação de dados e organização de informações sensíveis para auditorias, garantindo conformidade e confidencialidade.',
      technologies: ['Análise de Dados', 'Excel', 'PowerPoint', 'Organização']
    },
    {
      title: 'Desenvolvedora Júnior',
      institution: 'CADS Consultoria',
      period: '12/2022 - 02/2023',
      description: 'Manutenção e desenvolvimento de novas funcionalidades para o site da Prefeitura de Maricá-RJ, utilizando Java, PHP e ferramentas low-code.',
      technologies: ['Java', 'PHP', 'Low-code', 'WordPress']
    },
    {
      title: 'Desenvolvedora Júnior',
      institution: 'DNA Consult',
      period: '10/2022 - 06/2022',
      description: 'Suporte técnico e desenvolvimento de soluções automatizadas para processos internos utilizando Python. Trabalho em equipe multidisciplinar.',
      technologies: ['Python', 'Automação', 'Suporte Técnico', 'Trabalho em Equipe']
    }
  ];

  return (
    <section className="qualificacoes">
      <div className="qualificacoes-container">
        <div className="section-header">
          <h2>Qualificações</h2>
          <p>Minha Jornada Profissional</p>
        </div>

        <div className="qualificacoes-content">
          <div className="tabs">
            <button 
              className={`tab ${activeTab === 'education' ? 'active' : ''}`}
              onClick={() => setActiveTab('education')}
            >
              <i className="fas fa-graduation-cap"></i>
              Educação
            </button>
            <button 
              className={`tab ${activeTab === 'work' ? 'active' : ''}`}
              onClick={() => setActiveTab('work')}
            >
              <i className="fas fa-briefcase"></i>
              Experiência
            </button>
          </div>

          <div className="timeline">
            {activeTab === 'education' ? (
              <div className="timeline-items">
                {education.map((item, index) => (
                  <div key={index} className="timeline-item">
                    <div className="timeline-content">
                      <div className="timeline-header">
                        <h3>{item.title}</h3>
                        <span className="timeline-badge">
                          <i className="fas fa-graduation-cap"></i>
                        </span>
                      </div>
                      <p className="institution">{item.institution}</p>
                      <p className="period">{item.period}</p>
                      {item.description && (
                        <p className="description">{item.description}</p>
                      )}
                      {item.technologies && (
                        <div className="technologies">
                          {item.technologies.map((tech, techIndex) => (
                            <span key={techIndex} className="tech-tag">{tech}</span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="timeline-items">
                {work.map((item, index) => (
                  <div key={index} className="timeline-item">
                    <div className="timeline-content">
                      <div className="timeline-header">
                        <h3>{item.title}</h3>
                        <span className="timeline-badge">
                          <i className="fas fa-briefcase"></i>
                        </span>
                      </div>
                      <p className="institution">{item.institution}</p>
                      <p className="period">{item.period}</p>
                      {item.description && (
                        <p className="description">{item.description}</p>
                      )}
                      {item.technologies && (
                        <div className="technologies">
                          {item.technologies.map((tech, techIndex) => (
                            <span key={techIndex} className="tech-tag">{tech}</span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualificacoes;
