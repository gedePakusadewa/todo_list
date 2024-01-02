import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';
import '../style.css';

export default function UpdateModal(prop) {
  const defaultTextInput = "Enter Task Here"
  const [task, setTask] = useState("");
  const [show, setShow] = useState(true);
  const handleClose = () => {
    setShow(false)
    prop.setIsShow(false)
  };
  const submitData = () => {
    axios.patch(`http://127.0.0.1:8000/api/todo/${prop.dataId}`, { task })
    setShow(false)
    prop.setIsShow(false)
  }

  useEffect(()=> {
    setTask(prop.dataUpdate)
  },[]);

  return(
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update Data</Modal.Title>
        </Modal.Header>
        <Modal.Body>
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
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>      
  )
}