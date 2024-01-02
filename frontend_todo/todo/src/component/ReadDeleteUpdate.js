import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import '../style.css';

export default function ReadDeleteUpdate(prop) {
  const [APIdata, setAPIData] = useState(null)

  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/api/todo/`)
      .then((response) => {
        setAPIData(response.data);
      })
  }, [APIdata]);

  const deleteData = (id) => {
    axios.delete(`http://127.0.0.1:8000/api/todo/${id}`)
      .then((res) => {
        setAPIData(null)
      });
  }

  const updateData = (id, task) => {
    prop.setDataUpdate(task)
    prop.setIsShow(true)
    prop.setDataId(id)
  }

  function sideButton(id, task) {
    return (
      <>
        <Button
          className="edit-btn"
          variant="success"
          onClick={() => updateData(id, task)}
        >
          Update
        </Button>
        <Button
          className="edit-btn"
          variant="danger"
          onClick={() => deleteData(id)}
        >
          Delete
        </Button>
      </>
    );
  }

  if (!APIdata) {
    return (
      <div><h1>Loading Data...</h1></div>
    )
  }

  return (
    <div>
      {
        APIdata.map(todo => {
          return (
            <div className='container-task'>
              <div className='task-box'>
                {todo.task}
              </div>
              <div className='edit-btn-box'>
                {sideButton(todo.id, todo.task)}
              </div>
            </div>
          )
        })
      }
    </div>
  );
}