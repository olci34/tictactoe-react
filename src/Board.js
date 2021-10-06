import React, { Component } from "react";
import Square from "./Square";
class Board extends Component {
  handleClick = () => console.log("square click is handled");
  render() {
    return (
      <div id="board">
        <Square value="1" onClick={this.handleClick} />
        <Square value="2" onClick={this.handleClick} />
        <Square value="3" onClick={this.handleClick} />
        <Square value="4" onClick={this.handleClick} />
        <Square value="5" onClick={this.handleClick} />
        <Square value="6" onClick={this.handleClick} />
        <Square value="7" onClick={this.handleClick} />
        <Square value="8" onClick={this.handleClick} />
        <Square value="9" onClick={this.handleClick} />
      </div>
    );
  }
}

export default Board;
