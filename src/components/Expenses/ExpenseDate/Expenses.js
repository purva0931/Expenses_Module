import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
// import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import React, { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");

  const yearChangeHandler = (selecteYear) => {
    setFilteredYear(selecteYear);
  };

  const filteredOne = props.expenses.filter((expenses) => {
    return expenses.date.getFullYear().toString() === filteredYear;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onYearChange={yearChangeHandler}
      />
      <ExpensesChart expenses={filteredOne} />
      <ExpensesList item={filteredOne} />
    </Card>
  );
}

export default Expenses;
