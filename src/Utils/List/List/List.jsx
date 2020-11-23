import React, { useState } from 'react';
import ListHeader from '../ListHeader/ListHeader.jsx';
import NewItem from '../NewItem/NewItem.jsx';
import Items from '../Items/Items.jsx';
import useMyContext from '../../MyContext/MyContext.jsx';
import Box from '@material-ui/core/Box';
import Modal from '../../Modal/Modal.jsx';

export default function List(props) {
  const { state, dispatch } = useMyContext();
  // const [items, setItems] = useState([]);
  const [open, setOpen] = useState(false);
  const [text, setText] = useState('');

  // useEffect(() => {
  //   if (items.join(',') === (state?.items || []).join(',')) return;
  //   dispatch(items)
  //   console.log(items)
  // }, [items]);

  function addNewItem(item) {
    const ModalMessage = validateNewItem(item);
    setText(ModalMessage);
    if (ModalMessage !== '') {
      setOpen(true);
      return;
    }

    const items = state.items.concat(item);
    dispatch({ items });
  }

  return (
    <Box style={props.style} id="lsit">
      <ListHeader />
      <NewItem onClick={addNewItem} />
      <Items />
      <Modal text={text} open={open} onClick={() => setOpen(false)} /> {/*   */}
    </Box>
  );
}

function validateNewItem(item) {
  if (item.name.length === 0) {
    return 'Введите имя';
  }
  if (isNaN(item.cost) || +item.cost <= 0) {
    console.log(item.cost);
    return "Введите сумму";
  }
  return '';
}
