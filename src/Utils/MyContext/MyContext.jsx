import React, {useContext, useReducer} from 'react';

const Context = React.createContext({});

const initialState = {
  items: [],
  name: '',
  priority: [],
  cost: [],
  max: 0
};

const reducer = (state, action = initialState) => {
  const data = { ...state, ...action };

  const max = data.items?.reduce((a, e) => {
    if (e.cost > a) a = e.cost;
    return a;
  }, 0)

  data.max = max;
  // тут луше бы сравнить два объекта и сделать что-то типа такого
  // return equal ? state : data;
  // но иногда можно и положить хуй
  return data;
};

const ContextProvider = props => {
  const { reducer, initState, children } = props;
  const [state, dispatch] = useReducer(reducer, initState);
  return <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>;
}

// то же что и
/*function ContextProvider({ reducer, initState, children }) {
  const [state, dispatch] = useReducer(reducer, initState);
  return <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>;
}*/

const ContextConsumer = Context.Consumer;

const useMyContext = () => useContext(Context);

export { Context, ContextProvider, ContextConsumer, initialState, reducer };
export default useMyContext;
