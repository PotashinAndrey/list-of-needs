import React, {useState} from 'react';
import {styles} from './styles.js';
import Item from '../Item/Item.jsx';
import { useEffect } from 'react';

export default function Items({listOfItems}) {
  const [list, setList] = useState([]);

  useEffect(() => {
    const newList = listOfItems.map(( item, i) => <Item number={i + 1} name={item.name} priority={item.priority} cost={item.cost} key={i} />);
    setList(newList);
  }, [listOfItems])

  //const list = listOfItems.map(( item, i) => <Item number={i + 1} name={item.name} priority={item.priority} cost={item.cost} />)

  return (
    <div> {/*style={styles.Main}*/}
      {list}
    </div>
  );
}
