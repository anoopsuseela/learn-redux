import React, { Component } from "react";
import Square from "./Square";
function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
export default class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      xIsNext: true
    };
  }
  handleClick(i) {
    const updated = this.state.squares.slice();
    if (calculateWinner(updated) || updated[i]) {
      return;
    }
    updated[i] = this.state.xIsNext ? "X" : "O";
    this.setState({ squares: updated, xIsNext: !this.state.xIsNext });
  }
  renderSquare(i) {
    return (
      <Square
        key={i}
        value={this.state.squares[i]}
        onClick={() => this.handleClick(i)}
      />
    );
  }
  renderRow(row = []) {
    return (
      <div className="board-row">{row.map(i => this.renderSquare(i))}</div>
    );
  }
  render() {
    const winner = calculateWinner(this.state.squares);
    let status;
    if (winner) {
      status = "Winner: " + winner;
    } else {
      status = "Next player: " + (this.state.xIsNext ? "X" : "O");
    }
    return (
      <div>
        <div className="status">{status}</div>
        {this.renderRow([0, 1, 2])}
        {this.renderRow([3, 4, 5])}
        {this.renderRow([6, 7, 8])}
      </div>
    );
  }
}
