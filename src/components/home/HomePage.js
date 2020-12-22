import {Link} from 'react-router-dom';

const HomePage = () => (
  <div className='jumbotron'>
    <h1>Course Administration</h1>
    <p>React, Redux and React Router responsive web apps.</p>
    <Link to='about' className='btn btn-primary btn-lg'>
      Learn more
    </Link>
  </div>
);

export default HomePage;
