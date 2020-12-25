import {useSelector} from 'react-redux';

const TableData = () => {
  const courses = useSelector((state) => state.courses);

  return JSON.stringify(courses);
};
export default TableData;
