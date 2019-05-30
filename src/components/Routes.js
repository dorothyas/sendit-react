import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Landing from './Landing';
import LoginForm from './LoginComponent';
import ParcelsForm from './ParcelsComponent'
import SignUpForm from './SignupComponent';

const Routes = () => (
  <>
    <Router>
      <switch>
        <Route exact path="/" component={Landing} />
        <Route path="/login" component={LoginForm} />
        <Route path="/parcels" component={ParcelsForm} />
        <Route path="/register" component={SignUpForm} />
      </switch>/>
    </Router>
    </>
);

export default Routes;
