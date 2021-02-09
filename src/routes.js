import React from 'react';
import  AboutUs  from './views/aboutus/AboutUs';
import  ContactUs  from './views/ContactUs';
import  Recharge from './views/recharge/Recharge';
import TC  from './views/TC';
import  Download from './views/download/Download';
import Transactions from './views/transactions/Transactions';

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
        <Route exact path="/tc" component={TC} />
        <Route exact path="/details" component={Transactions} />
        
      </Switch>
    
  );
};