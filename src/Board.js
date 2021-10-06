import React, { Component } from "react";
import Square from "./Square";
class Board extends Component {
  render() {
    return (
      <div id="board">
        {this.props.squares.map((square, index) => (
          <Square key={index} value={square} onClick={() => this.props.handleClick(index)} />
        ))}
      </div>
    );
  }
}

export default Board;
