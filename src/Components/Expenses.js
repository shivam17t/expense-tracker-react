import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseChart from "./ExpenseChart";

const Expenses = (props) => {

  const [selectedYear, setSelectedYear] = useState("2020");

  const YearFilterHandler = (FilteredYear) => {
    setSelectedYear(FilteredYear);
  };

  const FilteredExpense = props.exp.filter((item) => {
    return item.date.getFullYear().toString() === selectedYear;
  });

  return (
    <div>
      <ExpenseFilter selected={selectedYear} Filter={YearFilterHandler} />
      <ExpenseChart filteredData={FilteredExpense} />
      {FilteredExpense.length === 0 && (
        <p style={{ fontSize: "30px", textAlign : "center" }}>No expenses in this year</p>
      )}
      {FilteredExpense.map((items) => (
        <ExpenseItem expense={items} />
      ))}
    </div>
  );
};

export default Expenses;
