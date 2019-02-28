import React, { createContext, useReducer } from 'react';

const API_URL = 'https://api.ipify.org/?format=json';

const AppContext = createContext();

const initialState = {
  tasks: [],
  counter: 0,
  ipAddress: '',
  loading: false,
};

// Reducers can only do synchronous operations. Instead of thunks, put async code into action functions inside the
// provider component.
const reducer = (state, action) => {
  console.debug('ACTION DISPATCH :: %s %O', action.type, action);

  let tasks;

  switch (action.type) {
    case 'CLEAR':
      return initialState;
    case 'TASK_REMOVE':
      tasks = [...state.tasks];
      tasks.splice(action.index, 1);
      return {
        ...state,
        tasks,
      };
    case 'TASK_ADD':
      return {
        ...state,
        tasks: [...state.tasks, action.task],
      };
    case 'TASK_UPDATE':
      tasks = [...state.tasks];
      tasks.splice(action.index, 1, action.task);
      return {
        ...state,
        tasks,
      };
    case 'COUNTER_INC':
      return {
        ...state,
        counter: state.counter + 1,
      };
    case 'COUNTER_DEC':
      return {
        ...state,
        counter: state.counter - 1,
      };
    case 'IP_REQUEST':
      return {
        ...state,
        loading: true,
        ipAddress: '',
      };
    case 'IP_RECEIVE':
      return {
        ...state,
        loading: false,
        ipAddress: action.ip,
      };
    case 'IP_RESET':
      return {
        ...state,
        loading: false,
        ipAddress: '',
      };
    default:
      console.warn('invalid action called: %s', action.type);
      return state;
  }
};

function AppContextProvider(props) {
  const [state, dispatch] = useReducer(reducer, initialState);

  // Grouping async actions together into this object is analagous to using a thunk in a Redux action creator:
  const actions = {
    async fetchIP() {
      dispatch({ type: 'IP_REQUEST' });
      const resp = await fetch(API_URL);
      const { ip } = await resp.json();
      dispatch({ type: 'IP_RECEIVE', ip });
    },
  };

  const value = { state, dispatch, actions };

  return <AppContext.Provider value={value}>{props.children}</AppContext.Provider>;
}

const AppContextConsumer = AppContext.Consumer;

export { AppContext, AppContextProvider, AppContextConsumer };
