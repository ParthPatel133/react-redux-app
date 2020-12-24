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
          placeholder='title'
          onChange={handleChange}
          value={courseState.title}
        />
        <br />
        <input
          type='text'
          placeholder='description'
          name='description'
          onChange={handleChange}
          value={courseState.description}
        />
        <br />
        <input type='submit' value='Save' />
        {courses.map((course, index) => (
          <div key={index}>
            <div>title: {course.title}</div>
            <div>description: {course.description}</div>
            <br />
          </div>
        ))}
      </form>
    </div>
  );
};

export default CoursesPage;
