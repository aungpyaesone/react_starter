import React, { useReducer } from "react";
import { Button } from "react-bootstrap";

const initialState = 0

const reducer = (state,action) =>{
    switch(action){
        case 'increment':
            return state +1;
        case 'decrement':
            return state -1;
        case 'reset' :
            return initialState
        default :
            return state
    }
}

const CounterOne = () =>{
    const [count,dispatch] = useReducer(reducer,initialState)
    return(
        <div>
            {count}
            <div>
            <Button type="button" onClick={()=>dispatch('increment')}>Increment</Button>
            <Button type="button" onClick={() =>dispatch('decrement')}>Decrement</Button>
            <Button type="button" onClick={()=> dispatch('reset')}>Reset</Button>
            </div>
        </div>
    
    )
}

export default CounterOne;