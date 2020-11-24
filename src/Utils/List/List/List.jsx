import React, { useState } from 'react';
import ListHeader from '../ListHeader/ListHeader.jsx';
import NewItem from '../NewItem/NewItem.jsx';
import Items from '../Items/Items.jsx';
import useMyContext from '../../MyContext/MyContext.jsx';
import Box from '@material-ui/core/Box';
import Modal from '../../Modal/Modal.jsx';

export default function List(props) {
  const { state, dispatch } = useMyContext();
  const [open, setOpen] = useState(false);
  const [text, setText] = useState('');

  function addNewItem(item) {
    const ModalMessage = validateNewItem(item);
    setText(ModalMessage);
    if (ModalMessage !== '') {
      setOpen(true);
      return;
    }

    if (isItemExist(item, state)) {
      setText('В списке уже есть эта вещь');
      setOpen(true);
      return
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
    return "Введите сумму";
  }
  return '';
}

function isItemExist(item, state) {
  const name = item.name;
  let exist = state.items.find(e => e.name.toLowerCase() === name.toLowerCase());
  exist = exist === undefined ? false : exist;
  return exist;
}
