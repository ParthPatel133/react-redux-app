import React from 'react';
import {Link, NavLink} from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <nav className='navbar navbar-expand-lg  navbar-dark bg-dark'>
        <div className='container-fluid'>
          <Link className='navbar-brand' to='/'>
            ReactUser
          </Link>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarNav'
            aria-controls='navbarNav'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarNav'>
            <ul className='navbar-nav'>
              <li className='nav-item'>
                <NavLink className='nav-link' exact aria-current='page' to='/'>
                  Home
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink className='nav-link' to='/about'>
                  About
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink className='nav-link' to='/contact'>
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
          <Link to='/users/add' className='btn btn-outline-light '>
            Add User
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
