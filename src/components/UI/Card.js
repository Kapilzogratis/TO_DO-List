import './Card.css';
function Card(props){
    const classes = "card " + props.className;// card kai baad white space is mandotory for it to work
    return <div className={classes}>{props.children}
    </div>;
}
export default Card;
