import React from 'react';
import {styles} from './styles.js';
import Box from '@material-ui/core/Box';

const priorities = {
  red: "Высокий",
  yellow: "Средний",
  green: "Низкий"
}

export default function Item({number, name, priority, cost}) {
  return (
    <Box style={styles.Main}>
      <p>{number}</p>
      <p>{name}</p>
      <p style={{backgroundColor: priority, color: 'green' === priority ? 'white' : 'black'}}>{priorities[priority]}</p>
      <p>{cost + " руб"}</p>
    </Box>
  );
}
