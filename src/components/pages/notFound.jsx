import React from "react";
import { Link } from "react-router-dom";
import error from "../../assets/404Hero.png";
import "../cssPages/notfound404.css";

const notFound = () => {
    return (
        <section className="text-center mb-4">
            <img className="error-img" src={error} alt="error 404" />
            <div>
                <h3>OOPSSS!! Nada delicioso fue encontrado aquí!</h3>
                <div className="d-inline-block">
                    <Link
                        className="boton btn text-black btn-outline-light nav-link"
                        to="/home"
                    >
                        Volver al Inicio
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default notFound;
