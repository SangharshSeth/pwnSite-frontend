import React from 'react';
import './App.css';
import Form from './components/Form';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './components/Home';
import ErrorPage from './components/ErrorPage';

function App() {
  return (
    <Router>
      <Switch>
      <Route path='/home' exact component={Home} />
      <Route path='/signup' exact component={Form} />
      <Route path='/' component={ErrorPage}/>
      </Switch>
    </Router>
  );
}

export default App;
