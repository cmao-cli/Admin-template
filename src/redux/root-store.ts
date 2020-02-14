import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { rootSaga } from './root-saga';
import { rootReducer } from './root-reducer';

// 创建 saga middleware
const sagaMiddleware = createSagaMiddleware({
  onError: (error:Error) => {
    // 捕获sagas中未被捕获的错误
    console.log('error is', error);
  },
});
const middleware = [...getDefaultMiddleware({ serializableCheck: false }), sagaMiddleware];
export const store = configureStore({
  reducer: rootReducer,
  middleware,
  devTools: process.env.NODE_ENV !== 'production',
});

sagaMiddleware.run(rootSaga);

export type AppDispatch = typeof store.dispatch;
export const dispatch = store.dispatch;
