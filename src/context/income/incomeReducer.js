import {
  ADD_INCOME,
  EDIT_INCOME,
  DELETE_INCOME,
  GET_INCOMES,
  SHOW_FORM,
  CALC_TOTAL,
  SET_CURRENT,
  CLEAR_CURRENT
} from "../types";

export default (state, action) => {
  switch (action.type) {
    default:
      return state;

    case ADD_INCOME:
      return {
        ...state,
        incomes: [...state.incomes, action.payload]
      };

    case EDIT_INCOME:
      return {
        ...state,
        incomes: state.incomes.map(income =>
          income.id === action.payload.id ? action.payload : income
        )
      };

    case DELETE_INCOME:
      return {
        ...state,
        incomes: state.incomes.filter(income => income.id !== action.payload)
      };

    case SHOW_FORM:
      return {
        ...state,
        formView: action.payload
      };

    case SET_CURRENT:
      return {
        ...state,
        current: action.payload
      };

    case CLEAR_CURRENT:
      return {
        ...state,
        current: null
      };

    case CALC_TOTAL:
      return {
        ...state,
        total: action.payload
      };
  }
};
