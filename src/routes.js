import React from 'react';
import Home from './views/Home';
import  AboutUs  from './views/aboutus/AboutUs';
import  ContactUs  from './views/ContactUs';
import  Recharge from './views/recharge/Recharge';
import TC  from './views/TC';
import  PrivacyPolicy from './views/PrivacyPolicy';
import  CommRules  from './views/CommRules';
import  Download from './views/download/Download';
import Security from './views/Security';

import { Route, Switch, Redirect } from 'react-router-dom';

export const Routes = () => {
  return (
  
      <Switch>
        <Route exact path="/">
          <Redirect to="/about" />
        </Route>
        <Route exact path="/about" component={AboutUs} />
        <Route exact path="/contact" component={ContactUs} />
        <Route exact path="/recharge" component={Recharge} />
        <Route exact path="/download" component={Download} />
        <Route exact path="/security" component={Security} />
        <Route exact path="/tc" component={TC} />
        <Route exact path="/privacypolicy" component={PrivacyPolicy} />
        <Route exact path="/commrules" component={CommRules} />
      </Switch>
    
  );
};