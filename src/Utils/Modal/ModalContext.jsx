import React, {useContext} from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Modal from './Modal.jsx';

export default function useModal() {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState('');
  let ModalComponent = {};

  function openModal(text) {
    setOpen(true);
    setText(text);
  }

  function closeModal() {
    setOpen(false);
  }

  useEffect(() => {
    if (open) {
      ModalComponent = <Modal text={text} />
    } else {
      ModalComponent = {};
    }
  }, [open]);

  return {openModal, closeModal, ModalComponent};
}
