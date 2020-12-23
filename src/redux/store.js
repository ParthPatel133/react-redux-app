import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer from './reducers/rootReducer';
import reduxImmutableStableInvarient from 'redux-immutable-state-invariant';

const configureStore = (initialState) => {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  return createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(reduxImmutableStableInvarient()))
  );
};

export default configureStore;
