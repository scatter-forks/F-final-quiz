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
    fetch('http://localhost:8080/trainees', {
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

  render() {
    return (
      <div>
        <main>
          <SortStudents />
          <h2>讲师列表</h2>
          <div className="students">
            <button type="button">+添加讲师</button>
          </div>
          <h2>学员列表</h2>
          <div className="students">
            <ul>
              <StudentList studentList={this.state.studentList} />
              <button type="button" style={{ height: '25px', width: '80%' }}>
                +添加学员
              </button>
            </ul>
          </div>
        </main>
      </div>
    );
  }
}
