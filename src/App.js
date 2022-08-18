import Expenses from "./components/expenses/expenses";
import expenseArr from "./data/expenses-array";

const App = () => {
  return (
    <div>
      <Expenses expenseArr={expenseArr} />
    </div>
  );
};

export default App;
