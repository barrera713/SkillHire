import React from 'react';
import './App.css';
import ExpertiseForm from './ExpertiseForm'
import history from './history'
import { Router, Route, Switch } from 'react-router-dom'
import ReviewForm from './ReviewForm'
import Default from './Default';
import LoginPage from './LoginPage';
import NavBar from './NavBar';
import ContractorCard from './ContractorCard';



function App() {
  return (
    <div>
        <Router history={history}>
          <NavBar/>
          <Switch>
            <Route exact path='/' component={LoginPage}></Route>
            <Route exact path='/expertise' component={ExpertiseForm}></Route>
            <Route exact path='/review/new' component={ReviewForm}></Route>
            <Route exact path='/freelancers' component={ContractorCard}></Route>
            <Route component={Default}></Route>
          </Switch>
      </Router>
   </div>
  )
}

export default App;
