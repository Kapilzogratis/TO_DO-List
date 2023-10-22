import  React,{useState}  from "react";// Import react from react in evry JSX file in pasr but now we use REACT DOM
import Expenses from"./components/Expenses/Expenses"
import NewExpense from "./components/NewExpense/NewExpense";


function App() {
  const DUMMY_EXPENSES = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2022, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2022, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];
  
 const [expenses,setExpenses] = useState(DUMMY_EXPENSES);

 const addExpenseHandler = (expense) =>{
setExpenses(prevExpenses => {return [expense,...prevExpenses]});
  };
  console.log(expenses);
  // return React.createElement('div',{},
  // React.createElement('h2',{},"Lets get Started"),
  // React.createElement(Expenses,{expenses : items})
  // );// Alternative the below code the below code gets converted to this under the hood therefore one wrapper we need div
  return (
   
    <div>
     <NewExpense onAddExpense = {addExpenseHandler} />
    <Expenses items = {expenses} />
    </div>
  );
}

export default App;
