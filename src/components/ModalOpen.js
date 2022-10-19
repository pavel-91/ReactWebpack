import React, { useRef } from "react";
import { Modal, Button } from 'react-bootstrap';
import useClickOutside from "../hooks/useClickOutside";

const ModalOpen = ({show, title, onClose}) => {
  const clasess = ['alert', 'alert-success'];

  if(!show) {
    clasess.push('d-none')  
  }

  const root = useRef();
  useClickOutside(root, function(){
    if(show){
      onClose();
    }
  });

   return ( 
      <Modal.Dialog className={clasess.join(' ')} style={{ width: '18rem' }} ref={root}>
      <Modal.Header closeButton>
        <Modal.Title>Оформить заказ на {title} товара</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <p>Modal body text goes here.</p>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="primary" onClick={onClose}>Закрыть</Button>
      </Modal.Footer>
    </Modal.Dialog>
    );
}
 
export default ModalOpen;