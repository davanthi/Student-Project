import React from "react";
import { Button, Form, Input, DatePicker } from "antd";
import { addStudent } from "../calls/studentCalls.js";
import { useNavigate } from "react-router-dom";

function AddStudent() {
  const navigate = useNavigate();
  const onFinish = async (values) => {
    const result = await addStudent(values);
    console.log(result);
    navigate("/");
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div className="page">
      <div className="page-hero">
        <div>
          <h1>Add Student</h1>
          <p>Capture the basics so the directory stays complete.</p>
        </div>
      </div>
      <div className="form-card">
        <Form
          name="basic"
          layout="vertical"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Name"
            name="name"
            rules={[{ required: true, message: "Please input your name!" }]}
          >
            <Input size="large" placeholder="Full name" />
          </Form.Item>

          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: "Please input your email!" }]}
          >
            <Input type="email" size="large" placeholder="student@school.edu" />
          </Form.Item>
          <Form.Item
            label="Age"
            name="age"
            rules={[{ required: true, message: "Please input your age!" }]}
          >
            <Input size="large" placeholder="Age" />
          </Form.Item>
          <Form.Item
            label="Phone"
            name="phone"
            rules={[{ required: true, message: "Please input your phone!" }]}
          >
            <Input size="large" placeholder="Phone number" />
          </Form.Item>
          <Form.Item
            label="DOB"
            name="dob"
            rules={[{ required: true, message: "Please input your DOB!" }]}
          >
            <DatePicker size="large" style={{ width: "100%" }} />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" size="large">
              Save student
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

export default AddStudent;
