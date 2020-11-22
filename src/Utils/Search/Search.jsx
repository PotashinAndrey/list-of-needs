import React, { useReducer, useState, useEffect } from 'react';
import './style.css';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import RangeSlider from './RangeSlider.jsx';
import useMyContext from '../MyContext/MyContext.jsx';
import ItemsReducer from '../MyContext/ItemsReducer.jsx';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import useSortedContext from '../MyContext/ItemContext.jsx';

export default function Search(props) {
  const { state, dispatch } = useMyContext();
  const { sortedItems, sortedDispatch} = useSortedContext();//!!!!!!!!!
  const [filtred, filtredDispatch] = useReducer(ItemsReducer, state);

  const [name, setName] = useState('');
  const [priority, setPriority] = useState({
    red: true,
    yellow: true,
    green: true
  });
  const [value, setValue] = useState({min: 0, max: 0});

  const handleChange = (event) => {
    setPriority({ ...priority, [event.target.name]: event.target.checked });
  };

  useEffect(() => {
    filtredDispatch({type: 'payload', payload: state})
  }, [state]);


  function find(name, priority, value) {
    filtredDispatch({
      type: 'sort',
      name: name,
      priority: priority,
      cost: value,
    });
    sortedDispatch(toArray(filtred)); //!!!!!!!!!!!!!!!!!!!!!!!!!!
  }

  return (
    <Box className="search" style={props.style}>
      <Typography>Поиск: </Typography>
      <TextField type="text" name="" id="" onChange={(e) => { setName(e.target.value) }} />
      <Typography>Приоритет: </Typography>
      <FormGroup row>
        <FormControlLabel
          control={<Checkbox checked={priority.red} onChange={handleChange} name="red" />}
          label="Высокий"
        />
        <FormControlLabel
          control={<Checkbox checked={priority.yellow} onChange={handleChange} name="yellow" />}
          label="Средний"
        />
        <FormControlLabel
          control={<Checkbox checked={priority.green} onChange={handleChange} name="green" />}
          label="Низкий"
        />
      </FormGroup>
      <RangeSlider onChange={setValue} ></RangeSlider>
      <Button onClick={() => find(name, priority, value)}>Искать</Button>
    </Box>
  );
}

function toArray(obj) { //!!!!!!!!!!!
  let length = 0;
  for (let key in obj) {
    if (+key + 1 > length) length = +key + 1;
  }

  return Array.from(Object.assign({}, obj, { length }));
}
