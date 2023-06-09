import React from "react";

const Backend = () => {
    return (
        <div className="skills__content">
            <h3 className="skills__title">Backend</h3>

            <div className="skills__box">
                <div className="skills__group">
                    <div className="skills__data">
                    <i class='bx bx-badge-check'></i>

                    <div>
                        <h3 className="skills__name">SQL</h3>
                        <span className="skills__level">Básico</span>
                    </div>
                    </div>

                    <div className="skills__data">
                    <i class='bx bx-badge-check'></i>

                    <div>
                        <h3 className="skills__name">NodeJS</h3>
                        <span className="skills__level">Intermediário</span>
                    </div>
                    </div>

                    <div className="skills__data">
                    <i class='bx bx-badge-check'></i>

                    <div>
                        <h3 className="skills__name">Python</h3>
                        <span className="skills__level">Básico</span>
                    </div>
                    </div>
    
                </div>

                <div className="skills__group">
                    <div className="skills__data">
                    <i class='bx bx-badge-check'></i>

                    <div>
                        <h3 className="skills__name">Typescript</h3>
                        <span className="skills__level">Intermediário</span>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Backend