import React, { useEffect, useState } from "react";
import { Table, Space, Button, Popconfirm } from "antd";
import { getStudents } from "../calls/studentCalls.js";
import { useNavigate } from "react-router-dom";
import dayjs from "dayjs";

function Home() {
  const [students, setStudents] = useState([]);
  const navigate = useNavigate();
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Phone",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "DOB",
      dataIndex: "dob",
      key: "dob",
      render: (dob) => (dob ? dayjs(dob).format("DD MMM YYYY") : "—"),
    },
    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <Space>
          <Button type="primary" onClick={() => handleEdit(record)}>
            Edit
          </Button>

          <Popconfirm
            title="Are you sure you want to delete this student?"
            onConfirm={() => handleDelete(record._id)}
            okText="Yes"
            cancelText="No"
          >
            <Button danger>Delete</Button>
          </Popconfirm>
        </Space>
      ),
    },
  ];
  async function getData() {
    const studentsData = await getStudents();
    setStudents(studentsData);
  }
  useEffect(() => {
    getData();
  }, []);
  const handleEdit = (record) => {
    console.log(record, "edit ");
    navigate("/update", {
      state: record,
    });
  };

  const handleDelete = (id) => {
    console.log("Delete student ID:", id);
  };

  return (
    <div className="page">
      <div className="page-hero">
        <div>
          <h1>Student Dashboard</h1>
          <p>Review, update, and keep every student record in one place.</p>
        </div>
        <Button type="primary" size="large" onClick={() => navigate("/add")}>
          Add student
        </Button>
      </div>
      <div className="table-card">
        <Table
          dataSource={students}
          columns={columns}
          rowKey={(record) => record._id || record.email}
          pagination={{ pageSize: 8 }}
          scroll={{ x: 760 }}
        />
      </div>
    </div>
  );
}

export default Home;
