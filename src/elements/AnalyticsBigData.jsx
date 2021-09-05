import React from "react";
import {FiCheck } from "react-icons/fi";
import PageHelmet from "../component/common/Helmet";
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";
import Header from "../component/header/Header";
import Footer from "../component/footer/Footer";

import ServiceCustom from "./service/ServiceCustom";


const AnalyticsBigData  = () => {
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
                            <h2 className="title theme-gradient">Analytics / Big Data</h2>
                            <p>Nuestro clientes crecen con la ventaja competitiva de la analítica de datos.</p>
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
                                            <img className="w-100" src="/assets/images/service/analitycs-data1.png" alt="analitycs-data1"/>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-12">
                                        <div className="details mt_md--30 mt_sm--30">
                                            <div className="section-title">
                                                <span className="subtitle">Qué Hacemos. ANALISIS</span>
                                                <h2 className="title">Data</h2>
                                                <p className="description">Uno de los grandes retos del Big Data es la propia tecnología ya que el conjunto de datos a capturar, registrar, almacenar, analizar y, en última instancia, reportar, es tan grande y complejo que los medios tradicionales de procesamiento de datos resultan ineficaces.</p>
                                                <p className="description">En DIFTINTO te ofrecemos acceder a esa tecnología de manera sensilla, de la mano de nuestros expertos en el área, que te ayudará en la mejora de toma de decisiones, fidelizar clientes, mejorar estrategias de marketing y el acceso a la información y seguridad.</p>
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
                                                <span className="subtitle">Cómo lo hacemos. INSIGHTS</span>
                                                <h2 className="title">Discovery</h2>
                                                <p className="description">Contamos con un equipo especializado en Data Analytics, Business Intelligence y Big Data. Lideramos la transformación de las organizaciones para convertirlas en digital ecosystems.</p>
                                            </div>
                                            <ul className="list-style--1 mt--30">
                                                <li><FiCheck /> Extracción y recopilación de contenido de la web.</li>
                                                <li><FiCheck /> Sistemas de Recomendación.</li>
                                                <li><FiCheck /> Procesamiento y organización de datos.</li>
                                                <li><FiCheck /> Producción de Valor para la toma de decisiones.</li>
                                                <li><FiCheck /> Cloud Storage.</li>
                                                <li><FiCheck /> Migraciónes de datos a la Nube.</li>
                                                <li><FiCheck /> Protección y Seguridad.</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-12 mt_md--30 mt_sm--30">
                                        <div className="thumb position-relative">
                                            <img className="w-100" src="/assets/images/service/analitycs-data2.png" alt="analitycs-data2"/>
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

export default AnalyticsBigData
