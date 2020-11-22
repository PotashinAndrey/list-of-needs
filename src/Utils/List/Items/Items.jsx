import React from 'react';
import Item from '../Item/Item.jsx';
import useMyContext from '../../MyContext/MyContext.jsx';
import Box from '@material-ui/core/Box';

export default function Items() {
  const {state, dispatch} = useMyContext();

  let list = [];

  for (let key in state) {
    list.push(state[key]);
  }

  return (
    <Box> {/*style={styles.Main}*/}
      {list.map(( item, i) => <Item number={i + 1} name={item.name} priority={item.priority} cost={item.cost} key={i} />)}
    </Box>
  );
}
