import React from 'react';
import './Servicos.css';

interface Service {
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  icon: string;
}

const Servicos: React.FC = () => {
  const services: Service[] = [
    {
      title: 'Front End',
      subtitle: 'Desenvolvedora Front End',
      description: 'Criação e manutenção de Websites.',
      features: [
        'Criação e manutenção de Websites.',
        'Criação de interfaces intuitivas e interativas.',
        'Trabalho pensado em metodologias ágeis e clean code.'
      ],
      icon: '💻'
    },
    {
      title: 'Back End',
      subtitle: 'Desenvolvedora Back End',
      description: 'Criação de banco de dados.',
      features: [
        'Criação de banco de dados.',
        'Criação de APIs.',
        'Estruturação e gerenciamento de conteúdos internos.'
      ],
      icon: '⚙️'
    }
  ];

  return (
    <section id="servicos" className="servicos">
      <div className="servicos-container">
        <div className="section-header">
          <h2>Serviços</h2>
          <p>O que posso oferecer</p>
        </div>

        <div className="servicos-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">
                <span>{service.icon}</span>
              </div>
              <h3>{service.title}</h3>
              <h4>{service.subtitle}</h4>
              <ul className="service-features">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex}>{feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Servicos;
