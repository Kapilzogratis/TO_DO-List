import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import Card from "../UI/Card";

function ExpenseItem(props) {
  // const [title, setTitle] = useState(props.title); // array destructing it returns array with first element(current state element) as intial value and the second one as the updated value
  // function clickHandler() {
  //   setTitle("updated!"); //component is execute again jsx code will evaluated
  //   console.log(title);//schedules still doesnt change revaluate the state 
  // };
  return (
    <li>
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price"> ${props.amount}</div>
      </div>
     
    </Card>
    </li>
  );
}
export default ExpenseItem;
