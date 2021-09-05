import React from "react";
import {FiCheck } from "react-icons/fi";
import PageHelmet from "../component/common/Helmet";
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";
import Header from "../component/header/Header";
import Footer from "../component/footer/Footer";

import ServiceCustom from "./service/ServiceCustom";


const ResponsiveDesign  = () => {
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
                            <h2 className="title theme-gradient">Responsive Design</h2>
                            <p>El Diseño trasciende las ideologías. Desarrollamos y creamos arte para Tí.</p>
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
                                            <img className="w-100" src="/assets/images/service/responsive-design1.png" alt="Responsive 1"/>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-12">
                                        <div className="details mt_md--30 mt_sm--30">
                                            <div className="section-title">
                                                <span className="subtitle">Qué Hacemos. EFICIENCIA</span>
                                                <h2 className="title">Ideas que se ven</h2>
                                                <p className="description">El diseño web responsive se consolida como una de las mejores prácticas hoy en día en diseño web. La web responsive es considerada hoy en día la mejor práctica posible en el diseño web, y en DIFTINTO te enseñamos y trabajamos en los puntos que debes tener en cuenta a la hora de tener tu web responsive</p>
                                                <p className="description">El diseño responsive permite reducir el tiempo de desarrollo, evita los contenidos duplicados, y aumenta la viralidad de los contenidos ya que permite compartirlos de una forma mucho más rápida y natural.</p>
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
                                                <span className="subtitle">Cómo lo hacemos. RESULTADOS</span>
                                                <h2 className="title">Experiencia UX/UI</h2>
                                                <p className="description">Tu sitio web direccionará a los usuarios de la manera correcta por la interfaz, logrando que ellos tomen las acciones correctas con la usabilidad adecuada. En DIFTINTO sabemos como lograr que ese canal de ventas o producto cumpla con los objetivos del negocio o proyecto con usabilidad amigable.</p>
                                            </div>
                                            <ul className="list-style--1 mt--30">
                                                <li><FiCheck /> Generación de alto valor para el público.</li>
                                                <li><FiCheck /> Altas posibilidades de retener y encantar a los usuarios.</li>
                                                <li><FiCheck /> Fortalecimiento de la marca.</li>
                                                <li><FiCheck /> Aumento de conversiones.</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-12 mt_md--30 mt_sm--30">
                                        <div className="thumb position-relative">
                                            <img className="w-100" src="/assets/images/service/responsive-design2.png" alt="Responsive2"/>
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

export default ResponsiveDesign 
