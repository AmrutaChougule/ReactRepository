import * as actionTypes from "../action/actionType";

export const createContact = (contact) => {
  return {
    type: actionTypes.CREATE_NEW_CONTACT,
    contact: contact,
  };
};

export const deleteContact = (id) => {
  return {
    type: actionTypes.REMOVE_CONTACT,
    id: id,
  };
};

export const createNewUser = (user) => {
  return {
    type: actionTypes.CREATE_NEW_USERS,
    user: user,
  };
};

export const addNewUser = (users) => {
  return {
    type: actionTypes.ADD_NEW_USERS,
    users: users,
  };
};

export const getNewUser = (user) => {
  return {
    type: actionTypes.GET_NEW_USER,
    text: user,
  };
};

export const getAllUsers = (users) => {
  return {
    type: actionTypes.GET_ALL_USERS,
    users: users,
  };
};

export const deleteUser = (id) => {
  return {
    type: actionTypes.REMOVE_USER,
    id: id,
  };
};
