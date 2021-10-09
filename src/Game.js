import { useState } from "react/cjs/react.development";
import Board from "./Board.js"
import checkWinner from "./checkWinner.js";

const Game = () => {
    const [boardHistory, setBoardHistory] = useState([Array(9).fill(null)])
    const [xIsNext, setXisNext] = useState(true)
    const [stepNumber, setStepNumber] = useState(0)
    const winner = checkWinner(boardHistory[stepNumber])

    const onClick = (i) => {
        const history = boardHistory.slice(0, stepNumber + 1);
        const newBoard = [...history[stepNumber]];
        if (newBoard[i] || winner) return;
        newBoard[i] = xIsNext ? "X" : "O"
        setBoardHistory([...history, newBoard])
        setStepNumber(history.length)
        setXisNext(!xIsNext)
    }

    const resetGame = () => {
        setBoardHistory([Array(9).fill(null)]);
        setStepNumber(0);
        setXisNext(true);
    }

    const jumpTo = (step) => {
        setXisNext(step % 2 === 0)
        setStepNumber(step)
    }

    const renderMoves = () => {
        const moves = boardHistory.map((_board, move) => {
            const text = move ? `Go to move ${move}` : 'Go to start'
            return (
                <li key={move}>
                    <button onClick={() => jumpTo(move)}>{text}</button>
                </li>
            )
        })
        return moves 
    }
    
    return (
        <>
            <Board squares={boardHistory[stepNumber]} handleClick={onClick}/>
            <p> {winner ? "Winner: " + winner : "Next Player: " + (xIsNext ? "X" : "O")} </p>
            {renderMoves()}
            <button onClick={resetGame}>Reset</button>
        </>
    )
}

export default Game