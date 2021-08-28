import React, { Component } from "react";
import { FiActivity, FiCast, FiMap } from "react-icons/fi";


const ServiceList = [
    {
        icon: <FiActivity />,
        title: 'Escuchamos',
        description: 'En @DIFTINTO el protagonista eres tú.Nuestra forma de trabajo consiste primero en escuchar lo que quieres.'
    },
    {
        icon: <FiCast />,
        title: 'Pensamos',
        description: 'Nuestros anos de experiencia y muchos proyectos exitosos, nos permitirán sugerirte y recomendarte el mejor producto para ti.'
    },
    {
        icon: <FiMap />,
        title: 'Entregamos',
        description: 'Nuestro proceso creativo se materializará en la entrega del producto, de manera profesional, responsable y a tiempo.'
    },
]
class ServiceOne extends Component{
    render(){
        return(
            <React.Fragment>
                <div className="row row--25">
                    {ServiceList.map( (val , i) => (
                        <div className="col-lg-4 col-md-6 col-sm-6 col-12" key={i}>
                            <div className="service service__style--1">
                                <div className="icon">
                                    {val.icon}
                                </div>
                                <div className="content">
                                    <h4 className="title">{val.title}</h4>
                                    <p>{val.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </React.Fragment>
        )
    }
}
export default ServiceOne;