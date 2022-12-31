import React from "react";
import { useState } from "react";

export default function NComponent1(){
    const [numOne,setNumOne] = useState()
    const [numTwo,setNumTwo] = useState()
    const [operator,setOperator] = useState()
    const [result,setResult] = useState()

    function handleResult (){
        if(operator== '/'){setResult(numOne/numTwo)}
        else if(operator == '-'){setResult(numOne - numTwo)}
        else if (operator == '*') {setResult(numOne * numTwo)}
        else {setResult (numOne + numTwo)}
    }

    return(<div>
        <input onChange={(e)=>{setNumOne(parseInt(e.target.value))}}/>
        <select onChange={(e)=>{setOperator(e.target.value)}}>
          <option value='+'>plus</option>
          <option value='-'>minus</option>
          <option value='*'>multiply</option>
          <option value='/'>remainder</option>
        </select>
        <input onChange={(e)=>{setNumTwo(parseInt(e.target.value))}}/>
        <button onClick={handleResult}> Calculate </button>

        <h1> The Result is {result}</h1>
    </div>
    )
}