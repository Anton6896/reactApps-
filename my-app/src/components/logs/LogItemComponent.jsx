import React, { useState } from 'react'

import { ListGroup, Modal, Button, Badge } from 'react-bootstrap'


export default function LogItem({ item }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <ListGroup.Item action variant="light" key={item.id} as="li">
        <div className='row'>
          <div className='col-lg-8'>
            <p>{item.message}</p>
          </div>

          <div className='col-lg-2'>
            <Badge pill bg={item.attention ? "danger" : "success"}>
              {item.attention ? "need atention" : "all done"}
            </Badge>
          </div>

          <div className='col-lg-2'>
            <Button variant="info" onClick={handleShow}>
              update log
            </Button>
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
          <p>{item.date}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>Understood</Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}
