import React, { useState, useEffect } from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import useMyContext from '../MyContext/MyContext.jsx';
import './style.css';


export default function Information(props) {
  const { state, dispatch } = useMyContext();
  const [description, setDescription] = useState(state.currentItem.description);

  const name = state.currentItem.name;
  const cost = state.currentItem.cost;
  const priority = state.currentItem.priority;

  const colors = {
    red: "Высокий",
    yellow: "Средний",
    green: "Низкий"
  }

  useEffect(() => {
    dispatch({name, priority, cost, description, type: 'addDescription'});
  }, [description]);

  useEffect(() => {
    setDescription(state.currentItem.description)
  }, [state])

  if (state.currentItem.name === '') {
    return (
      <Box style={props.style}>
        <Typography>Кликните по элементу списка, чтобы посомтреть больше информации или редактировать его.</Typography>
      </Box>
    );
  } else {
    return (
      <Box style={props.style}>
        <Typography variant="h5">{`Название:${name}`}</Typography>
        <Typography variant="h5">{`Стоимость: ${cost} руб.`}</Typography>
        <Typography style={{backgroundColor: priority}} variant="h5">{`Приоритет: ${colors[priority]}`}</Typography>
        <textarea className="description" placeholder="Введите описание" onChange={e => setDescription(e.target.value)} value={description} ></textarea>
      </Box>
    );
  }
}

