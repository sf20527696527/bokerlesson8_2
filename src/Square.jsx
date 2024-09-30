import "./Square.css";

function Square(props) {
    return (<div className="square" onClick={()=>{props.turn(props.ind)}}>
        {props.myValue}
    </div>);
}

export default Square;