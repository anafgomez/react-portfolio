import React, { useState } from "react";
import "./qualification.css";

const Qualification = () => {

    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };

    return (
        <section className="qualification__section">
            <h2 className="section__title">Qualificações</h2>
            <span className="section__subtitle">Jornada Pessoal</span>

            <div className="qualification__container container">
                <div className="qualification__tabs">
                    <div className={toggleState === 1 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"} onClick={ () => toggleTab(1)}>
                        <i className="uil uil-graduation-cap qualification__icon"></i> Educação
                    </div>

                    <div className={toggleState === 2 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"} onClick={ () => toggleTab(2)}>
                        <i className="uil uil-briefcase-alt qualification__icon"></i> Trabalho
                    </div>
                </div>
                <div className="qualification__sections">
                    <div className={toggleState === 1 ? "qualification__content qualification__content-active" : "qualification__content"}>
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Ciências Sociais</h3>
                                <span className="qualification__subtitle">UFSCar - São Carlos</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i> 2017 - 2023
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h3 className="qualification__title">Desenvolvimento Web Fullstack</h3>
                                <span className="qualification__subtitle">Labenu</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i> 2021 - 2022
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className={toggleState === 2 ? "qualification__content qualification__content-active" : "qualification__content"}>
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Desenvolvedora Júnior</h3>
                                <span className="qualification__subtitle">Grupo DNA - São Carlos</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i> Jun 2022 - Nov 2022
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h3 className="qualification__title">Desenvolvedora Júnior</h3>
                                <span className="qualification__subtitle">CADS Consultoria - Maricá</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i> Dez 2022 - Jan 2023
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Qualification