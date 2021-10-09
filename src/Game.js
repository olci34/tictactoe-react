import React, {Component} from "react";
import { useState } from "react/cjs/react.development";
import Board from "./Board.js"
import checkWinner from "./checkWinner.js";

const Game = (props) => {
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
    
    return (
        <>
            <Board squares={boardHistory[stepNumber]} handleClick={onClick}/>
            <p> {winner ? "Winner: " + winner : "Next Player: " + (xIsNext ? "X" : "O")} </p>
            
        </>
    )
}
// class Game extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {boardHistory: [Array(9).fill(null)], xIsNext: true, stepNumber: 0}
//     }
    
//     onClick = (i) => {
//         const history = this.state.boardHistory.slice(0, this.state.stepNumber + 1)
//         const currBoard = [...history[this.state.stepNumber]]
//         const winner = checkWinner(currBoard)
//         if (winner || currBoard[i]) return;
//         currBoard[i] = this.state.xIsNext ? "X" : "O";
//         const newBoardHistory = [...history, currBoard]
//         this.setState({boardHistory: newBoardHistory, xIsNext: !this.state.xIsNext, stepNumber: history.length})
//     }

//     jumpTo = (stepNumber) => {
//         const nextPlayer = (stepNumber % 2 === 0)
//         this.setState({...this.state, stepNumber: stepNumber, xIsNext: nextPlayer})
//     }

//     renderMoves = () => {
//         const moves = this.state.boardHistory.map((_board, move) => {
//             const destination = move ? `Go to move #${move}` : 'Go to Start'
//             return (
//                 <li key={move}>
//                     <button onClick={() => this.jumpTo(move)}>{destination}</button>
//                 </li>
//             )
//         })
//         return moves
//     }

//     render() {
//         const currBoard = this.state.boardHistory[this.state.stepNumber]
//         const winner = checkWinner(currBoard)
//         return (
//             <>
//                 <Board squares={currBoard} handleClick={this.onClick}/>
//                 <p> {winner ? "Winner: " + winner : "Next Player: " + (this.state.xIsNext ? "X" : "O")} </p>
//                 {this.renderMoves()}
//                 <button onClick={() => this.setState({boardHistory: [Array(9).fill(null)], xIsNext: true, stepNumber: 0})}>Reset</button>
//             </>
//         )
//     }
// }
export default Game