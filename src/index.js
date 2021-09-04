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