import React, { useState } from "react";
import "./ExpenseFrom.css";
function ExpenseForm(props) {
  const [enteredTitle, seteneteredTitle] = useState("");
  const [enteredAmount, seteneteredAmount] = useState("");
  const [enteredDate, seteneteredDate] = useState("");
  // const [userInput,setUserInput]=useState({
  //   eneteredTitle : '',
  //   enteredAmount: '',
  //   eneteredDate: ''
  // });// pass an object insted
  const titlechangeHandler = (event) => {
    seteneteredTitle(event.target.value);
    console.log(enteredTitle);
    // setUserInput({
    //   ...userInput,// spread operator takes key value pait from one object and add to this object.. so it doesnt dump the other key value pairs, and wont get lost so copying the other or existing value using spread opertaor
    //   eneteredTitle: event.target.value,
    // });
  };
  const amountchangeHandler = (event) => {
    seteneteredAmount(event.target.value);
    // setUserInput({
    //   ...userInput,// spread operator takes key value pait from one object and add to this object..
    //   eneteredAmount: event.target.value,// whenevr we update state and it depends on the previous state so we should not pass it this way
    // });
    //   setUserInput((prevState) =>{
    //     return{
    //       ...prevState,
    //       enteredAmount: event.target.valueAsnumber// latest snap of prev state
    //     };
    //   });
    //  console.log(event.target.value);
  };
  const dateChangehandler = (event) => {
    seteneteredDate(event.target.value);
    // setUserInput({
    //   ...userInput,// spread operator takes key value pait from one object and add to this object..
    //   eneteredDate: event.target.valueAsDate,
    // });
  };
  //Generic handler function
  // const inputChangeHandler =(identifier, value) =>{
  //   if(identifier === 'title'){
  //     seteneteredTitle(value);
  //     console.log(value);
  //   } else if(identifier === 'date'){
  //     seteneteredDate(value);
  //   }else{
  //     seteneteredAmount(value);
  //   }
  // }
  const submitHandler = (event) => {
    event.preventDefault(); // request is not send anywhere so no request is sene=d
   
    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };
   props.onSaveExpenseData(expenseData);// we pass a pointer at the function by not including closed () so we execute it in the child component which inturn gives us the data in the parent component 
    seteneteredAmount('');
    seteneteredDate('');
    seteneteredTitle('');
  };
  //Two way binding by adding value property
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titlechangeHandler}
          />
        </div>

        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountchangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2025-12-31"
            value={enteredDate}
            onChange={dateChangehandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
      <button type="button" onClick ={props.onStopEditing}>Cancel</button>
        <button type="submit"> Add Expense</button>
      </div>
    </form>
  );
}
export default ExpenseForm;
