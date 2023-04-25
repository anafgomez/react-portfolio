import React from "react";
import "./footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container container">
                <h1 className="footer__title">Ana Gomez</h1>

                <ul className="footer__list">
                    <li>
                        <a href="#sobre" className="footer__link">Sobre</a>
                    </li>

                    <li>
                        <a href="#portfolio" className="footer__link">Projetos</a>
                    </li>

                    <li>
                        <a href="#contact" className="footer__link">Contato</a>
                    </li>
                </ul>

                <div className="footer__social">
                    <a href="https://github.com/anafgomez" className="footer__social-link" target="_blank"><i class="uil uil-github"></i></a>

                    <a href="https://www.linkedin.com/in/ana-flávia-gomez/" className="footer__social-link" target="_blank"><i class="uil uil-linkedin"></i></a>
                </div>

                <span className="footer__copy">&#169; Ana Gomez. Todos os direitos reservados</span>
            </div>
        </footer>
    )
}

export default Footer