import React from 'react';
import './App.css';

function changetest(){
  document.getElementById("changetest_paragraph").innerText = "it workz";
  return
}

function App() {
  return (
    <div class = "center">
          <h1>React</h1>
          <p id="changetest_paragraph">Versuch Nr. 1</p>
          <button onClick={changetest}>Klick mich</button>
    </div>
  )
}


export default App;
