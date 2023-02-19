import React from 'react';
import './App.css';

function changetest(){
  const possiblecomments = ["it works", "whup", "jejj"]
  const randomIndex = Math.floor(Math.random() * possiblecomments.length);
  const randomElement = possiblecomments[randomIndex];
  document.getElementById("changetest_paragraph").innerText = randomElement;
  return
}

function App() {
  return (
    <div class = "center">
          <h1>HB React</h1>
          <p id="changetest_paragraph">Versuch Nr. 1</p>
          <button onClick={changetest}>Klick mich</button>
    </div>
  )
}


export default App;
