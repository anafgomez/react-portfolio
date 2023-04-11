import React from "react";
import "./services.css";

const Services = () => {

     return (
        <section className="services section" id="services">
            <h2 className="section__title">Serviços</h2>
            <span className="section__subtitle">O que posso oferecer</span>
            <div className="services__container container grid">
                <div className="services__content">
                    <div className="front-end">
                        <i className="uil uil-arrow services__icon"></i>
                        <h3 className="services__title">Front-End</h3>
                    </div>


                        <div className="services__modal-content">

                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Criação e manutenção de Websites.</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Criação de interfaces intuitivas e interativas.</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Trabalho pensado em metodologias ágeis e clean code.</p>
                                </li>
                            </ul>
                        </div>
                </div>

                <div className="services__content">
                    <div className="back-end">
                        <i className="uil uil-server-alt services__icon"></i>
                        <h3 className="services__title">Back-End</h3>
                    </div>

                    <div className="services-modal">
                        <div className="services__modal-content">

                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Criação de banco de dados.</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Criação de APIs.</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Estruturação e gerenciamento de conteúdos internos.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;