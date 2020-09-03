import React from 'react';
import { Route, HashRouter, Switch } from 'react-router-dom';


// pages
import About from './components/pages/About/index';
import Home from './components/pages/Home/index';
import Skills from './components/pages/Skills/index';
import Social from './components/pages/Social/index';
import Works from './components/pages/Works/index';

export default () => (
    <HashRouter>
        <Switch>
            <Route exact path="/about" component={About} />
            <Route exact path="/skills" component={Skills} />
            <Route exact path="/social" component={Social} />
            <Route exact path="/works" component={Works} />
            <Route exact path="/" component={Home} />
            <Route component={Home} />  
        </Switch>
    </HashRouter>
)