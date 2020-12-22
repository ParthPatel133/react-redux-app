import {useState} from 'react';

const CoursesPage = () => {
  const [courseTitle, setCourseTitle] = useState('');

  const handleChange = (e) => {
    setCourseTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setCourseTitle('');
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Courses</h2>
        <h3>Add Courses</h3>
        <input type='text' onChange={handleChange} value={courseTitle} />
        <input type='submit' value='Save' />
      </form>
    </div>
  );
};

export default CoursesPage;
