import React, { Component } from 'react';
import StudentList from './StudentList';

export default class Student extends Component {
  addStudent = (e) => {
    if (e.keyCode === 13) {
      console.log('success');
    }
  };

  render() {
    return (
      <div>
        <main>
          <h2>学员列表</h2>
          <div className="students">
            <ul>
              <StudentList />
              <input type="text" placeholder="+添加学员" onKeyUp={this.addStudent} />
            </ul>
          </div>
        </main>
      </div>
    );
  }
}
