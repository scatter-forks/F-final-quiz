import React, { Component } from 'react';
import './App.scss';
// import StudentList from '../component/StudentList';
import Student from '../component/Student';

class App extends Component {
  render() {
    return (
      <div data-testid="app" className="App">
        <Student />
      </div>
    );
  }
}

export default App;
