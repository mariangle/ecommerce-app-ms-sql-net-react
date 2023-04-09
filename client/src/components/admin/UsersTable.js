import userApi from '../../utils/api/userApi';
import React, { useEffect, useState } from 'react';

function Users() {
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
          <th>UserID</th>
          <th>Full Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Address</th>
        </tr>
      </thead>
      <tbody>
        {data.map((user, index) => (
          <tr key={index}>
            <td>{user.userID}</td>
            <td>{user.firstName} {user.lastName}</td>
            <td>{user.email}</td>
            <td>{user.phone}</td>
            <td>{user.postalCode} {user.city} {user.address}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Users;
