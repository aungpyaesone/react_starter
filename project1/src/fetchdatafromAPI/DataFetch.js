import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";

const DataFetch = () =>{
    const [post,setPosts] = useState([])
    const [id,setId] = useState([])
    const [idFromButtonClick,setIdFromButtonClick] = useState(1)

    const handleClick = () =>{
        setIdFromButtonClick(id)
    }

    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
        .then(res=> {console.log(res)
        setPosts(res.data)
        })
        .catch(error=> console.log(error))
    },[idFromButtonClick])

    return(
        <div>
            <input value={id} onChange={e=>setId(e.target.value)}/>
            <Button type="button"  onClick={handleClick}>Fetch Post</Button>
            <div>{post.title}</div>
            <ul>
                {/* {
                    post.map(post=> <li key={post.id}>{post.title}</li>)
                } */}
            </ul>

        </div>
    )
}

export default DataFetch;