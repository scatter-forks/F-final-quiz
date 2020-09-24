import React, { Component } from 'react';
import StudentList from './StudentList';
import SortStudents from './SortStudents';

export default class Student extends Component {
  constructor(props) {
    super(props);
    this.state = {
      studentList: [],
    };
  }

  componentDidMount() {
    this.getStudentList();
  }

  getStudentList = () => {
    fetch('http://localhost:8080/students', {
      method: 'GET',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        if (response.ok) {
          return Promise.resolve(response.json());
        }
        return Promise.reject();
      })
      .then((data) => {
        this.setState({
          studentList: data,
        });
        console.log('success');
      })
      .catch(() => {
        console.log('fail');
      });
  };

  addStudentToback = (name) => {
    fetch('http://localhost:8080/students/add', {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(name),
    })
      .then((response) => {
        if (response.ok) {
          return Promise.resolve();
        }
        return Promise.reject();
      })
      .then(() => {
        console.log('success');
      })
      .catch(() => {
        console.log('fail');
      });
  };

  addStudent = (e) => {
    if (e.keyCode === 13) {
      this.addStudentToback(e.target.value);
    }
  };

  render() {
    return (
      <div>
        <main>
          <SortStudents />
          <h2>学员列表</h2>
          <div className="students">
            <ul>
              <StudentList studentList={this.state.studentList} />
              <input type="text" placeholder="+添加学员" onKeyUp={this.addStudent} />
            </ul>
          </div>
        </main>
      </div>
    );
  }
}
