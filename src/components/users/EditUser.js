import React, {useState, useEffect} from 'react';
import {useHistory, useParams} from 'react-router-dom';
import axios from 'axios';

const EditUser = () => {
  const history = useHistory();
  const {id} = useParams();
  const [user, setUser] = useState({
    fullname: '',
    username: '',
    email: '',
    phone: '',
    website: '',
  });

  const {fullname, username, email, website, phone} = user;

  useEffect(() => {
    const getUser = async () => {
      const res = await axios.get(`http://localhost:3001/users/${id}`);
      setUser(res.data);
    };
    getUser();
  }, []);

  const onInputChange = (e) => {
    setUser({...user, [e.target.name]: e.target.value});
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    await axios.put(`http://localhost:3001/users/${id}`, user);
    history.push('/');
  };

  return (
    <div className='container'>
      <div className='w-75 mx-auto shadow p-5'>
        <h2 className='text-center mb-4'>Edit A User</h2>
        <form onSubmit={(e) => onSubmit(e)}>
          <div className='form-group'>
            <input
              type='text'
              className='form-control form-control-lg'
              placeholder='Enter Your Name'
              name='fullname'
              value={fullname}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className='form-group'>
            <input
              type='text'
              className='form-control form-control-lg'
              placeholder='Enter Your Username'
              name='username'
              value={username}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className='form-group'>
            <input
              type='email'
              className='form-control form-control-lg'
              placeholder='Enter Your E-mail Address'
              name='email'
              value={email}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className='form-group'>
            <input
              type='text'
              className='form-control form-control-lg'
              placeholder='Enter Your Phone Number'
              name='phone'
              value={phone}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className='form-group'>
            <input
              type='text'
              className='form-control form-control-lg'
              placeholder='Enter Your Website Name'
              name='website'
              value={website}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <button className='btn btn-secondary btn-block'>Edit User</button>
        </form>
      </div>
    </div>
  );
};

export default EditUser;
