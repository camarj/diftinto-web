import React from "react";
import {FiCheck } from "react-icons/fi";
import PageHelmet from "../component/common/Helmet";
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";
import Header from "../component/header/Header";
import Footer from "../component/footer/Footer";

import ServiceCustom from "./service/ServiceCustom";


const ArtificialIntelligence = () => {
    return (

        <>          
        {/* Start Pagehelmet  */}
        <PageHelmet pageTitle='Artificial Intelligence' />
        {/* End Pagehelmet  */}

        <Header headertransparent="header--transparent" colorblack="color--black" logoname="logo.png" />

        {/* Start Breadcrump Area */}
        <div className="rn-page-title-area pt--120 pb--190"   data-black-overlay="9">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="rn-page-title text-center pt--100">
                            <h2 className="title theme-gradient">Artificial Intelligence</h2>
                            <p>DIFTINTO convierte IA en parte integral de tu proceso de trabajo y negocio.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* End Breadcrump Area */}

        {/* Start Page Wrapper */}
        <div className="rn-service-details ptb--120 bg_color--1">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="service-details-inner">
                            <div className="inner">
                                {/* Start Single Area */}
                                <div className="row row--35 sercice-details-content align-items-center">
                                    <div className="col-lg-6 col-12">
                                        <div className="thumb position-relative">
                                            <img className="w-100" src="/assets/images/service/AI1.png" alt="AI1"/>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-12">
                                        <div className="details mt_md--30 mt_sm--30">
                                            <div className="section-title">
                                                <span className="subtitle">Qué Hacemos. TRANSFORMACION</span>
                                                <h2 className="title">Automatización</h2>
                                                <p className="description">Revolucionamos completamente las empresas para su mejor funcionamiento. Convertí IA en parte integral de tu proceso de trabajo y verás más claramente sus beneficios. Al automatizar tareas, podrás liberar al capital humano para enfocarlo en aspectos más relevantes del proceso productivo.</p>
                                                <p className="description">DIFTINTO cuenta con especialistas en AI que crean sistemas capaces de aprender en forma automática e identificar patrones complejos en millones de datos, prediciendo comportamientos futuros. </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* End Single Area */}

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* End Page Wrapper */}

        {/* Start Page Wrapper */}
        <div className="rn-service-details ptb--120 bg_color--5">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="service-details-inner">
                            <div className="inner">
                                {/* Start Single Area */}
                                <div className="row row--35 sercice-details-content align-items-center">
                                    <div className="col-lg-6 col-12">
                                        <div className="details">
                                            <div className="section-title">
                                                <span className="subtitle">Cómo lo hacemos. EVOLUCION</span>
                                                <h2 className="title">Optimización</h2>
                                                <p className="description">Liderá la transformación digital de tu empresa y poné la innovación al servicio de tu negocio. Registramos, almacenamos, interpretamos e interrelacionamos grandes volúmenes de información. Mejorá tu organización interna, predecí tendencias a futuro y anticipate al comportamiento de tus clientes.</p>
                                            </div>
                                            <ul className="list-style--1 mt--30">
                                                <li><FiCheck /> Sistemas de análisis de texto.</li>
                                                <li><FiCheck /> Procesamiento de Datos.</li>
                                                <li><FiCheck /> Procesamiento de Imágenes.</li>
                                                <li><FiCheck /> Industrias: Telcos, Fintech, Entretenimiento, Publicitarias, Ventas y E-Commerce, entre otras.</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-12 mt_md--30 mt_sm--30">
                                        <div className="thumb position-relative">
                                            <img className="w-100" src="/assets/images/service/AI2.png" alt="AI2"/>
                                        </div>
                                    </div>
                                </div>
                                {/* End Single Area */}

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* End Page Wrapper */}
        {/* Start Service Area  */} 
        <div id="service-section" className="service-area ptb--120 active-dark">
            <div className="container">
                <ServiceCustom />
            </div>
        </div>
        {/* End Service Area  */}        
        {/* Start Back To Top */}
        <div className="backto-top">
            <ScrollToTop showUnder={160}>
                <FiChevronUp />
            </ScrollToTop>
        </div>
        {/* End Back To Top */}
        {/* Start Finding Us Area  */}
        <div className="rn-finding-us-area attacment-fixed rn-finding-us ptb--120 bg_color--1 bg_image bg_image--18" data-black-overlay="5">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 offset-lg-2">
                        <div className="inner">
                            <div className="content-wrapper">
                                <div className="content">
                                    <h4 className="theme-gradient">Contacta con DIFTINTO</h4>
                                    <p>Años de experiencia, profesionales de élite y muchos proyectos exitosos, esperan entusiasmados poder ayudarte a concretar tus deseos y productos digitales.</p>
                                    <a className="btn-default" href="/contact">Contacto</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* End Finding Us Area  */}
        
        <Footer />

    </>
    )
}

export default ArtificialIntelligence
