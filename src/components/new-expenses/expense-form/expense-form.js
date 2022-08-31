import { useState } from "react";
import "./expense-form.scss";

const ExpenseForm = ({ onSaveExpenseData, toggleHandler }) => {
  const [userInput, setUserInput] = useState({
    title: "",
    amount: "",
    date: "",
  });
  const { title, amount, date } = userInput;

  const handleUserInput = e => {
    const { name, value } = e.target;
    setUserInput(prevState => ({ ...prevState, [name]: value }));
  };

  const submitHandler = e => {
    e.preventDefault();
    const expenseData = {
      title: title,
      amount: +amount,
      date: new Date(date),
    };
    onSaveExpenseData(expenseData);
    setUserInput({
      title: "",
      amount: "",
      date: "",
    });
    toggleHandler(false);
  };

  return (
    <form action="#" onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="">Title</label>
          <input type="text" name="title" value={title} onChange={handleUserInput} />
        </div>
        <div className="new-expense__control">
          <label htmlFor="">Amount</label>
          <input type="number" min="0.01" step="0.01" name="amount" value={amount} onChange={handleUserInput} />
        </div>
        <div className="new-expense__control">
          <label htmlFor="">Date</label>
          <input type="date" min="2019-01-01" max="2022-12-31" name="date" value={date} onChange={handleUserInput} />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={toggleHandler}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
