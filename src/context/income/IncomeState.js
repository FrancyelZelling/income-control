import React, { useReducer } from "react";
import IncomeReducer from "./incomeReducer";
import IncomeContext from "./incomeContext";
import uuid from "uuid";
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

const IncomeState = props => {
  const initialState = {
    incomes: [
      {
        id: uuid.v4(),
        name: "Kimba",
        value: "12"
      },
      {
        id: uuid.v4(),
        name: "Kimba",
        value: "13"
      }
    ],
    current: null,
    formView: false,
    total: 0
  };

  const [state, dispatch] = useReducer(IncomeReducer, initialState);

  // Add income
  const addIncome = income => {
    income.id = uuid.v4();
    dispatch({ type: ADD_INCOME, payload: income });
  };

  // Edit income
  const editIncome = income => {
    dispatch({ type: EDIT_INCOME, payload: income });
  };

  // Delete income
  const deleteIncome = id => dispatch({ type: DELETE_INCOME, payload: id });

  // Set total
  const setTotal = total => {
    dispatch({ type: CALC_TOTAL, payload: total });
  };

  // Set Current income
  const setCurrent = income => {
    dispatch({ type: SET_CURRENT, payload: income });
  };

  // Clear Current
  const clearCurrent = () => {
    dispatch({ type: CLEAR_CURRENT });
  };

  // Change form view
  const showForm = value => {
    dispatch({ type: SHOW_FORM, payload: value });
  };

  return (
    <IncomeContext.Provider
      value={{
        incomes: state.incomes,
        formView: state.formView,
        total: state.total,
        current: state.current,
        addIncome,
        editIncome,
        deleteIncome,
        showForm,
        setTotal,
        setCurrent,
        clearCurrent
      }}
    >
      {props.children}
    </IncomeContext.Provider>
  );
};

export default IncomeState;
