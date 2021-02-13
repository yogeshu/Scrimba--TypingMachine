import './App.css';
import React from "react"
function App() {
// Initialize The state that will hold typing words data and
const [text,setText] = React.useState("");

function wordCount (e){
 const val = e.target.value;
 setText(val)
 console.log(val)
}

  return (
    <div className="App">
    <h1> How Fast You can Type ? 

    </h1>
    <hr/>
    <textarea onChange={wordCount} value={text} />
    <hr/>
    <h5>Time Left: Time</h5> 
    <button  > Start Game!</button>
    <h5> Word Count</h5>
    </div>
  );
}

export default App;
