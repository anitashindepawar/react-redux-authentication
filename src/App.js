import React from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
// import { connect } from 'react-redux';

import { history } from './helpers';
// import { alertActions } from '../_actions';
 import { PrivateRoute } from './components/privateRoute';
import { HomePage }  from './components/homePage';
import { LoginPage } from './components/loginPage';
import { RegistrationPage } from './components/registrationPage';

export default function App(){

    const redirectToLogin = () => {
        history.push('/login')
      }

      const redirectToRegistration = ()=>{
        history.push('/register')

      }

    return(<div>
        <button onClick={redirectToLogin} >Login</button>
        <button  onClick={redirectToRegistration}>Register</button>
        <HomePage/>

        <Router history={history}>
                            <Switch>
                                <PrivateRoute exact path="/" component={HomePage} />
                                <Route path="/login" component={LoginPage} />
                                <Route path="/register" component={RegistrationPage} />
                                <Redirect from="*" to="/" />
                            </Switch>
                        </Router>
    </div>);
} 