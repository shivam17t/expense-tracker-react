import React, { useState } from "react";
import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import Expenses from "./Components/Expenses";
import NewExpense from "./Components/NewExpense/NewExpense";

const initial_expenses = [
  {
    id: "e1",
    title: "Car Insurance",
    amount: 30,
    date: new Date(2023, 3, 25),
  },
  {
    id: "e2",
    title: "Jeans",
    amount: 50,
    date: new Date(2023, 4, 29),
  },
  {
    id: "e3",
    title: "Utensils",
    amount: 100,
    date: new Date(2022, 6, 30),
  },
  {
    id: "e4",
    title: "Car",
    amount: 300,
    date: new Date(2021, 10, 25),
  },
];

function App() {
  const [expenses, setExpanses] = useState(initial_expenses);
  const addExpenseHandler = (items) => {
    setExpanses((prevExpense) => {return [items, ...prevExpense];});
  };
  return (
    <div className="App">
      <NavBar />
      <NewExpense addExpense={addExpenseHandler} />
      <Expenses exp={expenses} />
    </div>
  );
}

export default App;
