import React, {Component} from "react";
import Board from "./Board.js"
import checkWinner from "./checkWinner.js";
class Game extends Component {
    constructor(props) {
        super(props)
        this.state = {board: Array(9).fill(null), xIsNext: true}
    }

    onClick = (i) => {
        const winner = checkWinner(this.state.board)
        const boardCopy = [...this.state.board]
        if (winner || boardCopy[i]) return;
        boardCopy[i] = this.state.xIsNext ? "X" : "O";
        this.setState({board: boardCopy, xIsNext: !this.state.xIsNext})
    }
    render() {
        return (
            <div>
                <Board squares={this.state.board} handleClick={this.onClick}/>
            </div>
        )
    }
}
export default Game