export const PPT_INITIAL = {
  userSelect: null,
  wins: 0,
};

export const PPTReducer = (state, action) => {
  switch (action.type) {
    case "SET_USER_SELECT":
      return { ...state, userSelect: action.payload };
    case "ADD_WIN":
      return { ...state, wins: state.wins + 1 };
    default:
      return state;
  }
};
