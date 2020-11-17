import React from 'react';
import {styles} from './styles.js';

export default function Item({number, name, priority, cost}) {
  return (
    <div style={styles.Main}>
      <p>{number}</p>
      <p>{name}</p>
      <p>{priority}</p>
      <p>{cost}</p>
    </div>
  );
}
