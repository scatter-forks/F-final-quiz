import React, { Component } from 'react';
import './sortStudent.css';

// TODO class命名优化 sort不是分组的意思
export default class SortStudents extends Component {
  render() {
    return (
      <div className="main">
        <header>
          <h1>分组列表</h1>
          <button type="button">分组学员</button>
        </header>
      </div>
    );
  }
}
