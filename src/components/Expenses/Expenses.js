import ExpenseFilter from './ExpenseFilter'
import ExpensesList from "./ExpensesList";
import React, { useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseChart from './ExpenseChart';
function Expenses(props) {
  const [filteredYear, setfilteredYear] = useState('2020');
  const filterChangeHandler = (selectedYear) => {
    setfilteredYear(selectedYear);
  };
  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;});
    console.log(filteredExpenses);
    
  return (
    <div>

      <Card className="expenses">
        
        <ExpenseFilter
          selected={filteredYear}
          onfilterChange={filterChangeHandler}
        />
        <ExpenseChart expenses ={filteredExpenses}/>
       <ExpensesList items = {filteredExpenses}/>
        
      </Card>
    </div>
  );
}
export default Expenses;
// {filteredeExpenses.length === 0 && <p> No expenses found.</p>}
// {filteredeExpenses.length > 0  &&  filteredeExpenses.map((expense) => (
//   <ExpenseItem
//     key = {expense.id}
//     title= {expense.title}
//     amount= {expense.amount}
//     date= {expense.date}
    
//   />
// ))}
//  abusing and operator if the statement before the&& is true then it renders the second part of the statement hrlps writing cleaner codes
// filter inbuilt js funciton returns true or false
// key prop so react doesnt visit every item while we add new one so we add unique id it doesnt know where to add new item because no id so can now efficiently works.. so adding id while using map is iportant
//  array map method takes an array creates a new array using some
// tranformation tranforms every element map takes a function and is
// executed on every item
// we can only commmunicate parent to child and from child to parent, so we utilize closet parent component which have boht the  child connected
