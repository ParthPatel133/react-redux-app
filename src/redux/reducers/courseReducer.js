const courseReducer = (state = [], action) => {
  switch (action.type) {
    case 'CREATE_COURSE':
      return [...state, {...action.payload.course}];
    default:
      return state;
  }
};

export default courseReducer;
