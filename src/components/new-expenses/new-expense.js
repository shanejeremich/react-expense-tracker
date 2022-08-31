import { useState } from "react";
import ExpenseForm from "./expense-form/expense-form";
import "./new-expense.scss";

const NewExpense = ({ onAddExpense }) => {
  const [toggle, setToggle] = useState(false);

  const saveExpenseDataHandler = enteredExpenseData => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    onAddExpense(expenseData);
  };

  const toggleHandler = () => setToggle(!toggle);

  return (
    <div className="new-expense">
      {!toggle && <button onClick={toggleHandler}>Add New Expense</button>}
      {toggle && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} toggleHandler={toggleHandler} />}
    </div>
  );
};

export default NewExpense;
