import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { FiX, FiMenu } from 'react-icons/fi';

class Header extends Component {
  constructor(props) {
    super(props);
    this.menuTrigger = this.menuTrigger.bind(this);
    this.CLoseMenuTrigger = this.CLoseMenuTrigger.bind(this);
    //  this.subMetuTrigger = this.subMetuTrigger.bind(this);
    window.addEventListener('load', function () {
      console.log('All assets are loaded');
    });
  }

  menuTrigger() {
    document.querySelector('.header-wrapper').classList.toggle('menu-open');
  }
  CLoseMenuTrigger() {
    document.querySelector('.header-wrapper').classList.remove('menu-open');
  }
  render() {
    var elements = document.querySelectorAll('.has-droupdown > a');
    for (var i in elements) {
      if (elements.hasOwnProperty(i)) {
        elements[i].onclick = function () {
          this.parentElement
            .querySelector('.submenu')
            .classList.toggle('active');
          this.classList.toggle('open');
        };
      }
    }

    const { logo, color = 'default-color' } = this.props;
    let logoUrl;
    if (logo === 'light') {
      logoUrl = <img src="/assets/images/Logo_Web.png" alt="Digital Agency" />;
    } else if (logo === 'dark') {
      logoUrl = <img src="/assets/images/Logo_Web.png" alt="Digital Agency" />;
    } else if (logo === 'symbol-dark') {
      logoUrl = <img src="/assets/images/Logo_Web.png" alt="Digital Agency" />;
    } else if (logo === 'symbol-light') {
      logoUrl = <img src="/assets/images/Logo_Web.png" alt="Digital Agency" />;
    } else {
      logoUrl = <img src="/assets/images/Logo_Web.png" alt="Digital Agency" />;
    }

    return (
      <header
        className={`header-area header--fixed formobile-menu header--transparent ${color}`}
      >
        <div className="header-wrapper" id="header-wrapper">
          <div className="header-left">
            <div className="logo">
              <a href="/">{logoUrl}</a>
            </div>
          </div>
          <div className="header-right">
            <nav className="mainmenunav d-lg-block">
              <ul className="mainmenu">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <HashLink smooth to="#about-section">
                    Nosotros
                  </HashLink>
                </li>
                {/* <li><HashLink smooth to="#service-section">Servicios</HashLink></li> */}
                <li className="has-droupdown">
                  <Link to="#">Servicios</Link>
                  <ul className="submenu">
                    <li>
                      <Link to="/Responsive-Design">Responsive Design</Link>
                    </li>
                    <li>
                      <Link to="/website-development">Website Development</Link>
                    </li>
                    <li>
                      <Link to="/Seo">SEO</Link>
                    </li>
                    <li>
                      <Link to="/App-Development">Apps Development</Link>
                    </li>
                    <li>
                      <Link to="/Desarrollo-Software">
                        Desarrollo de Software
                      </Link>
                    </li>
                    <li>
                      <Link to="/Ultimas-Tecnologias">Ultimas Tecnolog??as</Link>
                    </li>
                    <li>
                      <Link to="/Data-Science">Data Science</Link>
                    </li>
                    <li>
                      <Link to="/Analytics-BigData">Analytics / Big Data</Link>
                    </li>
                    <li>
                      <Link to="/Artificial-Intelligence">
                        Artificial Intelligence
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </nav>
            <div className="header-btn">
              <a
                className="btn-default btn-border btn-opacity"
                target="_blank"
                href="/contact"
              >
                <span>Contacto</span>
              </a>
            </div>
            {/* Start Humberger Menu  */}
            <div className="humberger-menu d-block d-lg-none pl--20 pl_sm--10">
              <span
                onClick={this.menuTrigger}
                className="menutrigger text-white"
              >
                <FiMenu />
              </span>
            </div>
            {/* End Humberger Menu  */}
            <div className="close-menu d-block d-lg-none">
              <span onClick={this.CLoseMenuTrigger} className="closeTrigger">
                <FiX />
              </span>
            </div>
          </div>
        </div>
      </header>
    );
  }
}
export default Header;
