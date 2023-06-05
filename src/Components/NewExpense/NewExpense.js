import React from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
const NewExpense = (props) => {
  const dataExtract = (items) => {
    const expense = {id: Math.random().toString(), ...items};
    props.addExpense(expense);
  };
  return (
    <div className="new-expense-form">
      <ExpenseForm formData={dataExtract} />
    </div>
  );
};
export default NewExpense;
