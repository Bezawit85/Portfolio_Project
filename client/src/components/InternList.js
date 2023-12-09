import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table, Pagination } from 'antd';


const InternList = (props) => {
  const [interns, setInterns] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5; 

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get("http://localhost:8000/api/interns", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`, 
        },
      });
      setInterns(result.data);
    };
    fetchData();
  }, []);

  // Slice the array of items based on current page and items per page
  const internData = interns.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const columns = [ 
    {
      title: 'First Name',
      dataIndex: 'firstName',
      key: 'firstName',
    },
    {
      title: 'Last Name',
      dataIndex: 'lastName',
      key: 'lastName',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Department',
      dataIndex: 'department',
      key: 'department',
    },
    {
      title: 'GPA',
      dataIndex: 'Gpa',
      key: 'Gpa',
    },
    {
      title: 'Batch',
      dataIndex: 'batch',
      key: 'batch',
    },
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
    },
  ];

  return (
    <div>
      <div className="card p-4">
        <h2 className="text-center mb-4">Interns Report</h2>
      <Table dataSource={internData} columns={columns} pagination={false} />
      <Pagination
        current={currentPage}
        total={interns.length}
        pageSize={itemsPerPage}
        onChange={(page) => setCurrentPage(page)}
      />
      </div>
    </div>
  );
};

export default InternList;