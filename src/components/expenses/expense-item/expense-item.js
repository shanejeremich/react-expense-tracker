import Card from "../../layout/card/card";
import ExpenseDate from "../expense-date/expense-date";
import "./expense-item.scss";

const ExpenseItem = ({ date, title, ...props }) => {
  let amount = Number(props.amount).toFixed(2);

  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={date} />
        <div className="expense-item__description">
          <h2>{title}</h2>
          <div className="expense-item__price">{`$${amount}`}</div>
        </div>
      </Card>
    </li>
  );
};

export default ExpenseItem;
