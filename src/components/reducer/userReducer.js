import * as actionTypes from "../action/actionType";

const initialState = {
  userList: [],
  newUser: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_ALL_USERS:
      return {
        ...state,
      };

    case actionTypes.CREATE_NEW_USERS:
      return {
        ...state,
        newUser: action.user.user,
      };

    case actionTypes.GET_NEW_USER:
      return {
        ...state,
        newUser: state.newUser,
      };

    case actionTypes.ADD_NEW_USERS:
      let newUserList;
      return { ...state, newUserList: state.userList.push(action.users) };

    case actionTypes.REMOVE_USER:
      console.log("REMOVE_USER: ", state);
      return {
        ...state,
        userList: state.userList.filter((users, i) => i !== action.id),
      };

    default:
      return state;
  }
};
