import "./Expense.css";
import Card from "./Card";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpenseChart from "./ExpenseChart";
function Expense(props) {
  const [filterYear, setFilteredYear] = useState("2020");
  const filterChangeHandler = (filterValue) => {
    setFilteredYear(filterValue);
  };

  const filteredResultsArray = props.items.filter((item) => {
    // Create a new array by filtering existing array and returns boolean
    return item.date.getFullYear().toString() === filterYear;
  });
  return (
    <>
      <Card className="expenses">
        <ExpensesFilter
          selectedFilter={filterYear}
          onDropDown={filterChangeHandler}
        />
        <ExpenseChart expense={filteredResultsArray} />
        <ExpensesList items={filteredResultsArray} />
      </Card>
    </>
  );
}

export default Expense;
