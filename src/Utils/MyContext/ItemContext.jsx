import React, { useContext, useReducer } from 'react';

const SortedContext = React.createContext({});

const initialSortedState = { };

const SortedItemsReducer = (state, action) => {
  const data = { ...state, ...action };
  // тут луше бы сравнить два объекта и сделать что-то типа такого
  // return equal ? state : data;
  // но иногда можно и положить хуй
  return data;
}

const ContextSortedItemsProvider = props => {
  const { SortedItemsReducer, initialSortedState, children } = props;
  const [sortedItems, sortedDispatch] = useReducer(SortedItemsReducer, initialSortedState);
  return <SortedContext.Provider value={{ sortedItems, sortedDispatch }}>{children}</SortedContext.Provider>;
}

const SortedContextConsumer = SortedContext.Consumer;

const useSortedContext = () => useContext(SortedContext);

export { SortedContext, ContextSortedItemsProvider, SortedContextConsumer, initialSortedState, SortedItemsReducer};
export default useSortedContext;