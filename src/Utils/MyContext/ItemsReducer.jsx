import React, { useReducer } from 'react';

export default function ItemsReducer(state, action, init) {
  switch (action.type) {
    case 'reset':
      return state;
    case 'sort': {
      let length = 0;
      for (let key in state) {
        if (+key + 1 > length) length = +key + 1;
      }

      let itemsArray = Array.from(Object.assign({}, state, { length }));
      let sortedArray = [];

      for (let i = 0; i < itemsArray.length; i++) {
        const currentItem = validate(itemsArray[i], action);
        if (currentItem) sortedArray.push(currentItem);
      }

      return sortedArray;
    };
    case 'payload':
      return init(action.payload);
    default:
      return state;
  }

  function init(initItems) {
    return initItems;
  }

  function validate(item, action) {
    let colors = [];

    for (let key in action.priority) {
      if (action.priority[key]) colors.push(key);
    }

    if (item.name.includes(action.name)) {
      if (colors.includes(item.priority)) {
        if (+item.cost <= +action.cost.max && +item.cost >= +action.cost.min) {
          return item;
        }
      }
    }
    return null;
  }
}

