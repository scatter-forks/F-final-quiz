import React, { Component } from 'react';
import './App.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Student from '../component/Student';
import AddTrainee from '../component/AddTrainee';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Student} />
          <Route exact path="/add" component={AddTrainee} />
          <Route render={() => <div>404</div>} />
        </Switch>
      </Router>
    );
  }
}

export default App;
