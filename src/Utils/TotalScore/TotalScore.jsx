import React from 'react';
import useMyContext from '../MyContext/MyContext.jsx'
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

export default function TotalScore(props) {
  const {state} = useMyContext();

  const totalScore = state.items.reduce((a, e) => a + e.cost, 0);

  return (
    <Box style={props.style}>
      <Typography variant="h4">Общий счетчик</Typography>
      <Typography>{totalScore + ' Рублей'}</Typography>
      <Typography variant="h5">Текущая сумма</Typography>
      {/* <Typography>{currentScore + ' Рублей'}</Typography> */}
    </Box>
  );
}
