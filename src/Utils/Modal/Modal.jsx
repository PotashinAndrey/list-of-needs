import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import './style.css';

export default function Modal({ text, open = false, onClick }) {

  if (open) {
    return (
      <div className="main">
        <div className="body" >
          <h1>Внимание!</h1>
          <p>{text}</p>
          <Button onClick={() => onClick()}>Закрыть</Button>
        </div>
      </div>
    )
  } else {
    return (
      <React.Fragment></React.Fragment>
    )
  }
}