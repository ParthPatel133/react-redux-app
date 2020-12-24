export const createCourse = (course) => {
  return {
    type: 'CREATE_COURSE',
    payload: {
      course,
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
