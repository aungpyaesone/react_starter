import React from "react";
import { Alert } from "react-bootstrap";

const Todo = (pros) =>{
    return(
        <div>
            <Alert key='primary' variant='primary'>
                {pros.data}
            </Alert>
        </div>
    )
}

export default Todo;