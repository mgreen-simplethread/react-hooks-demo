import React, { createContext, useReducer, useContext } from 'react';
import { filter } from './util';

const API_URL = 'https://api.ipify.org/?format=json';

const AppContext = createContext();

const initialState = {
  tasks: {},
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
      tasks = filter(state.tasks, (id) => parseInt(id, 10) !== action.index + 1);
      return {
        ...state,
        tasks,
      };
    case 'TASK_ADD':
      const ids = Object.keys(state.tasks);
      const newId = parseInt(ids[ids.length - 1] || '0', 10) + 1;
      tasks = {
        ...state.tasks,
        [newId]: action.task,
      };
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

export { AppContext };

export function AppContextProvider(props) {
  let [state, dispatch] = useReducer(reducer, initialState);

  // Grouping async actions together into this object is analagous to using a thunk in a Redux action creator.
  // We can also make action creators for synchronous dispatch calls to make our code more Reduxy, too.
  let actions = {
    async fetchIP() {
      dispatch({ type: 'IP_REQUEST' });
      const resp = await fetch(API_URL);
      const { ip } = await resp.json();
      dispatch({ type: 'IP_RECEIVE', ip });
    },
    resetIP() {
      dispatch({ type: 'IP_RESET' });
    },
    incrementCounter() {
      dispatch({ type: 'COUNTER_INC' });
    },
    decrementCounter() {
      dispatch({ type: 'COUNTER_DEC' });
    },
    addTask(task) {
      dispatch({ type: 'TASK_ADD', task });
    },
    removeTask(index) {
      dispatch({ type: 'TASK_REMOVE', index });
    },
  };

  let value = { state, dispatch, actions };

  return <AppContext.Provider value={value}>{props.children}</AppContext.Provider>;
}

export const AppContextConsumer = AppContext.Consumer;

export const useAppContext = () => useContext(AppContext);
