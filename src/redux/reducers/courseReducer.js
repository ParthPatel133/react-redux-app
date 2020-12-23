// const initState = {
//   courseTitle: '',
// };

const courseReducer = (state = [], action) => {
  // const courseReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CREATE_COURSE':
      // return [...state, action.payload.course];
      return [...state, action.payload.courseTitle];
    // return {
    //   ...state,
    //   courseTitle: action.payload.courseTitle,
    // };
    default:
      return state;
  }
};

export default courseReducer;
