import React from "react";
import { Link } from "react-router-dom";
import error from "../../assets/404Hero.png";
import "../cssPages/notfound404.css";

const notFound = () => {
    return (
        <section className="notFoundPage text-center">
            <img className="error-img mb-0" src={error} alt="error 404" />
            <div className="errorTextContainer">
                <h3>OOPSSS!! Nada delicioso fue encontrado aquí!</h3>

                <Link className="botonError" to="/home">
                    Volver al Inicio
                </Link>
            </div>
        </section>
    );
};

export default notFound;
