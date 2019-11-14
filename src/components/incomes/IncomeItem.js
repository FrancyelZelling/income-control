import React, { useEffect, useContext } from "react";
import IncomeContext from "../../context/income/incomeContext";
const IncomeItem = ({ income }) => {
  const incomeContext = useContext(IncomeContext);

  const {
    incomes,
    setTotal,
    setCurrent,
    showForm,
    deleteIncome
  } = incomeContext;

  useEffect(() => {
    var total = incomes.reduce(function(prev, cur) {
      return prev + parseFloat(cur.value);
    }, 0);
    setTotal(total);
    // eslint-disable-next-line
  }, [incomes]);

  const sendCurrent = () => {
    showForm(true);
    setCurrent(income);
  };

  const delIncome = () => {
    deleteIncome(income.id);
  };

  return (
    <li>
      <p>{income.name}</p>
      <div className="right-side">
        <p>R$ {income.value}</p>
        <button onClick={sendCurrent}>E</button>
        <button onClick={delIncome}>X</button>
      </div>
    </li>
  );
};

export default IncomeItem;
