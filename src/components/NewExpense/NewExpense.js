import  { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
function NewExpense(props) {
  const [isEditing, setIsEditing] = useState(false);
  function SaveExpenseDataHandler(eneteredExpenseData) {
    const expenseData = {
      ...eneteredExpenseData,
      id: Math.random().toString(),
    };
    setIsEditing(false);
    props.onAddExpense(expenseData);
    console.log(expenseData);
  }
  function startEditingHandler() {
    setIsEditing(true);
  }
  function stopEditingHandler() {
    setIsEditing(false);
  }
  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={startEditingHandler}>Add New Expense</button>
      )}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={SaveExpenseDataHandler}
          onStopEditing={stopEditingHandler}
        />
      )}
    </div>
  );
}
export default NewExpense;
// react when updating a new item or expense ad it to last  but then goes and visits each expense ad change its content such that the top most is the added one so it visits every expense
