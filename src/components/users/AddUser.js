import React, {useState} from 'react';

const AddUser = () => {
  const [user, setUser] = useState({
    fullname: '',
    username: '',
    email: '',
    phone: '',
    website: '',
  });

  const onInputChange = (e) => {
    setUser({[e.target.name]: e.target.value});
  };

  const onSubmit = (e) => {
    e.preventDefault();
  };

  const {fullname, username, email, website, phone} = user;
  return (
    <div className='container'>
      <div className='w-75 mx-auto shadow p-5'>
        <h2 className='text-center mb-4'>Add A User</h2>
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
          <button className='btn btn-primary btn-block'>Add User</button>
        </form>
      </div>
    </div>
  );
};

export default AddUser;
