import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import BrowserView from './components/BrowserView';
import './styles/index.css';

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" component={BrowserView} />
      </Switch>
    </Router>
  );
};

export default App;