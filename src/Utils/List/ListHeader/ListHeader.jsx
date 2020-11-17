import React from 'react';
import {styles} from './styles.js';

export default function Item() {
  return (
    <div style={styles.Main}>
      <p>Номер</p>
      <p>Название</p>
      <p>Приоритет</p>
      <p>Цена</p>
    </div>
  );
}
