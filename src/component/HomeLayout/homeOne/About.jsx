import React, { Component } from "react";
import { FiSend } from "react-icons/fi";

import { Link } from 'react-router-dom';
class About extends Component{
    render(){
        let title = 'Empresa Creativa Distinta y Diferente.',
        description = 'DIFTINTO es una empresa de Diseño y Desarrollo de Páginas Webs, Aplicaciones Móviles y Software a Medida, Soluciones Digitales con Analítica de Datos, Inteligencia Artificial, Machine Learning, Deep Learning y Big Data.',
        description2 = ' DIFTINTO evoca la unión de dos palabras: Distinto y Diferente. La distinción y la diferencia se suceden una a la otra. Ser diferentes es la esencia de DIFTINTO que no busca más que... alcanzar las estrellas.';

        return(
            <React.Fragment>
                <div className="about-wrapper">
                    <div className="container">
                        <div className="row row--35 align-items-center">
                            <div className="col-lg-5 col-md-12">
                                <div className="thumbnail">
                                    <img className="w-100" src="/assets/images/about.png" alt="About Images"/>
                                </div>
                            </div>
                            <div className="col-lg-7 col-md-12">
                                <div className="about-inner inner">
                                    <div className="section-title">
                                        <div className="icon">
                                            <FiSend />
                                        </div>
                                        <h2 className="title">{title}</h2>
                                        <p className="description">{description}</p>
                                        <p className="description">{description2}</p>
                                        <div className="purchase-btn">
                                            <Link className="btn-transparent" to="/contact">Contacto con DIFTINTO</Link>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
export default About;