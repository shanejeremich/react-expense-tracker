import Card from "../layout/card/card";
import ExpenseItem from "./expense-item/expense-item";
import "./expenses.scss";

const Expenses = ({ expenseArr }) => {
  return (
    <Card className="expenses">
      <ExpenseItem title={expenseArr[0].title} amount={expenseArr[0].amount} date={expenseArr[0].date} />
      <ExpenseItem title={expenseArr[1].title} amount={expenseArr[1].amount} date={expenseArr[1].date} />
      <ExpenseItem title={expenseArr[2].title} amount={expenseArr[2].amount} date={expenseArr[2].date} />
      <ExpenseItem title={expenseArr[3].title} amount={expenseArr[3].amount} date={expenseArr[3].date} />
    </Card>
  );
};

export default Expenses;
