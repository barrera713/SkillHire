import React from 'react';
import './App.css';
import SignUpContractor from './SignUpContractor'
import  SignUpUser  from './SignUpUser';
import ExpertiseForm from './ExpertiseForm'
import history from './history'
import { Router, Route, Switch } from 'react-router-dom'
import ReviewForm from './ReviewForm'
import Default from './Default';
import HomePage from './HomePage';
import NavBar from './NavBar'


function App() {
  return (
    <div>
    <Router history={history}>
      <NavBar/>
      <Switch>
        <Route exact path='/' component={HomePage}></Route>
        <Route exact path='/start-earning' component={SignUpContractor}></Route>
        <Route exact path='/join' component={SignUpUser}></Route>
        <Route exact path='/expertise' component={ExpertiseForm}></Route>
        <Route exact path='/review/new' component={ReviewForm}></Route>
        <Route component={Default}></Route>
      </Switch>
  </Router>
   </div>
  )
}

export default App;
