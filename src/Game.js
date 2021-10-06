import React, {Component} from "react";
import Board from "./Board.js"
class Game extends Component {
    constructor(props) {
        super(props)
        this.state = {board: Array(9).fill(null), isNext: true}
    }

    onClick = (value) => console.log(`${value} is clicked`)
    render() {
        console.log('game rendered')
        return (
            <div>
                <Board squares={this.state.board} handleClick={this.onClick}/>
            </div>
        )
    }
}
export default Game