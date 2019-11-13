import React, { useReducer } from "react";
import IncomeReducer from "./incomeReducer";
import IncomeContext from "./incomeContext";
import uuid from "uuid";
import { ADD_INCOME, EDIT_INCOME, DELETE_INCOME, GET_INCOMES } from "../types";

const IncomeState = props => {
  const initialState = {
    incomes: [
      {
        id: uuid.v4(),
        name: "Kimba",
        value: "12"
      }
    ]
  };

  const [state, dispatch] = useReducer(IncomeReducer, initialState);

  return (
    <IncomeContext.Provider value={{ incomes: state.incomes }}>
      {props.children}
    </IncomeContext.Provider>
  );
};

export default IncomeState;
