import React, { Component } from 'react';
import { Input, Tooltip, Button, message } from 'antd';
import { InfoCircleOutlined } from '@ant-design/icons';
import './addTrainee.css';

export default class AddTrainee extends Component {
  onChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value,
    });
  };

  submitProduct = () => {
    fetch('http://localhost:8080/product/add', {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
      },
      body: JSON.stringify(this.state),
    })
      .then((response) => {
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
        <Input
          id="name"
          onChange={this.onChange}
          placeholder="Enter your name"
          suffix={
            <Tooltip title="Extra information">
              <InfoCircleOutlined style={{ color: 'rgba(0,0,0,.45)' }} />
            </Tooltip>
          }
        />
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
        <Input id="zoom" onChange={this.onChange} placeholder="Enter your product price" />
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
            // transform: 'translateX(-50%)',
            // marginLeft: '50%',
            marginBottom: '100px',
          }}
          onClick={this.submitProduct}
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
            // transform: 'translateX(-50%)',
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
