import React from "react";
import "./ExpenseItem.css";
const ExpenseItem = (props) => {
    const month = props.expense.date.toLocaleString('en-US', {month : 'long'});
    const day = props.expense.date.getDate();
    const year = props.expense.date.getFullYear();

    return(
        <div className="Expense">
            <div className="Expense-date">
                <div>{month}</div>
                <div>{day}</div>
                <div>{year}</div>
            </div>
            <div className="Expense-title">{props.expense.title}</div>
            <div className="Expense-amount">$ {props.expense.amount}</div>
        </div>
    );
}
export default ExpenseItem;