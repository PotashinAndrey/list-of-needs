import React from 'react';
import useMyContext from '../MyContext/MyContext.jsx'

export default function TotalScore(props) {
  const {state, dispatch} = useMyContext();

  let totalScore = 0;

  for (let key in state) {
    totalScore += +state[key].cost;
  }

  return (
    <div style={props.style}>
      <h1>Общий счетчик</h1>
      <p>{totalScore + ' Рублей'}</p>
    </div>
  );
}
