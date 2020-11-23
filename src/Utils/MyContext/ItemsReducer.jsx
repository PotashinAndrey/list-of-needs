import toArray from '../Tools/Tools.js';

export default function ItemsReducer(state, action, init) {
  switch (action.type) {
    case 'reset':
      return action.reset;

    case 'sort': {
      let itemsArray = toArray(state);
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

