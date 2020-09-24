import React, { Component } from 'react';
import { Input, Button, message } from 'antd';
import './addTrainee.css';

export default class AddTrainee extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      office: '',
      zoomId: '',
      github: '',
    };
  }

  onChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value,
    });
  };

  addTrainee = () => {
    fetch('http://localhost:8080/trainees', {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(this.state),
    })
      .then((response) => {
        console.log(JSON.stringify(this.state));
        if (response.ok) {
          return Promise.resolve();
        }
        return Promise.reject();
      })
      .then(() => {
        message.success('添加成功');
      })
      .catch(() => {
        message.error('添加失败');
      });
  };

  render() {
    return (
      <div style={{ marginTop: '30px' }}>
        <h1
          style={{
            fontWeight: '700',
            display: 'inline-block',
          }}
        >
          添加学员
        </h1>
        <h3 style={{ fontWeight: '700' }}>*姓名</h3>
        <Input id="name" onChange={this.onChange} placeholder="Enter your name" />
        <br />
        <br />
        <h3 style={{ fontWeight: '700' }}>*邮箱</h3>
        <Input id="email" onChange={this.onChange} placeholder="Enter your email" />
        <br />
        <br />
        <h3 style={{ fontWeight: '700' }}>*办公室</h3>
        <Input id="office" onChange={this.onChange} placeholder="Enter your product name" />
        <br />
        <br />
        <h3 style={{ fontWeight: '700' }}>*Zoom ID</h3>
        <Input id="zoomId" onChange={this.onChange} placeholder="Enter your product price" />
        <br />
        <br />
        <h3 style={{ fontWeight: '700' }}>*GitHub帐号</h3>
        <Input id="github" onChange={this.onChange} placeholder="Enter your product unit" />
        <br />
        <br />
        <Button
          type="primary"
          shape="round"
          size="large"
          style={{
            display: 'inline-block',
            width: '100px',
            marginBottom: '100px',
          }}
          onClick={this.addTrainee}
        >
          提交
        </Button>
        <Button
          type="primary"
          shape="round"
          size="large"
          style={{
            display: 'inline-block',
            width: '100px',
            marginLeft: '5%',
            marginBottom: '100px',
          }}
          onClick={this.submitProduct}
        >
          取消
        </Button>
      </div>
    );
  }
}
