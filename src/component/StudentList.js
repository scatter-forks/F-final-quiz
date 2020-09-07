import React, { Component } from 'react';
import './studentList.css';

export default class StudentList extends Component {
  // state = {
  //     name:"",
  // }
  constructor(props) {
    super(props);
    this.state = {
      name: '',
    };
  }

  addStudent = (event) => {
    this.setState({
      name: event.target.value,
    });
  };

  render() {
    return (
      <div>
        <main>
          <h2>学员列表</h2>
          <div className="students">
            <ul>
              <li>1.小明</li>
              <li>1.小明</li>
              <li>1.小明</li>
              <li>1.小明</li>
              <li>1.小明</li>
              <li>1.小明</li>
              <li>1.小明</li>
              <li>1.小明</li>
              <li>1.小明</li>
              <li>1.小明</li>
              <li>1.小明</li>
              <li>1.小明</li>
              <li>1.小明</li>
              <li>1.小明</li>
              <li>1.小明</li>
              <li>1.小明</li>
              <li>1.小明</li>
              <li>1.小明</li>
              <li>1.小明</li>
              <li>1.小明</li>
              <li>1.小明</li>
              <li>1.小明</li>
              <li>1.小明</li>
              <li>1.小明</li>
              <li>1.小明</li>
              <li>1.小明</li>
              <li>1.小明</li>
              <li>1.小明</li>
              <li>1.小明</li>
              <li>1.小明</li>
              <li>1.小明</li>
              <li>1.小明</li>
              <input
                type="text"
                placeholder="+添加学员"
                value={this.state.name}
                onChange={this.addStudent}
              />
            </ul>
          </div>
        </main>
      </div>
    );
  }
}
