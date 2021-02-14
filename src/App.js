import './App.css';
import React from "react"
function App() {
// Initialize The state that will hold typing words data and
const [text,setText] = React.useState("");
const [count , setCount] = React.useState(0)
const [timeLeft,setTimeLeft] = React.useState(6);
const [isTimeRunning,setTimeRunning] = React.useState(false)
const usetextAccesRef = React.useRef(null)
function wordCount (e){
 const val = e.target.value;
 setText(val)
 console.log(val)
}
function start(){
  setTimeRunning(true);
  setTimeLeft(5)
  usetextAccesRef.current.disabled = false;
  usetextAccesRef.current.focus();
}
function end(){
  setTimeRunning(false)

  setCount(countTheWord(text));

}
React.useEffect(()=> {
  if( isTimeRunning && timeLeft > 0){
setTimeout(()=>{
  setTimeLeft(time => time - 1 )
},
1000)} else if(timeLeft === 0)(
 end()
)
  
},[timeLeft,isTimeRunning])
function countTheWord(){
 const wArray = text.trim().split(" ");
 const filterdata = wArray.filter(word => (word !== ""));
 return filterdata.length;
}
console.log(countTheWord())
  return (
    <div className="App">
    <h1> How Fast You can Type ? 

    </h1>
    <hr/>
    <textarea onChange={wordCount}  value={text} ref={usetextAccesRef}  disabled={!isTimeRunning}/>
    <hr/>
    <h5>Time Left: {timeLeft }</h5> 
    <button onClick={start} disabled={isTimeRunning}> Start Game!</button>
    <h5> Word Count : {count}</h5>
    </div>
  );
}

export default App;
