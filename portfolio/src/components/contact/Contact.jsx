import React from "react";
import "./contact.css";

const Contact = () => {
    return (
        <section className="contact section" id="contact">
            <h2 className="section__title">Contato</h2>
            <span className="section__subtitle">Entre em contato</span>

            <div className="contact__box">
                <div className="contact__group">
                    <div className="contact__data">
                    <i class='uil uil-envelope-alt contact__modal-icon'></i>

                    <div>
                        <h3 className="contact__name">Email</h3>
                        <span className="contact__item">csoanaufscar@outlook.com</span>
                    </div>
                    </div>

                    <div className="contact__data">
                    <i class='uil uil-phone-alt contact__modal-icon'></i>

                    <div>
                        <h3 className="contact__name">WhatsApp</h3>
                        <span className="contact__item">(16) 9 9452-8229</span>
                    </div>
                    </div>

                    <div className="contact__data">
                    <i class='uil uil-location-pin-alt contact__modal-icon'></i>

                    <div>
                        <h3 className="contact__name">Localização</h3>
                        <span className="contact__item">São Carlos - SP</span>
                    </div>
                    </div>
    
                </div>
            </div>
        </section>
    )
}

export default Contact 