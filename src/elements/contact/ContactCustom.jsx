import React, { useState } from "react";

export const ContactCustom = () => {

    const [rnName, setRnName] = useState('')
    const [rnEmail, setRnEmail] = useState('')
    const [rnSubject, setRnSubject] = useState('')
    const [rnMessage, setRnMessage] = useState('')

    const submitRequest = async (e) => {
        e.preventDefault();
        console.log({ rnName, rnEmail, rnSubject, rnMessage });
        const response = await fetch("/access", { 
          method: 'POST', 
          headers: { 
              'Content-type': 'application/json'
          }, 
          body: JSON.stringify({rnName, rnEmail, rnSubject, rnMessage}) 
      }); 
    
        const resData = await response.json(); 
        if (resData.status === 'success'){
          alert("Message Sent."); 
          this.resetForm()
      }else if(resData.status === 'fail'){
          alert("Message failed to send.")
      }

    }
    

    return (
        <div className="contact-form--1">
                <div className="container">
                    <div className="row row--35 align-items-start">
                        <div className="col-lg-6 order-2 order-lg-1">
                            <div className="section-title text-left mb--50">
                                <span className="subtitle">Let's Say Hi</span>
                                <h2 className="title">Contact With Us.</h2>
                                <div className="im_address">
                                    <span>Call us directly:</span>
                                    <a className="link im-hover" href="phone">+111 (0)55 5869 8976</a>
                                </div>
                                <div className="im_address mt--5">
                                    <span>Contact Email:</span>
                                    <a className="link im-hover" href="email">example@gmail.com</a>
                                </div>
                            </div>
                            <div className="form-wrapper">
                                <form onSubmit={submitRequest}>
                                    <label htmlFor="item01">
                                        <input
                                            type="text"
                                            name="name"
                                            id="item01"
                                            value={rnName}
                                            onChange={(e)=> setRnName(e.target.value)}
                                            placeholder="Your Name *"
                                        />
                                    </label>

                                    <label htmlFor="item02">
                                        <input
                                            type="text"
                                            name="email"
                                            id="item02"
                                            value={rnEmail}
                                            onChange={(e)=> setRnEmail(e.target.value)}
                                            placeholder="Your email *"
                                        />
                                    </label>

                                    <label htmlFor="item03">
                                        <input
                                            type="text"
                                            name="subject"
                                            id="item03"
                                            value={rnSubject}
                                            onChange={(e)=> setRnSubject(e.target.value)}
                                            placeholder="Write a Subject"
                                        />
                                    </label>
                                    <label htmlFor="item04">
                                        <textarea
                                            type="text"
                                            id="item04"
                                            name="message"
                                            value={rnMessage}
                                            onChange={(e)=> setRnMessage(e.target.value)}
                                            placeholder="Your Message"
                                        />
                                    </label>
                                    <button className="btn-default" type="submit" value="submit" name="submit" id="mc-embedded-subscribe">Submit Now</button>
                                </form>
                            </div>
                        </div>
                        <div className="col-lg-6 order-1 order-lg-2">
                            <div className="thumbnail mb_md--30 mb_sm--30">
                                <img src="/assets/images/about/about-12.jpg" alt="trydo"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}
