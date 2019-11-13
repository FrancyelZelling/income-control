import React from "react";

const Form = () => {
  return (
    <form>
      <label htmlFor="name">Income Name</label>
      <input type="text" name="name" />

      <label htmlFor="name">Income Value</label>
      <input type="text" name="value" />

      <button type="submit">Add Income</button>
    </form>
  );
};

export default Form;
