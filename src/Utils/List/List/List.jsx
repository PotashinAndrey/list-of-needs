import React, {useState, useEffect} from 'react';
import ListHeader from '../ListHeader/ListHeader.jsx';
import NewItem from '../NewItem/NewItem.jsx';
import Items from '../Items/Items.jsx';


export default function List(props) {
  const [newItem, setNewItem] = useState();
  const [items, setItems] = useState([]);

  useEffect(() => { //! warn, could be better
    setItems((prev) => {
      if (!newItem) return [];
      let newArray = prev.slice();
      newArray.push(newItem);
      return newArray;
    });
  }, [newItem]);

  function createListItem(item) {
    setNewItem(item);
  }

  return (
    <div style={props.style} id="lsit">
      <ListHeader />
      <NewItem onClick={createListItem} />
      <Items listOfItems={items} />
    </div>
  );
}
