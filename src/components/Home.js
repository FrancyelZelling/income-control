import React, { useContext, useEffect } from "react";
import IncomeContext from "../context/income/incomeContext";

// Components
import Form from "./Form";
import Incomes from "./incomes/Incomes";

const Home = () => {
  const incomeContext = useContext(IncomeContext);

  const { formView, showForm, total, incomes } = incomeContext;

  const test = () => {
    showForm(true);
  };

  return (
    <div className="container">
      {formView && <Form />}

      {!formView && (
        <div className="div">
          <button onClick={test} className="addBtn">
            Add Income
          </button>
          <button className="addBtn">
            {incomes.length === 0 ? "0" : total}
          </button>
        </div>
      )}
      <Incomes />
    </div>
  );
};

export default Home;
