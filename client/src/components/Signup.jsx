import React, { useEffect } from "react";
import { Button, Form, Input } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { register } from "../calls/authCalls.js";

function Signup() {
  const navigate = useNavigate();
  const onFinish = async (values) => {
    const response = await register(values);
    console.log(response);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  useEffect(() => {
    const userData = localStorage.getItem("user");

    if (userData) {
      navigate("/");
    }
  }, []);
  return (
    <div className="auth-shell">
      <div className="auth-card">
        <h1>Create your desk</h1>
        <p>Register to start tracking students, contacts, and records.</p>
        <Form
          name="basic"
          layout="vertical"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Username"
            name="userName"
            rules={[{ required: true, message: "Please Enter username!" }]}
          >
            <Input size="large" placeholder="Your name" />
          </Form.Item>
          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: "Please Enter email!" }]}
          >
            <Input size="large" placeholder="you@school.edu" />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password size="large" placeholder="Create a password" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" size="large" block>
              Sign up
            </Button>
          </Form.Item>
        </Form>
        <p className="auth-switch">
          Already registered? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;
