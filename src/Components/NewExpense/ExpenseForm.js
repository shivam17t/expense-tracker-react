import "./ExpenseForm.css";
import React, { useState } from "react";
const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const titleHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const amountHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const dateHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const expense = {
      title: enteredTitle,
      amount: parseInt(enteredAmount),
      date: new Date(enteredDate),
    };
    // console.log(expense);
    setEnteredAmount("");
    setEnteredDate("");
    setEnteredTitle("");
    props.formData(expense);
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="form">
        <div className="expense_form">
          <label>Title</label>
          <input type="text" value={enteredTitle} onChange={titleHandler} />
        </div>
        <div className="expense_form">
          <label>Amount</label>
          <input
            type="number"
            value={enteredAmount}
            min="0.01"
            step="0.01"
            onChange={amountHandler}
          />
        </div>
        <div className="expense_form">
          <label>Date</label>
          <input
            type="date"
            value={enteredDate}
            min="2022-01-01"
            onChange={dateHandler}
          />
        </div>
        <div className="button_submit">
          <button type="submit">Add Expense</button>
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;
