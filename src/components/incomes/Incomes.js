import React, { useContext } from "react";
import IncomeContext from "../../context/income/incomeContext";
import IncomeItem from "./IncomeItem";

const Incomes = () => {
  const incomeContext = useContext(IncomeContext);

  const { incomes } = incomeContext;

  return (
    <ul className="list-incomes">
      {incomes.map(income => (
        <IncomeItem key={income.id} income={income} />
      ))}
    </ul>
  );
};

export default Incomes;
