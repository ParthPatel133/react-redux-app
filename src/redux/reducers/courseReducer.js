const initState = {
  course: {
    title: '',
    description: '',
  },
};

const courseReducer = (state = [], action) => {
  // const courseReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CREATE_COURSE':
      return [...state, action.payload.course];
    // return {
    //   ...state,
    //   course: {
    //     ...state.course,
    //     title: action.payload.title,
    //     description: action.payload.description,
    //   },
    // };
    // return [...state, action.payload.courseTitle];
    // return {
    //   ...state,
    //   course: [state.course, action.payload.course],
    // };
    default:
      return state;
  }
};

export default courseReducer;
