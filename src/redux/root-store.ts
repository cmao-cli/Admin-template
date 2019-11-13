import {  createStore, applyMiddleware, Middleware, Store } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { rootReducer, IReduxState } from './root-reducer';
import { promiseMiddleware } from 'src/utils/create-promise-middleware';
import { RootSaga } from './root-saga';

export type StoreType = Store<IReduxState>;

export let _createStore =  () : Store<IReduxState> => {
  const sagaMiddleware = createSagaMiddleware();
  const middlewares:Middleware[] = [promiseMiddleware, sagaMiddleware].filter(Boolean);

  const createStoreWithMidddleware = applyMiddleware(
    ...middlewares,
  )(createStore);

  const store:any = createStoreWithMidddleware(
    rootReducer,
    (window as any).__REDUX_DEVTOOLS_EXTENSION__(),
  );
  sagaMiddleware.run(RootSaga);
  return store;
};