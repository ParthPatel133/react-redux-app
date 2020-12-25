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
    check1: true,
  });
  const dispatch = useDispatch();
  const courses = useSelector((state) => state.courses);

  const handleChange = (e) => {
    const value =
      e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    // const value = e.target.value;
    setCourseState({
      ...courseState,
      [e.target.name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createCourse(courseState));
    setCourseState({
      title: '',
      description: '',
      dropdown: 'lime',
      date: '',
      check1: false,
    });
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
        <br />
        <label>
          checkbox1
          <input
            type='checkbox'
            name='check1'
            onChange={handleChange}
            // value='test1'
            checked={courseState.check1}
          />
        </label>
        <input type='submit' value='Save' />
        {courses.map((course, index) => (
          <div key={index}>
            <div>title: {course.title}</div>
            <div>description: {course.description}</div>
            <div>Option: {course.dropdown} </div>
            <div>Date: {course.date} </div>
            <div>Check1: {course.check1 ? 'true' : 'false'}</div>
            <br />
          </div>
        ))}
      </form>
    </div>
  );
};

export default CoursesPage;
