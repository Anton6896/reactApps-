import React, { useState } from 'react'

import { ListGroup, Modal, Button, Badge } from 'react-bootstrap'
import Moment from 'react-moment';


export default function LogItem({ item }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <ListGroup.Item action variant="light" key={item.id} as="li">
        <div className='row'>
          <div className='col-lg-8' onClick={handleShow}>
            <p className='lh-1 mb-0'>{item.message}</p>
            <span className='fw-lighter'>
              updated at <Moment format='MMMM Do YYYY'>{item.date}</Moment>
            </span>
          </div>

          <div className='col-lg-2'>
            <Badge pill bg={item.attention ? "danger" : "success"} className='mt-2'>
              {item.attention ? "need atention" : "all done"}
            </Badge>
          </div>

          <div className='col-lg-2'>
            <button type="button" className="btn btn-outline-danger">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" 
              height="16" 
              fill="currentColor" 
              className="bi bi-trash3" viewBox="0 0 16 16">
                <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z" />
              </svg>
            </button>
          </div>
        </div>
      </ListGroup.Item>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>tech: {item.tech}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>{item.message}</p>
          <p>updated at <Moment format='MMMM Do YYYY h:mm'>{item.date}</Moment></p>
        </Modal.Body>

        <Modal.Footer>
          <div className='row'>
            <div className='col-lg-6'>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
            </div>
            <div className='col-lg-6'>
              <Button variant="primary" onClick={handleClose}>Understood</Button>
            </div>
          </div>

        </Modal.Footer>
      </Modal>
    </div>
  )
}
