import React from "react";
import {FiCheck } from "react-icons/fi";
import PageHelmet from "../component/common/Helmet";
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";
import Header from "../component/header/Header";
import Footer from "../component/footer/Footer";

import ServiceCustom from "./service/ServiceCustom";


const DesarrolloSoftware  = () => {
    return (

        <>          
        {/* Start Pagehelmet  */}
        <PageHelmet pageTitle='Desarrollo de Software' />
        {/* End Pagehelmet  */}

        <Header headertransparent="header--transparent" colorblack="color--black" logoname="logo.png" />

        {/* Start Breadcrump Area */}
        <div className="rn-page-title-area pt--120 pb--190"   data-black-overlay="9">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="rn-page-title text-center pt--100">
                            <h2 className="title theme-gradient">Desarrollo de Software</h2>
                            <p>En DIFTINTO ofrecemos ingeniería, innovación y diseno. Creamos software que conecta.</p>
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
                                            <img className="w-100" src="/assets/images/service/dev-software1.png" alt="dev-software1"/>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-12">
                                        <div className="details mt_md--30 mt_sm--30">
                                            <div className="section-title">
                                                <span className="subtitle">Qué Hacemos. INNOVACION</span>
                                                <h2 className="title">Ingeniería</h2>
                                                <p className="description">En DIFTINTO utilizamos lás últimas tecnologías en el campo digital para transformar las organizaciones en todos los aspectos. </p>
                                                <p className="description">Estamos aquí para ayudarte a crear y mantener un modelo comercial que permitirá una nueva era de crecimiento y escalabilidad para tu organización, realizando cuidadosos análisis comerciales y definiendo caminos viables para un futuro audaz. Ofrecemos asesoría y consultoría de diseño, adaptación, desarrollo e integración de arquitecturas y software orientadas a tu core de negocio.</p>
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
                                                <span className="subtitle">Cómo lo hacemos. REINVENCION</span>
                                                <h2 className="title">Trasciende</h2>
                                                <p className="description">Nuestro departamento de Ingeniería creará el software diseñado de forma inteligente para reinventar aspectos clave de las organizaciones, creando un camino a seguir de formas jamás pensadas.</p>
                                                <p className="description">Los sitios que realizamos son compatibles para todos los navegadores y todas las plataformas. Tus paginas web se verán de manera correcta, con un diseño único y se adaptará a la plataforma en la que se visualice ya sea un smartphone, tablet o ultrabook.</p>
                                            </div>
                                            <ul className="list-style--1 mt--30">
                                                <li><FiCheck /> Soluciones TI para el control y aseguramiento de calidad en los procesos y proyectos de acuerdo con los parámetros requeridos.</li>
                                                <li><FiCheck /> Arquitectura de Software Customizable.</li>
                                                <li><FiCheck /> Diseño e implementación de bases de datos MS-SQL, MySQL, PostgreSQL, Access y mucho más.</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-12 mt_md--30 mt_sm--30">
                                        <div className="thumb position-relative">
                                            <img className="w-100" src="/assets/images/service/dev-software2.png" alt="dev-software2"/>
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

export default DesarrolloSoftware
