import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './css/App.css';
import Header from "./components/Header/Header"
import Home from './components/Home/Home'
import User from './components/User/User'
import Repository from './components/Repository/Repository'
import NotFound from './components/404/NotFound'

function App() {
  return (
    <div className="App">
      <Header />
      <header className="App-header">
      <Router>
        <Switch>
           <Route exact path="/" component={Home} />
           <Route exact path="/buscarusuario" component={User} />
           <Route exact path="/buscarrepositorio" component={Repository} />           
          <Route component={NotFound} />
        </Switch>
      </Router>
      </header>
    </div>
  );
}

export default App;
