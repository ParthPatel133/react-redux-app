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
    [e.target.name] = setCourseState(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createCourse(course));
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
          onChange={handleChange}
          value={courseState.description}
        />
        <input type='submit' value='Save' />
        {courses.map((course) => (
          <div key={course}>{course}</div>
        ))}
      </form>
    </div>
  );
};

export default CoursesPage;
