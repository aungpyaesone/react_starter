import React from "react";
import './Home.css';
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const TodoHome = () =>{
    const navigate = useNavigate()
    return (
        <div className="mainHome">
            <h1 className="headingHome">Welcome to the to do list App!</h1>
            <Button variant="outline-primary" className="buttonGetStart"
            onClick={()=>{navigate('/main')}}>Get Started</Button>{' '}
        </div>
    )
}

export default TodoHome;