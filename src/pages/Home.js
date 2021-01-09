import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
const Home = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    loadUsers();
    return () => {
      setUsers([]);
    };
    //learning about cleanUp subscription
    //*****MOST IMPORTANT DO cleanUp ELSE THERE IS Memory LEAK **********/
  }, []);

  const loadUsers = async () => {
    const res = await axios.get('http://localhost:3001/users');
    setUsers(res.data.reverse());
  };

  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:3001/users/${id}`);
    loadUsers();
  };

  return (
    <div className='container'>
      <div className='py-3 mt-5'>
        <h1>home page</h1>
        <table className='table border shadow'>
          <thead className='table-dark'>
            <tr>
              <th scope='col'>ID</th>
              <th scope='col'>Name</th>
              <th scope='col'>UserName</th>
              <th scope='col'>Email</th>
              <th scope='col'>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index}>
                <th scope='row'>{index + 1}</th>
                <td>{user.fullname}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>
                  <Link
                    to={`users/${user.id}`}
                    className='btn btn-primary mr-2'
                  >
                    View
                  </Link>
                  <Link
                    to={`users/edit/${user.id}`}
                    className='btn btn-outline-primary mr-2 '
                  >
                    Edit
                  </Link>
                  <Link
                    to='/'
                    onClick={() => deleteUser(user.id)}
                    className='btn btn-danger'
                  >
                    Delete
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
