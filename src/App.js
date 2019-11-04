import React from 'react';
import Home from './pages/Home'
import About from './pages/About'
import Detail from './pages/Detail'
import Private from './pages/Private'
import NotFound from './pages/NotFound'
import Nav from './components/Nav'
import Footer from './components/Footer'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import 'milligram'
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/about' exact component={About}/>
          <Route path='/private' exact component={Private}/>  
          <Route path='/private/:id' exact component={Detail}/>
          <Route component={NotFound}/>  
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
