// React Required
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// Create Import File
import './index.scss';

// Common Layout
// import Layout from "./component/common/App";

import PageScrollTop from './component/PageScrollTop';

// Dark Home Layout 
import DarkMainDemo from './dark/MainDemo';
import Contact from "./elements/Contact";
import WebsiteDevelopment from "./elements/WebsiteDevelopment";
import ResponsiveDesign from "./elements/ResponsiveDesign";
import SeoPage from "./elements/SeoPage";
import AppDevelopment from "./elements/AppDevelopment";
import DesarrolloSoftware from "./elements/DesarrolloSoftware";
import UltimasTecnologias from "./elements/UltimasTecnologias";
import DataScience from "./elements/DataScience";
import AnalyticsBigData from "./elements/AnalyticsBigData";
import ArtificialIntelligence from "./elements/ArtificialIntelligence";
import error404 from "./elements/error404";



import { BrowserRouter, Switch, Route  } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

class Root extends Component{
    render(){
        return(
            <BrowserRouter basename={'/'}>
                <PageScrollTop>
                    <Switch>
                        <Route exact path={`${process.env.PUBLIC_URL}/`} component={DarkMainDemo}/>
                        <Route exact path={`${process.env.PUBLIC_URL}/website-development`} component={WebsiteDevelopment}/>
                        <Route exact path={`${process.env.PUBLIC_URL}/Responsive-Design`} component={ResponsiveDesign}/>
                        <Route exact path={`${process.env.PUBLIC_URL}/Seo`} component={SeoPage}/>
                        <Route exact path={`${process.env.PUBLIC_URL}/App-Development`} component={AppDevelopment}/>
                        <Route exact path={`${process.env.PUBLIC_URL}/Desarrollo-Software`} component={DesarrolloSoftware}/>
                        <Route exact path={`${process.env.PUBLIC_URL}/Ultimas-Tecnologias`} component={UltimasTecnologias}/>
                        <Route exact path={`${process.env.PUBLIC_URL}/Data-Science`} component={DataScience}/>
                        <Route exact path={`${process.env.PUBLIC_URL}/Analytics-BigData`} component={AnalyticsBigData}/>
                        <Route exact path={`${process.env.PUBLIC_URL}/Artificial-Intelligence`} component={ArtificialIntelligence}/>
                        <Route exact path={`${process.env.PUBLIC_URL}/contact`} component={Contact}/>                        
                        <Route path={`${process.env.PUBLIC_URL}/404`} component={error404}/>
                        <Route component={error404}/>
                    </Switch>
                </PageScrollTop>
            </BrowserRouter>
        )
    }
}

ReactDOM.render(<Root/>, document.getElementById('root'));
serviceWorker.register();