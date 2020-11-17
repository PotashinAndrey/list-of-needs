import React, { useState } from 'react';
import { styles } from './styles.js';

export default function NewItem(props) {
  const [open, setOpen] = useState(false);

  const [name, setName] = useState('');
  const [priority, setPriority] = useState('');
  const [cost, setCost] = useState('');



  if (open) {
    return (
      <div style={styles.Main}>
        <button style={styles.Button} onClick={()=>{props.onClick({name, priority, cost})}}>Добавить</button>
        <input type="text" placeholder="Название"  style={styles.Input} name="" id="" onChange={(e) => {setName(e.target.value)}} />
        <input type="text" placeholder="Приоритет" style={styles.Input} name="" id="" onChange={(e) => {setPriority(e.target.value)}} />
        <input type="text" placeholder="Цена"      style={styles.Input} name="" id="" onChange={(e) => {setCost(e.target.value)}} />
      </div>
    );
  } else {
    return (
      <div style={styles.BeforeClick}>
        <button style={styles.Button} onClick={() => setOpen(true)}>Добавить</button>
      </div>
    );
  }
}
