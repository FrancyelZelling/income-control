import { ADD_INCOME, EDIT_INCOME, DELETE_INCOME, GET_INCOMES } from "../types";

export default (state, action) => {
  switch (action.type) {
    default:
      return state;

    case ADD_INCOME:
      return {
        ...state,
        incomes: action.payload
      };
  }
};
