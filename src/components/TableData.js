import {useSelector} from 'react-redux';
// const courses = useSelector((state) => state.courses);

// export default TableData = [{courses}];

const TableData = () => {
  const courses = useSelector((state) => state.courses);

  console.log(courses);
  return JSON.stringify(courses);
};
export default TableData;
