import './App.css';
import React from "react"
function App() {
  const START_TIME = 5;
// Initialize The state that will hold typing words data and
const [text,setText] = React.useState("");
const [startTime, setStartTime] = React.useState(5)
const [count , setCount] = React.useState(0)
const [timeLeft,setTimeLeft] = React.useState(startTime);
const [isTimeRunning,setTimeRunning] = React.useState(false)
const usetextAccesRef = React.useRef(null)
function wordCount (e){
 const val = e.target.value;
 setText(val)
 console.log(val)
}
function timel(e){
  const val = e.target.value;
  setStartTime(val);
}
function start(){
  setTimeRunning(true);
  setTimeLeft(startTime)
  usetextAccesRef.current.disabled = false;
  usetextAccesRef.current.focus();
  setText("")
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
    <h5> Take How much time You need (in sec ) :  </h5>
     <input type="number" value={startTime} onChange={timel} /> 
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
