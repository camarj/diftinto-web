import React, { Component } from "react";
import { FiLayers , FiMonitor , FiCopy, FiSmartphone,FiTrendingUp, FiTerminal,FiDatabase,FiActivity,FiCpu } from "react-icons/fi";

const ServiceList = [
    {
        icon: <FiSmartphone />,
        title: 'Responsive Design',
        description: 'Un sitio Web hoy se debe ver en todos los equipos y ser visitado de todos lados.',
        link:"/Responsive-Design"
    },
    {
        icon: <FiLayers />,
        title: 'Website Development',
        description: 'Creamos sitios Webs personalizados para ti, optimizando tiempos y costos.',
        link:"/website-development"
    },
    {
        icon: <FiActivity />,
        title: 'SEO',
        description: 'Desarrollos preparados para generar tráfico con optimización de buscadores.',
        link:"/Seo"
    },
    {
        icon: <FiMonitor />,
        title: 'Apps Development',
        description: 'WebApps HTML5, iOs, Android y/o WebApp/PWA. Lo que necesitas, DIFTINTO lo crea.',
        link:"/App-Development"
    },
    {
        icon: <FiTerminal />,
        title: 'Desarrollo de Software',
        description: 'Software de gestión comercial, operativa, administrativa, contable, entre otras. ',
        link:"/Desarrollo-Software"
    },
    {
        icon: <FiCopy />,
        title: 'Ultimas Tecnologías',
        description: 'En DIFTINTO encontrarás siempre la búsqueda constante de mejoras.',
        link:"/Ultimas-Tecnologias"
    },
    {
        icon: <FiTrendingUp />,
        title: 'Data Science',
        description: 'Mejorá tu organización, predecir tendencias y anticipate al comportamiento de tus clientes.',
        link:"/Data-Science"
    },
    {
        icon: <FiDatabase />,
        title: 'Analytics / Big Data',
        description: 'Capacidad analítica como ventaja competitiva: Hacia una organización con mejor IQ.',
        link:"/Analytics-BigData"
    },
    {
        icon: <FiCpu />,
        title: 'Artificial Intelligence',
        description: 'Convierte IA en parte integral de tu proceso de trabajo y verás más claramente sus beneficios.',
        link:"/Artificial-Intelligence"
    },
]

class ServiceCustom extends Component{
    render(){
        return(
            <React.Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-12 mt--30">
                            <div className="row service-main-wrapper">
                                {ServiceList.map( (val , i) => (
                                    <div className="col-lg-4 col-md-6 col-sm-6 col-12" key={i}>
                                        <a href={val.link}>
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
export default ServiceCustom;
