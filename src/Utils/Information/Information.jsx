import React from 'react';

export default function Information(props) {
  return (
    <div style={props.style}>
      <h1>Название</h1>
      <p>Цена</p>
      <p>Приоритет</p>
      <p>Описание</p>
    </div>
  );
}
