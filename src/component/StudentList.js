import React, { Component } from 'react';
import './studentList.css';
import studentList from '../TempData/studentList.json';

export default class StudentList extends Component {
  render() {
    return studentList.map((item) => {
      return <li>{item.name}</li>;
    });
  }
}
