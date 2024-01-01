import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import '../style.css';

export default function Create() {
    const [task, setTask] = useState("");
    const submitData = () => {
        axios.post(`http://127.0.0.1:8000/api/todo/`, { task })
    }

    return(
        <div className='mt-5'>
            <input 
                placeholder="Enter Task Here" 
                onChange={(e) => {setTask(e.target.value)}}
            />
            <Button 
                className="create-btn"
                onClick={submitData}
                variant="primary"
            >
                Add Task
            </Button>
        </div>
    )
}