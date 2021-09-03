import PropTypes from "prop-types";
import React, { Component } from "react";
import {Helmet} from 'react-helmet'

class PageHelmet extends Component{
    render(){
        return(
            <React.Fragment>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>{this.props.pageTitle} || Agencia IT</title>
                    <meta name="robots" content="noindex, follow" />
                    <meta name="description" content="Diftinto: somos diferentes al resto, te ofrecemos desarrollos, websites, apps con innovación y diseño a escala. Diftinto crea software y productos digitales que potencian." />
                    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                </Helmet>
            </React.Fragment>
        )
    }
}
PageHelmet.propTypes = {
    title: PropTypes.string
};
export default PageHelmet;
