import React, {Component} from "react";
import Board from "./Board.js"
import checkWinner from "./checkWinner.js";
class Game extends Component {
    constructor(props) {
        super(props)
        this.state = {board: Array(9).fill(null), xIsNext: true, winner: null}
    }

    
    onClick = (i) => { 
        const winner = checkWinner(this.state.board)
        const boardCopy = [...this.state.board]
        if (winner || boardCopy[i]) return;
        boardCopy[i] = this.state.xIsNext ? "X" : "O";
        this.setState({board: boardCopy, xIsNext: !this.state.xIsNext})
    }
    render() {
        const winner = checkWinner(this.state.board)
        return (
            <>
                <Board squares={this.state.board} handleClick={this.onClick}/>
                <div id='winner-div'>
                    <p>
                        {winner ? "Winner: " + winner : "Next Player: " + (this.state.xIsNext ? "X" : "O")}
                    </p>
                </div>
            </>
        )
    }
}
export default Game