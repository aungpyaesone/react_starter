import React, { useState } from "react";
import './MainPage.css'
import { TextField,Box,Button } from "@mui/material";
import Todo from "../Work/Todo";

const MainPage = () =>{

    const [items,setItems] = useState(["Walk with dog","Pick up Joe","Go to the supermarket"])
    const [item,setItem] = useState()

    const addItem = (dataNew) =>{
        const newItems = [...items,dataNew]
        setItems(newItems)
    }

    const deleteItem = (key) =>{
        setItems((items) =>items.filter((item1,i)=>i!=key));
    }

    const deleteAll = () =>{
        setItems([]);
    }

    return(
        <div>
            <h1 className="heading"> What is on the calendar today? </h1>
            <Box className="inputMain"
            sx={{
                width:500,
                maxWidth:'100%',
            }}
            >

            <TextField fullWidth label="Add your items" id="fullWidth"
            onChange={e=>{setItem(e.target.value)}}
            ></TextField>
            </Box>
            <Button variant="contained" style={{'position':'absolute','top':'40%','left':'47%'}}
            onClick = {()=>addItem(item)}
            >Add</Button>
            <div className="items">
                {items.map((item,index)=>{
                    return ( <div><Todo data = {item}/>
                    <Button variant="cotained" onClick={()=>deleteItem(index)}>Delete</Button>
                    </div>
                    )
                })}
            </div>
            <Button variant="contained" style={{'position':'absolute','top':'40%','left':'52=%'}}
            onClick = {()=> deleteAll()}
            > Delet All</Button>

        </div>
    );
}

export default MainPage;