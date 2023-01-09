import React, { useReducer } from "react";
import { Button } from "react-bootstrap";
import { act } from "react-dom/test-utils";

const initialState = {
    firstCounter : 0,
    secondCounter : 10
}

const reducer = (state,action) =>{
    switch(action.type){
        case 'increment':
            return {...state,firstCounter: state.firstCounter + action.value};
        case 'decrement':
            return {...state,firstCounter : state.firstCounter - action.value};
        case 'increment2':
            return {...state,secondCounter: state.secondCounter + action.value};
        case 'decrement2':
            return {...state,secondCounter : state.secondCounter - action.value};
        case 'reset' :
            return initialState
        default :
            return state
    }
}

const CounterTwo = () =>{
    const [count,dispatch] = useReducer(reducer,initialState)
    return(
        <div>
            Count - {count.firstCounter} <br/>
            Count - {count.secondCounter}
            <div>
            <Button type="button" onClick={()=>dispatch({type: 'increment', value: 1})}>Increment</Button>
            <Button type="button" onClick={() =>dispatch({type: 'decrement', value :1})}>Decrement</Button>
            <Button type="button" onClick={()=>dispatch({type: 'increment', value: 5})}>Increment 5</Button>
            <Button type="button" onClick={() =>dispatch({type: 'decrement', value :5})}>Decrement 5</Button>
            <Button type="button" onClick={()=> dispatch({type: 'reset'})}>Reset</Button>
            </div>
            <div>
            <Button type="button" onClick={()=>dispatch({type: 'increment2', value: 1})}>Increment2</Button>
            <Button type="button" onClick={() =>dispatch({type: 'decrement2', value :1})}>Decrement2</Button>
          
            </div>
        </div>
    
    )
}

export default CounterTwo;