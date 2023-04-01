import userApi from '../utils/api/userApi';
import React, { useEffect, useState } from 'react';

function UserTable() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const users = await userApi.getUsers();
      setData(users);
    };
    fetchData();
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Phone</th>
        </tr>
      </thead>
      <tbody>
        {data.map((user, index) => (
          <tr key={index}>
            <td>{user.userID}</td>
            <td>{user.firstName}</td>
            <td>{user.lastName}</td>
            <td>{user.email}</td>
            <td>{user.phone}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default UserTable;
