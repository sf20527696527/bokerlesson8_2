import Square from "./Square";
import { useState } from "react";
import "./Board.css";
import win, { gameOver } from "./Utils";
//מה שממיביאם מאקספורט דיפולט מייבאים מחוץ לצומדיים ובאיזה שם שרוציםפ
//לכן בכל דף יכול להיות רק דגיפולט אחד
//כי כשמייביאם אותו לו אומרים את מה מייבאים בשמו 

function Board() {
    const [arr, setArr] = useState(new Array(9).fill(""));
    const [currentUser, setCurrentUser] = useState('X');
    function turn(index) {
        if (arr[index] || win(arr))
            return;

        let copy = [...arr];
        copy[index] = currentUser;
        setArr(copy)
        setCurrentUser(currentUser == 'X' ? "O" : "X")
    }

    // let message = <h1>the current player is: {currentUser}</h1>
    // if (win(arr))
    //     message = <h1> the winner is:{currentUser == "X" ? "O" : "X"}</h1>
    // else if (gameOver(arr))
    //     message = <h2>the game is over</h2>
    //אפשר להציג דברים לפי תנאי
    //1. על ידי השמה בתוך משתנה
    //2.if מקוצר
    //3. && 
    return (<div className="game">
        <h1>tic tac tow</h1>
        {win(arr) ? <h1> the winner is:{currentUser == "X" ? "O" : "X"}</h1> :
            gameOver(arr) ? <h2>the game is over</h2> :
                <h1>the current player is: {currentUser}</h1>}

        {/* {win(arr) && <h1> the winner is:{currentUser == "X" ? "O" : "X"}</h1>}
        {!win(arr) && gameOver(arr) && <h2>the game is over</h2>}
        {!win(arr) && !gameOver(arr) && <h1>the current player is: {currentUser}</h1>} */}
        <div className="board">


            {arr.map((item, index) => <Square turn={turn} key={index} ind={index} myValue={item} />)}
        </div>
    </div>);
}

export default Board;