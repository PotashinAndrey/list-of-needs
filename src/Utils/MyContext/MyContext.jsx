import React, {useContext, useReducer} from 'react';

const Context = React.createContext({});

const initialState = {
  items: [],
  name: '',
  priority: [],
  cost: [],
  max: 0,
  currentItem: {name: '', priority: '', cost: 0, description: ''}
};

const reducer = (state, action = initialState) => {
  if (action.type === 'addDescription') {
    addDescription(action, state);
    return state;
  }

  const data = { ...state, ...action };

  const max = data.items?.reduce((a, e) => {
    if (e.cost > a) a = e.cost;
    return a;
  }, 0)

  data.max = max;

  return data;
};

const ContextProvider = props => {
  const { reducer, initState, children } = props;
  const [state, dispatch] = useReducer(reducer, initState);
  return <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>;
}

const ContextConsumer = Context.Consumer;

const useMyContext = () => useContext(Context);

export { Context, ContextProvider, ContextConsumer, initialState, reducer };
export default useMyContext;

function addDescription(newItem, state) {
  const index = state.items.findIndex(e => e.name.toLowerCase() === newItem.name.toLowerCase());
  if (index === -1) return;
  state.items[index].description = newItem.description;
  state.currentItem.description = newItem.description
  console.log(state);
}
