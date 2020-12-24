import {useState} from 'react';
import PropTypes from 'prop-types';
import {useDispatch, useSelector} from 'react-redux';
import {createCourse} from '../../redux/actions/courseActions';

const CoursesPage = () => {
  const [courseState, setCourseState] = useState({
    title: '',
    description: '',
  });
  const dispatch = useDispatch();
  const courses = useSelector((state) => state.courses);

  const handleChange = (e) => {
    setCourseState({
      ...courseState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createCourse(courseState));
    setCourseState({title: '', description: ''});
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Courses</h2>
        <h3>Add Courses</h3>
        <input
          type='text'
          name='title'
          onChange={handleChange}
          value={courseState.title}
        />
        <input
          type='text'
          name='description'
          value={courseState.description}
          onChange={handleChange}
        />

        <input type='submit' value='Save' />
      </form>
      {courses.map((course) => (
        <div key={course.title}>
          <div>TITLE: {course.title}</div>
          <div> DES: {course.description}</div>
          <br />
        </div>
      ))}
    </div>
  );
};

export default CoursesPage;
