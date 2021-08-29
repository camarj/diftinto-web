import React, { useState, useRef } from "react";

import {Alert} from "react-bootstrap";
import ReCAPTCHA from "react-google-recaptcha";

export const ContactCustom = () => {

    const [rnName, setRnName] = useState('')
    const [rnEmail, setRnEmail] = useState('')
    const [rnSubject, setRnSubject] = useState('')
    const [rnMessage, setRnMessage] = useState('')

    const [enviado, setEnviado] = useState(false);
    const [error, setError] = useState(false);
    const [captchaseleccionado, setCaptchaSeleccionado] = useState(false);

    const captcha = useRef(null);

    const onChange = () => {
        if(captcha.current.getValue()){
            setCaptchaSeleccionado(true);
        }
    }

    const submitRequest = async (e) => {
        e.preventDefault();

        // Validar
        if (rnName.trim() === '' || rnEmail.trim() === '' || rnSubject.trim() === '' || rnMessage.trim() === '' || captchaseleccionado === false ) {
            setError(true)
            return
        };
        
        const response = await fetch("https://nodemail-webdiftinto.herokuapp.com/send-email", { 
          method: 'POST', 
          headers: { 
              'Content-type': 'application/json'
          }, 
          body: JSON.stringify({rnName, rnEmail, rnSubject, rnMessage}) 
      }); 

      console.log({ rnName, rnEmail, rnSubject, rnMessage });
      console.log('Mensaje enviado');
      setEnviado(true);
      setError(false);
      setRnName('');
      setRnEmail('');
      setRnSubject('');
      setRnMessage('');

    }

    return (
        <div className="contact-form--1">
                <div className="container">
                    <div className="row row--35 align-items-start">
                        <div className="col-lg-6 order-2 order-lg-1">
                            <div className="section-title text-left mb--50">
                                <span className="subtitle">Te Saludamos</span>
                                <h2 className="title">Contacta con Nosotros</h2>
                                {/* <div className="im_address">
                                    <span>Call us directly:</span>
                                    <a className="link im-hover" href="phone">+111 (0)55 5869 8976</a>
                                </div>
                                <div className="im_address mt--5">
                                    <span>Contact Email:</span>
                                    <a className="link im-hover" href="email">example@gmail.com</a>
                                </div> */}
                            </div>
                            <div className="form-wrapper">
                                <form onSubmit={submitRequest}>                       
                                    {enviado && <Alert variant="success">Mensaje enviado correctamente muchas gracias!!</Alert>}
                                    {error && <Alert variant="danger">Todos los campos son necesarios</Alert>}
                                    <label htmlFor="item01">
                                        <input
                                            type="text"
                                            name="name"
                                            id="item01"
                                            value={rnName}
                                            onChange={(e)=> setRnName(e.target.value)}
                                            placeholder="Tu Nombre *"
                                        />
                                    </label>

                                    <label htmlFor="item02">
                                        <input
                                            type="text"
                                            name="email"
                                            id="item02"
                                            value={rnEmail}
                                            onChange={(e)=> setRnEmail(e.target.value)}
                                            placeholder="Tu Email *"
                                        />
                                    </label>

                                    <label htmlFor="item03">
                                        <input
                                            type="text"
                                            name="subject"
                                            id="item03"
                                            value={rnSubject}
                                            onChange={(e)=> setRnSubject(e.target.value)}
                                            placeholder="Asunto "
                                        />
                                    </label>
                                    <label htmlFor="item04">
                                        <textarea
                                            type="text"
                                            id="item04"
                                            name="message"
                                            value={rnMessage}
                                            onChange={(e)=> setRnMessage(e.target.value)}
                                            placeholder="Tu Mensaje"
                                        />
                                    </label>

                                    <div className="mb--30">

                                        <ReCAPTCHA
                                            ref = {captcha}
                                            sitekey="6LfWTqwUAAAAAKVbT-gNWve_w79-PfpCY9ARDO36"
                                            onChange={onChange}
                                        />

                                    </div>

                                    <button className="btn-default" type="submit" value="submit" name="submit" id="mc-embedded-subscribe">Enviar Ahora</button>
                                </form>
                            </div>
                        </div>
                        <div className="col-lg-6 order-1 order-lg-2">
                            <div className="thumbnail mb_md--30 mb_sm--30">
                                <img src="/assets/images/about/about-12.png" alt="trydo"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}
