import { createStore, applyMiddleware,combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import MazeReducer from './maze-reducer';



let reducers = combineReducers({
    MazeReducer
  });
  
  
  
const store = createStore(reducers,(applyMiddleware(thunkMiddleware)
    ));
  // saga.run(sagaWatcher);
  window.store = store;
  
  //let store = createStore(reducers, applyMiddleware(thunkMiddleware));
  
  export default store;