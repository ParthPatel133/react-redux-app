import {useState} from 'react';
import PropTypes from 'prop-types';
import {useDispatch, useSelector} from 'react-redux';
import {createCourse} from '../../redux/actions/courseActions';

const CoursesPage = () => {
  const [courseTitle, setCourseTitle] = useState('');
  const dispatch = useDispatch();
  const courses = useSelector((state) => state.courses);

  const handleChange = (e) => {
    setCourseTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createCourse(courseTitle));
    setCourseTitle('');
    console.log(courses);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Courses</h2>
        <h3>Add Courses</h3>
        <input type='text' onChange={handleChange} value={courseTitle} />
        <input type='submit' value='Save' />
        {courses.map((course) => (
          <div key={course}>{course}</div>
        ))}
      </form>
    </div>
  );
};

export default CoursesPage;
