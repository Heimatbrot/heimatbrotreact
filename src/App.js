import React from 'react';
import './App.css';

var turn = "X"

function play(field) {
  if (field.innerText!=="X" && field.innerText!=="O"){
  if (turn === "X" ) {
    field.innerText = "X"
    turn = "O"
  } else {
    field.innerText = "O"
    turn = "X"
  }}
  else {
    console.log("not valid!")
  }
}

function App() {
  return (
    <div className="center">
      <h1>HB React</h1><h2>Tic Tac Toe</h2>
      <button className="gamegrid" id='but0' onClick={(event) => play(event.target)}> </button>
      <button className="gamegrid" id='but1' onClick={(event) => play(event.target)}> </button>
      <button className="gamegrid" id='but2' onClick={(event) => play(event.target)}> </button><br></br>
      <button className="gamegrid" id='but3' onClick={(event) => play(event.target)}> </button>
      <button className="gamegrid" id='but4' onClick={(event) => play(event.target)}> </button>
      <button className="gamegrid" id='but5' onClick={(event) => play(event.target)}> </button><br></br>
      <button className="gamegrid" id='but6' onClick={(event) => play(event.target)}> </button>
      <button className="gamegrid" id='but7' onClick={(event) => play(event.target)}> </button>
      <button className="gamegrid" id='but8' onClick={(event) => play(event.target)}> </button>
    </div>
  )
}

export default App;
