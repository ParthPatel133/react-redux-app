import {useState} from 'react';
import PropTypes from 'prop-types';
import {useDispatch, useSelector} from 'react-redux';
import {createCourse} from '../../redux/actions/courseActions';

const CoursesPage = () => {
  const [courseState, setCourseState] = useState({
    title: '',
    description: '',
    dropdown: 'lime',
    date: '',
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
    setCourseState({title: '', description: '', dropdown: 'lime', date: ''});
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
        <textarea
          type='text'
          placeholder='description'
          name='description'
          onChange={handleChange}
          value={courseState.description}
        />
        <br />
        <select
          name='dropdown'
          value={courseState.dropdown}
          onChange={handleChange}
        >
          <option value='grapefruit'>Grapefruit</option>
          <option value='lime'>Lime</option>
          <option value='coconut'>Coconut</option>
          <option value='mango'>Mango</option>
        </select>
        <br />
        <input
          type='date'
          name='date'
          value={courseState.date}
          onChange={handleChange}
        />
        <input type='submit' value='Save' />
        {courses.map((course, index) => (
          <div key={index}>
            <div>title: {course.title}</div>
            <div>description: {course.description}</div>
            <div>Option: {course.dropdown} </div>
            <div>Date: {course.date} </div>
            <br />
          </div>
        ))}
      </form>
    </div>
  );
};

export default CoursesPage;
