import React from 'react';
import './App.css';
import SignUpContractor from './SignUpContractor'
import  SignUpUser  from './SignUpUser';
import { ExpertiseForm } from './ExpertiseForm'
import history from './history'
import { Router, Route } from 'react-router-dom'
import LoginContractor from './LoginContractor';
import  LoginUser  from './LoginUser'


function App() {
  return (
    <div>
    <Router history={history}>
        <Route exact path='/start-earning' component={SignUpContractor}></Route>
        <Route exact path='/join' component={SignUpUser}></Route>
        <Route exact path='/contractor-expertise' component={ExpertiseForm}></Route>
        <Route exact path='/contractor-login' component={LoginContractor}></Route>
        <Route exact path='/user-login' component={LoginUser}></Route>
  </Router>
   </div>
  )
}

export default App;
