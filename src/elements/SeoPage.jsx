import React from "react";
import {FiCheck } from "react-icons/fi";
import PageHelmet from "../component/common/Helmet";
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";
import Header from "../component/header/Header";
import Footer from "../component/footer/Footer";

import ServiceCustom from "./service/ServiceCustom";


const SeoPage  = () => {
    return (

        <>          
        {/* Start Pagehelmet  */}
        <PageHelmet pageTitle='Service Details' />
        {/* End Pagehelmet  */}

        <Header headertransparent="header--transparent" colorblack="color--black" logoname="logo.png" />

        {/* Start Breadcrump Area */}
        <div className="rn-page-title-area pt--120 pb--190"   data-black-overlay="9">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="rn-page-title text-center pt--100">
                            <h2 className="title theme-gradient">SEO</h2>
                            <p>“El tiempo pone a cada uno en su lugar, y si haces SEO, un poco más arriba.”</p>
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
                                            <img className="w-100" src="/assets/images/service/SEO1.png" alt="SEO1"/>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-12">
                                        <div className="details mt_md--30 mt_sm--30">
                                            <div className="section-title">
                                                <span className="subtitle">Qué Hacemos. CALIDAD</span>
                                                <h2 className="title">Optimización</h2>
                                                <p className="description">Abordamos la programación de nuestros diseños de modo que luzcan bien tanto para las personas, como para los motores de búsqueda como Google. Esto contribuye sustancialmente a que tú página obtenga mejores posiciones en los resultados de búsqueda.</p>
                                                <p className="description">Obtener resultados comerciales a través de su web es el principal objetivo de una correcta estrategia online.</p>
                                                <p className="description">Por ello, llevamos adelante nuestro proceso de diseño web haciendo especial foco en aspectos de marketing y experiencia de usuario.</p>
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
                                                <span className="subtitle">Cómo lo hacemos. EFECTIVIDAD</span>
                                                <h2 className="title">Resultados</h2>
                                                <p className="description">La estructura y la programación de los sitios web que realizamos contempla una correcta distribución y utilización de código específico para lograr un óptimo posicionamiento en los más reconocidos buscadores ( google, yahoo, bing, etc ) y la implementación de un diseño responsive.</p>
                                            </div>
                                            <ul className="list-style--1 mt--30">
                                                <li><FiCheck /> Aumenta la visibilidad de una marca</li>
                                                <li><FiCheck /> Atrae tráfico cualificado</li>
                                                <li><FiCheck /> Genera oportunidades de ventas</li>
                                                <li><FiCheck /> Posiciona a una marca como autoridad en el mercado</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-12 mt_md--30 mt_sm--30">
                                        <div className="thumb position-relative">
                                            <img className="w-100" src="/assets/images/service/SEO2.png" alt="SEO2"/>
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

export default SeoPage
