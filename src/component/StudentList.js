import React, { Component } from 'react';
import './studentList.css';

export default class StudentList extends Component {
  render() {
    const students = this.props.studentList;
    return students.map((item) => {
      return (
        <li>
          {item.id}
          {'.'}
          {item.name}
        </li>
      );
    });
  }
}
