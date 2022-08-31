import { useState } from "react";
import Expenses from "./components/expenses/expenses";
import NewExpense from "./components/new-expenses/new-expense";
import INITIAL_EXPENSES from "./data/expenses-array";

const App = () => {
  const [expenses, setExpenses] = useState(INITIAL_EXPENSES);
  console.log(expenses);

  const addExpenseHandler = expense => {
    setExpenses(prevExpenses => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </>
  );
};

export default App;
