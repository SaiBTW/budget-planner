import React, { useState } from "react";

import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const newExpenseHandler = (enteredDetails) => {
    const newExpense = {
      ...enteredDetails,
      id: Math.random().toString(),
    };
    props.onNewExpense(newExpense);
    setIsEditing(false);
  };

  const addExpenseHandler = () => {
    setIsEditing(true);
  };

  const cancelEditingHandler = () => {
    setIsEditing(false);
  };

  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={addExpenseHandler}>Add Expense Item</button>
      )}
      {isEditing && (
        <ExpenseForm
          onAddingExpense={newExpenseHandler}
          onCancel={cancelEditingHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
