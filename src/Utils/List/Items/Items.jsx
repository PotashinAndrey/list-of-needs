import React, { useEffect, useState } from 'react';
import Item from '../Item/Item.jsx';
import useMyContext from '../../MyContext/MyContext.jsx';
import Box from '@material-ui/core/Box';

export default function Items() {
  const { state, dispatch } = useMyContext();

  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    const array = state.items.filter(item => {
      const name = !state.name || item.name.toLowerCase().includes(state.name.toLowerCase());
      const priority = !state.priority.length || state.priority.includes(item.priority);
      const range = !state.cost.length || item.cost >= state.cost[0] && item.cost <= state.cost[1]

      return name && priority && range;
    });

    setFiltered(array);
  }, [state]);

  function itemFocus(name, priority, cost, description) {
    dispatch({currentItem: {name: name, priority: priority, cost: cost, description: description }});
  }

  return (
    <Box>
      {filtered.map((item, i) => <Item onClick={itemFocus} number={i + 1} name={item.name} priority={item.priority} cost={item.cost} key={i} description={item.description} />)}
    </Box>
  );
}
