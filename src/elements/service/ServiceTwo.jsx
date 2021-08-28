import React, { Component } from "react";
import { FiCast , FiLayers , FiUsers , FiMonitor ,FiChevronUp, FiMail, FiCopy } from "react-icons/fi";

const ServiceList = [
    {
        icon: <FiCast />,
        title: 'Responsive Design',
        description: 'Un sitio Web hoy se debe ver en todos los equipos y ser visitado de todos lados.'
    },
    {
        icon: <FiLayers />,
        title: 'Website Development',
        description: 'Creamos sitios Webs personalizados para vos, optimizando tiempos y costos.'
    },
    {
        icon: <FiUsers />,
        title: 'SEO',
        description: 'Desarrollos preparados para generar tráfico con optimización de buscadores.'
    },
    {
        icon: <FiMonitor />,
        title: 'Apps Development',
        description: 'WebApps HTML5, iOs, Android y/o WebApp/PWA. Lo que necesitas, DIFTINTO lo crea.'
    },
    {
        icon: <FiMail />,
        title: 'Desarrollo de Software',
        description: 'Software de gestión comercial, operativa, administrativa, contable, entre otras. '
    },
    {
        icon: <FiCopy />,
        title: 'Ultimas Tecnologías',
        description: 'En DIFTINTO encontrarás siempre la búsqueda constante de mejoras.'
    },
    {
        icon: <FiMonitor />,
        title: 'Data Science',
        description: 'Mejorá tu organización, predecí tendencias y anticipate al comportamiento de tus clientes.'
    },
    {
        icon: <FiMail />,
        title: 'Analytics / Big Data',
        description: 'Capacidad analítica como ventaja competitiva: Hacia una organización con mejor IQ.'
    },
    {
        icon: <FiCopy />,
        title: 'Artificial Intelligence',
        description: 'Convertí IA en parte integral de tu proceso de trabajo y verás más claramente sus beneficios.'
    },
]

class ServiceTwo extends Component{
    render(){
        let title = 'Qué Podemos Hacer por tí',
        description = 'Tenemos amplia experiencia, ofreciendo soluciones tecnológicas de vanguardia, para muchos clientes internacionales dentro de una amplia gama de industrias,',
        subtitle= 'Qué Podemos Hacer por ti';
        return(
            <React.Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title text-center">
                                <span className="subtitle">{subtitle}</span>
                                <h2 className="title">{title}</h2>
                                <p className="description" dangerouslySetInnerHTML={{ __html: description }}></p>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-12 col-12 mt--30">
                            <div className="row service-main-wrapper">
                                {ServiceList.map( (val , i) => (
                                    <div className="col-lg-4 col-md-6 col-sm-6 col-12" key={i}>
                                        <a href="#">
                                            <div className="service service__style--2 text-left">
                                                <div className="icon">
                                                    {val.icon}
                                                </div>
                                                <div className="content">
                                                    <h3 className="title">{val.title}</h3>
                                                    <p>{val.description}</p>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
export default ServiceTwo;
