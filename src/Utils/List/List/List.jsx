import React, {useState, useEffect} from 'react';
import ListHeader from '../ListHeader/ListHeader.jsx';
import NewItem from '../NewItem/NewItem.jsx';
import Items from '../Items/Items.jsx';
import useMyContext from '../../MyContext/MyContext.jsx';

export default function List(props) {
  const [items, setItems] = useState([]);
  const {state, dispatch} = useMyContext();

  useEffect(() => {
    if (items.join(',') === (state?.items || []).join(',')) return;
    dispatch(items)
  }, [items]);

  function addNewItem(item) {
    setItems([...items, item]);
  }

  return (
      <div style={props.style} id="lsit">
        <ListHeader />
        <NewItem onClick={addNewItem} />
        <Items />
      </div>
  );
}
