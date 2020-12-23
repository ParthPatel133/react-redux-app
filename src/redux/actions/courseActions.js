export const createCourse = (courseTitle) => {
  return {
    type: 'CREATE_COURSE',
    payload: {
      courseTitle,
    },
  };
};
// export const createCourse = (course) => (dispatch) => {
//   dispatch({
//     type: 'CREATE_COURSE',
//     payload: {
//       course,
//     },
//   });
// };
