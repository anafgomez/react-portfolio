import React from "react";
import "./qualification.css";

const Qualification = () => {
    return (
        <section className="qualification section">
            <h2 className="section title">Qualificações</h2>
            <span className="section subtitle">Jornada Pessoal</span>

            <div className="qualification__container container">
                <div className="qualification__tabs">
                    <div className="qualification__button qualification__active button--flex">
                        <i className="uil uil-graduation-cap qualification__icon"></i> Educação
                    </div>

                    <div className="qualification__button button--flex">
                        <i className="uil uil-briefcase-alt qualification__icon"></i> Trabalho
                    </div>
                </div>
                <div className="qualification__sections">
                    <div className="qualification__content">
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title"></h3>
                                <span className="qualification__subtitle">UFSCar - São Carlos</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i> 2017 - 2023
                                </div>
                            </div>
                            <div>
                            <span className="qualification__rounder"></span>
                            <div className="qualification__line"></div>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title"></h3>
                                <span className="qualification__subtitle">UFSCar - São Carlos</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i> 2017 - 2023
                                </div>
                            </div>
                            <div>
                            <span className="qualification__rounder"></span>
                            <div className="qualification__line"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Qualification