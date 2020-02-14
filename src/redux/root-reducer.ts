import { combineReducers } from '@reduxjs/toolkit';
import { demo } from 'src/redux/demo';

export const rootReducer = combineReducers({
  demo: demo.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;
