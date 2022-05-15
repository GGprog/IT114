import React from 'react';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import './App.css';
import Home from './components/pages/Home';
import About from './components/About';
import Arts from './components/Arts';
import Contact from './components/Contact';

function App() {
  return (  
    <>
    <Router>
      <NavBar/>
      <Switch>
        <Route path='/'exact component={Home}/>
        <Route path='/About' component={About} />
        <Route path='/Arts' component={Arts} />
        <Route path='/Contact' component={Contact} />
      </Switch>
    </Router>
    </>
  );
}

export default App;