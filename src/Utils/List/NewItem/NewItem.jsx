import React, { useState } from 'react';
import SelectPriority from './SelectPriority/SelectPriority.jsx';
import { styles } from './styles.js';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';

export default function NewItem(props) {
  const [open, setOpen] = useState(false);

  const [name, setName] = useState('');
  const [priority, setPriority] = useState('green');
  const [cost, setCost] = useState(0);



  if (open) {
    return (
      <Box style={styles.Main}>
        <Button onClick={() => { props.onClick({ name, priority, cost }) }} variant="contained">Добавить</Button>
        <TextField onChange={(e) => { setName(e.target.value) }} label="Название" />
        <SelectPriority onChange={setPriority} ></SelectPriority>
        <TextField onChange={(e) => { setCost(e.target.value) }} label="Цена" />
      </Box>
    );
  } else {
    return (
      <Box style={styles.BeforeClick}>
        <Button onClick={() => setOpen(true)} variant="contained">Добавить</Button>
      </Box>
    );
  }
}
