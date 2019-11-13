import React from "react";

const IncomeItem = ({ income }) => {
  return (
    <li>
      {income.name} {(" ", income.value)}{" "}
    </li>
  );
};

export default IncomeItem;
