import React,{useState} from 'react'
import "./Cou.css"

const CounterAppHook = () => {

 let[count,setCount] = useState(0)

 let handleInc =()=>{
    setCount(count+1)
 }
 let handleDec =()=>{
    setCount(count-1)
 }
 let handleReset =()=>{
    setCount(count*0)
 }
  return (
    <>
    <center><h1>{count}</h1></center>
    <div className="but">
        <button onClick={handleInc} className="ton">Increment</button>
        <button onClick={handleDec} className="ton">Decrement</button>
        <button onClick={handleReset} className="ton">RESET</button>
    </div>
    </>
  )
}

export default CounterAppHook