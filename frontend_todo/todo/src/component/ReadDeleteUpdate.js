import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import '../style.css';

export default function ReadDeleteUpdate() {
    const[APIdata, setAPIData] = useState(null)
    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/todo/`)
        .then((response) => {
            setAPIData(response.data);
        })
    }, [APIdata]);

    if(!APIdata){
        return(
            <div><h1>Loading Data...</h1></div>
        )
    }

    const deleteData = (id) => {
        axios.delete(`http://127.0.0.1:8000/api/todo/${id}`)
        .then((res)=>{
            setAPIData(null)
        });
    }

    const updateData = (id) => {
        axios.patch(`http://127.0.0.1:8000/api/todo/${id}`)
        .then((res)=>{
            setAPIData(null)
        });
    }

    function sideButton(id){
        return (
            <>
                <Button 
                    className="edit-btn"
                    variant="success"
                    onClick={()=> updateData(id)}
                >
                    Update
                </Button>
                <Button 
                    className="edit-btn" 
                    variant="danger" 
                    onClick={()=> deleteData(id)}
                >
                    Delete
                </Button>
            </>
        );
    }

    return(
        <div>
                {
                    APIdata.map(todo => {
                        return(
                            <>
                                <div className='task-box'>
                                    {todo.task}
                                </div>
                                <div>
                                    {sideButton(todo.id)}
                                </div>
                            </>

                        )
                    })
                }
        </div>
    );
}