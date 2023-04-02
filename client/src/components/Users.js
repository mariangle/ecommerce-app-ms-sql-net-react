import userApi from '../utils/api/userApi';
import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';

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
          <th>Options</th>
        </tr>
      </thead>
      <tbody>
        {data.map((user, index) => (
          <tr key={index}>
            <td>{user.userID}</td>
            <td>{user.firstName} {user.lastName}</td>
            <td>{user.email}</td>
            <td>{user.phone}</td>
            <td>
              <FontAwesomeIcon icon={faTrash} />
              <FontAwesomeIcon icon={faPenToSquare} />                    
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Users;
