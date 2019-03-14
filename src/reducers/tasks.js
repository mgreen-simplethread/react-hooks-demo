import { filter } from '../util';

export default function tasks(state = {}, action) {
  switch (action.type) {
    case 'TASK_ADD':
      const ids = Object.keys(state);
      const newId = (parseInt(ids[ids.length - 1], 10) || 0) + 1;
      return {
        ...state,
        [newId]: action.task,
      };
    case 'TASK_REMOVE':
      return filter(state, (id) => parseInt(id, 10) !== action.index + 1);
    default:
      return state;
  }
}
