import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import '../style.css';

export default function Create() {
  const defaultTextInput = "Enter Task Here"
  const emptyText = ""
  const [task, setTask] = useState(emptyText);
  
  const submitData = () => {
    axios.post(`http://127.0.0.1:8000/api/todo/`, { task })
    setTask(emptyText)
  }

  return(
    <div className='mt-5'>
      <input 
        placeholder={defaultTextInput}
        value={task}
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