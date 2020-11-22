import React from 'react';
import useMyContext from '../MyContext/MyContext.jsx'
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

export default function TotalScore(props) {
  const {state, dispatch} = useMyContext();

  let totalScore = 0;

  for (let key in state) {
    totalScore += +state[key].cost;
  }

  return (
    <Box style={props.style}>
      <Typography variant="h4">Общий счетчик</Typography>
      <Typography>{totalScore + ' Рублей'}</Typography>
    </Box>
  );
}
