import {Link} from 'react-router-dom';
import {useSelector} from 'react-redux';

const HomePage = () => {
  const courses = useSelector((state) => state.courses);

  return (
    <div className='jumbotron'>
      <h1>Course Administration</h1>
      <p>React, Redux and React Router responsive web apps.</p>
      <Link to='about' className='btn btn-primary btn-lg'>
        Learn more
      </Link>
      <br />
      {courses.map((item) => item[[0]])}
    </div>
  );
};
export default HomePage;
