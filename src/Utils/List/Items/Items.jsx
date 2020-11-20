import React, {useState} from 'react';
import {styles} from './styles.js';
import Item from '../Item/Item.jsx';
import { useEffect } from 'react';
import useMyContext from '../../MyContext/MyContext.jsx';

export default function Items() {
  const {state, dispatch} = useMyContext();

  let list = [];

  for (let key in state) {
    list.push(state[key]);
  }

  return (
    <div> {/*style={styles.Main}*/}
      {list.map(( item, i) => <Item number={i + 1} name={item.name} priority={item.priority} cost={item.cost} key={i} />)}
    </div>
  );
}
