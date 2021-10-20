import { useState } from "react/cjs/react.development";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

function NewExpense(props) {
  const [show, setShow] = useState(false);
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setShow(false);
  };

  const clickHandler = () => {
    setShow(true);
  };

  const hideHandler = () => {
    setShow(false);
  };
  return (
    <div className="new-expense">
      {!show && <button onClick={clickHandler}>Add New Expense</button>}
      {show && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onHide={hideHandler}
        />
      )}
    </div>
  );
}

export default NewExpense;
