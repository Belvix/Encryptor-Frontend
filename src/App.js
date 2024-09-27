import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './components/HomePage';
import Encryptor from './components/Encryptor';
import Decryptor from './components/Decryptor';
import './styles.css';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/encryptor" component={Encryptor} />
        <Route path="/decryptor" component={Decryptor} />
      </Switch>
    </Router>
  );
};

export default App;