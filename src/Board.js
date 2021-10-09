import Square from "./Square";
const Board = (props) => {
  return (
    <div id="board">
      {props.squares.map((square, index) => (
        <Square key={index} value={square} onClick={() => props.handleClick(index)} />
      ))}
    </div>
  ) 
}

export default Board;
