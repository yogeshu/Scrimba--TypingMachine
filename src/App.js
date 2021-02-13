import './App.css';
import React from "react"
function App() {
// Initialize The state that will hold typing words data and
const [text,setText] = React.useState("");
const [count , setCount] = React.useState(0)
const [timeLeft,setTimeLeft] = React.useState(6);
const [isTimeRunning,setTimeRunning] = React.useState(false)

function wordCount (e){
 const val = e.target.value;
 setText(val)
 console.log(val)
}
function start(){
  setTimeRunning(true);
}
function end(){
  setTimeRunning(false)
}
React.useEffect(()=> {
  if( isTimeRunning && timeLeft > 0){
setTimeout(()=>{
  setTimeLeft(time => time - 1 )
},
1000)}
else if(
 end()
)
  
},[timeLeft,isTimeRunning])
function countTheWord(){
 const word = text.trim().split(" ");
 const filterdata = word.filter(word => word !== " ");
 return filterdata.length;
}
console.log(countTheWord())
  return (
    <div className="App">
    <h1> How Fast You can Type ? 

    </h1>
    <hr/>
    <textarea onChange={wordCount} value={text}  disabled={!isTimeRunning}/>
    <hr/>
    <h5>Time Left: {timeLeft }</h5> 
    <button onClick={start} > Start Game!</button>
    <h5> Word Count : {count}</h5>
    </div>
  );
}

export default App;
