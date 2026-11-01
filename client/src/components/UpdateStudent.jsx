import React, { useEffect } from "react";
import { Form, Input, Button, DatePicker } from "antd";
import { useLocation, useNavigate } from "react-router-dom";
import dayjs from "dayjs";

function UpdateStudent() {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const location = useLocation();
  const student = location.state;

  useEffect(() => {
    if (student) {
      form.setFieldsValue({
        name: student.name,
        email: student.email,
        age: student.age,
        phone: student.phone,
        dob: student.dob ? dayjs(student.dob) : null,
      });
    }
  }, [student, form]);

  const onFinish = (values) => {
    console.log("Updated values:", values);
  };

  if (!student) {
    return (
      <div className="page empty-state">
        <h2>No student selected</h2>
        <p>Open a student from the dashboard to edit their details.</p>
        <Button type="primary" onClick={() => navigate("/")}>
          Back to students
        </Button>
      </div>
    );
  }

  return (
    <div className="page">
      <div className="page-hero">
        <div>
          <h1>Update Student</h1>
          <p>Refresh contact details and keep the record current.</p>
        </div>
      </div>
      <div className="form-card">
        <Form form={form} layout="vertical" onFinish={onFinish}>
          <Form.Item label="Name" name="name">
            <Input size="large" />
          </Form.Item>

          <Form.Item label="Email" name="email">
            <Input size="large" />
          </Form.Item>

          <Form.Item label="Age" name="age">
            <Input size="large" />
          </Form.Item>

          <Form.Item label="Phone" name="phone">
            <Input size="large" />
          </Form.Item>

          <Form.Item label="DOB" name="dob">
            <DatePicker format="YYYY-MM-DD" size="large" style={{ width: "100%" }} />
          </Form.Item>

          <Button type="primary" htmlType="submit" size="large">
            Update Student
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default UpdateStudent;
