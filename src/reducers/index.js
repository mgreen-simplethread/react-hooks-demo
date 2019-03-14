import { combineReducers } from '../util';
import counter from './counter';
import ipAddress from './ip-address';
import tasks from './tasks';

export default combineReducers({
  counter,
  ipAddress,
  tasks,
});
