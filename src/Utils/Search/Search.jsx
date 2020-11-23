import React, { useEffect, useState } from 'react';
import './style.css';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import RangeSlider from './RangeSlider.jsx';
import useMyContext from '../MyContext/MyContext.jsx';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';

export default function Search(props) {
  const { state, dispatch } = useMyContext();

  const [name, setName] = useState('');
  const [priority, setPriority] = useState({
    red: true,
    yellow: true,
    green: true
  });
  const [value, setValue] = useState({ min: 0, max: 0 });

  const handleChange = (event) => {
    setPriority({ ...priority, [event.target.name]: event.target.checked });
  };

  function find() {
    const selectedPriority = Object.keys(priority).filter(k => priority[k]);
    dispatch({
      name,
      priority: selectedPriority,
      cost: value,
    });
  }

  function clear() {
    setName('');
    setPriority({
      red: true,
      yellow: true,
      green: true
    });

    dispatch({
      name: '',
      priority: ['red','green','yellow']
    });
  }

  return (
    <Box className="search" style={props.style}>
      <Typography>Поиск: </Typography>
      <TextField type="text" name="" id="" onChange={(e) => { setName(e.target.value) }} value={name} />
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
      <FormGroup row style={{justifyContent: "center"}}>
        <Button onClick={find}>Искать</Button>
        <Button onClick={clear}>Сбросить</Button>
      </FormGroup>
    </Box>
  );
}

