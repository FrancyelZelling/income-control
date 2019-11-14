import React, { useState, useContext, useEffect } from "react";
import IncomeContext from "../context/income/incomeContext";

const Form = () => {
  const incomeContext = useContext(IncomeContext);
  const {
    addIncome,
    showForm,
    current,
    clearCurrent,
    editIncome
  } = incomeContext;

  const [income, setIncome] = useState({ id: null, name: "", value: "" });

  useEffect(() => {
    if (current !== null) {
      setIncome(current);
    }
    // eslint-disable-next-line
  }, []);

  const onChange = e => {
    setIncome({ ...income, [e.target.name]: e.target.value });
  };

  const onSubmit = e => {
    e.preventDefault();

    if (current === null) {
      if (income.name === "" || income.value === "") {
        alert("Please fill in all fields");
      } else {
        addIncome(income);
        showForm(false);
      }
    } else {
      editIncome(income);
      clearCurrent();
      showForm(false);
    }
  };

  const cancel = e => {
    showForm(false);
    if (current !== null) {
      clearCurrent();
    }
    e.preventDefault();
  };

  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="name">Income Name</label>
      <input onChange={onChange} type="text" name="name" value={income.name} />

      <label htmlFor="value">Income Value</label>
      <input
        onChange={onChange}
        type="text"
        name="value"
        value={income.value}
      />

      <button>{current === null ? "Add Income" : "Edit Income"}</button>
      <button onClick={cancel} className="cancelBtn">
        Cancel
      </button>
    </form>
  );
};

export default Form;
