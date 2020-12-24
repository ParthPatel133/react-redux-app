// const initState = {
//   course: {
//     title: '',
//   },
// };

const courseReducer = (state = [], action) => {
  // const courseReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CREATE_COURSE':
      return [...state, action.payload.course];
    default:
      return state;
  }
};

export default courseReducer;
