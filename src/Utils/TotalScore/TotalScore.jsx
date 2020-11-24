import React, { useState, useEffect } from 'react';
import useMyContext from '../MyContext/MyContext.jsx'
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

export default function TotalScore(props) {
  const { state } = useMyContext();

  const totalScore = state.items.reduce((a, e) => a + e.cost, 0);
  const totalNumberOfItems = state.items.length;
  const [currentScore, setCurrentScore] = useState(0);
  const [numberOfFiltred, setNumberOfFiltred] = useState(0);

  useEffect(() => {
    const array = state.items.filter(item => {
      const name = !state.name || item.name.toLowerCase().includes(state.name.toLowerCase());
      const priority = !state.priority.length || state.priority.includes(item.priority);
      const range = !state.cost.length || item.cost >= state.cost[0] && item.cost <= state.cost[1]

      return name && priority && range;
    });

    setCurrentScore(array.reduce((a, e) => a + e.cost, 0));
    setNumberOfFiltred(array.length);
  }, [state]);


  if (numberOfFiltred === totalNumberOfItems) {
    return (
      <Box style={props.style}>
        <Typography variant="h4">{`Сумма: ${totalScore} руб.`}</Typography>
        <Typography variant="h6">{`Всего элементов: ${totalNumberOfItems}`}</Typography>
      </Box>
    );
  } else if (totalNumberOfItems !== 0 && numberOfFiltred === 0) {
    return (
      <Box style={props.style}>
        <Typography variant="h5">{`нет элементов удовлетворяющих условиям поиска `}</Typography>
      </Box>
    )
  } else {
    return (
      <Box style={props.style}>
        <Typography variant="h4">{`Сумма: ${totalScore} руб.`}</Typography>
        <Typography variant="h6">{`Текущая сумма: ${currentScore} руб.`}</Typography>
        <Typography variant="h6">{`Показанно элементов: ${numberOfFiltred} из ${totalNumberOfItems}`}</Typography>
      </Box>
    )
  }

}
