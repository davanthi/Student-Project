import React from "react";
import { Button, Checkbox, Form, Input } from "antd";
import {register} from '../calls/authCalls.js'

function Signup() {
  const onFinish = async(values) => {
    const response= await register(values);
    console.log(response)
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div className="signup-form">
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item label={null}>
          <h1>Register</h1>
        </Form.Item>
        <Form.Item
          label="Username"
          name="userName"
          rules={[{ required: true, message: "Please Enter username!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Email"
          name="email"
          type="email"
          rules={[{ required: true, message: "Please Enter email!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          type="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item label={null}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default Signup;
