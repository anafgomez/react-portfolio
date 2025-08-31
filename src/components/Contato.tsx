import React, { useState } from 'react';
import './Contato.css';

interface ContactInfo {
  type: string;
  value: string;
  icon: string;
}

const Contato: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    project: '',
    message: ''
  });

  const contactInfo: ContactInfo[] = [
    {
      type: 'WhatsApp',
      value: '(16) 99452-8229',
      icon: '📱'
    },
    {
      type: 'Email',
      value: 'csoanaufscar@outlook.com',
      icon: '✉️'
    },
    {
      type: 'Localização',
      value: 'São Carlos - SP',
      icon: '📍'
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica para enviar o formulário
    console.log('Formulário enviado:', formData);
    alert('Mensagem enviada com sucesso!');
    setFormData({ name: '', email: '', project: '', message: '' });
  };

  return (
    <section id="contato" className="contato">
      <div className="contato-container">
        <div className="section-header">
          <h2>Contato</h2>
          <p>Entre em contato</p>
        </div>

        <div className="contato-content">
          <div className="contact-info">
            <h3>Informações de Contato</h3>
            <div className="contact-list">
              {contactInfo.map((info, index) => (
                <div key={index} className="contact-item">
                  <div className="contact-icon">
                    <span>{info.icon}</span>
                  </div>
                  <div className="contact-details">
                    <h4>{info.type}</h4>
                    <p>{info.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="contact-form">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Nome"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <input
                  type="text"
                  name="project"
                  placeholder="Projeto"
                  value={formData.project}
                  onChange={handleInputChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="Mensagem"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                ></textarea>
              </div>
              
              <button type="submit" className="submit-btn">
                Mandar mensagem
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contato;
