import { useState } from "react";
import './App.css';
function App(){
const [num1,setNum1]= useState()
const [num2,setNum2]= useState()
const [result,setResult]= useState()
let num1Change=(num)=>{
   setNum1(Number(num))
}
let num2Change=(num)=>{
  setNum2(Number(num))
}
let Addition=(num1,num2)=>{
  setResult(num1+num2)
  console.log(num1,num2)
}
let Substraction=(num1,num2)=>{
  setResult(num1-num2)
}
let Multiplication=(num1,num2)=>{
  setResult(num1*num2)
}
let Division=(num1,num2)=>{
  setResult(num1/num2)
}

return(
  <>
  <div className="calculator-container">
    <div>
  <div>
    <label htmlFor="num1">first number</label>
    <input type="number" onChange={(e)=>{num1Change(e.target.value)}} />
  </div>
  <div>
    <label htmlFor="num2">second number</label>
    <input type="number" onChange={(e)=>{num2Change(e.target.value)}} />
  </div>
  </div>
  <div>
     <button onClick={(e)=>{Addition(num1,num2)}}>+</button>
     <button onClick={(e)=>{Substraction(num1,num2)}}>-</button>
     <button onClick={(e)=>{Division(num1,num2)}}>/</button>
     <button onClick={(e)=>{Multiplication(num1,num2)}}>*</button>
  </div>
  
  <h2>Result:{result}</h2>
  </div>
  </>
)
}
export default App;