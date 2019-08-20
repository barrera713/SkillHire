import React from 'react';
import './App.css';
import ExpertiseForm from './ExpertiseForm'
import history from './history'
import { Router, Route, Switch } from 'react-router-dom'
import ReviewForm from './ReviewForm'
import Default from './Default';
import LoginPage from './LoginPage';
import NavBar from './NavBar';
import ContractorCollection from './ContractorCollection';
import ContractorProfile from './ContractorProfile';



function App() {
  return (
    <div>
        <Router history={history}>
          <NavBar/>
          <Switch>
            <Route exact path='/' component={LoginPage}></Route>
            <Route exact path='/expertise' component={ExpertiseForm}></Route>
            <Route exact path='/review/new' component={ReviewForm}></Route>
            <Route exact path='/freelancers' component={ContractorCollection}></Route>
            <Route exact path='/profile/:id' component={ContractorProfile}></Route>
            <Route component={Default}></Route>
          </Switch>
      </Router>
   </div>
  )
}

export default App;
