import React, { useState } from "react";

// Components
import Form from "./Form";
import Incomes from "./incomes/Incomes";

const Home = () => {
  const [showForm, setShowForm] = useState(false);

  const changeFormShow = () => {
    setShowForm(!showForm);
  };

  return (
    <div className="container">
      {showForm && <Form />}

      <Incomes />

      <button onClick={changeFormShow} className="addBtn">
        {showForm ? "Apply Changes" : "Add Income"}
      </button>
    </div>
  );
};

export default Home;
