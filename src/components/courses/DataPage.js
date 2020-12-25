import {useSelector} from 'react-redux';

const DataPage = () => {
  const courses = useSelector((state) => state.courses);
  const data = [...courses];

  return (
    <div>
      {courses.map((course, index) => (
        <div key={index}>
          <div>
            <strong>Title:</strong> {course.title}
          </div>
          <div>
            <strong>Description:</strong> {course.description}
          </div>
          <div>
            <strong>Option:</strong> {course.dropdown}{' '}
          </div>
          <div>
            <strong>Date:</strong> {course.date}{' '}
          </div>
          <div>
            <strong>Check1:</strong> {course.check1 ? 'true' : 'false'}
          </div>
          <br />
        </div>
      ))}
    </div>
  );
};

export default DataPage;
