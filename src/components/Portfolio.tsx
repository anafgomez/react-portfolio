import React from 'react';
import './Portfolio.css';

interface Project {
  title: string;
  description: string;
  image: string;
  link: string;
  technologies: string[];
}

const Portfolio: React.FC = () => {
  const projects: Project[] = [
    {
      title: 'Landing Page',
      description: 'Aplicação de landing page criada para um supermercado delivery (fictício).',
      image: '/project1.jpg',
      link: '#',
      technologies: ['HTML', 'CSS', 'JavaScript']
    },
    {
      title: 'Pokédex API',
      description: 'Aplicação de um site de pokémons que são adicionados ou removidos da Pokédex. Foi consumida uma API específica de pokémons.',
      image: '/project2.jpg',
      link: '#',
      technologies: ['React', 'API', 'JavaScript']
    },
    {
      title: 'Website',
      description: 'Aplicação de website criada para uma empresa médica (fictícia).',
      image: '/project3.jpg',
      link: '#',
      technologies: ['HTML', 'CSS', 'JavaScript']
    }
  ];

  return (
    <section id="portfolio" className="portfolio">
      <div className="portfolio-container">
        <div className="section-header">
          <h2>Portfólio</h2>
          <p>Trabalhos Recentes</p>
        </div>

        <div className="portfolio-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image">
                <div className="image-placeholder">
                  <span>{project.title}</span>
                </div>
                <div className="project-overlay">
                  <button className="view-project-btn">Veja mais</button>
                </div>
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-technologies">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
