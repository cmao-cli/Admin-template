import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IDemoState {
  num:number;
}
export const demo = createSlice({
  name: 'demo',
  initialState: {
    num: 0,
  } as IDemoState,
  reducers: {
    putDemo(state, action:PayloadAction<Partial<IDemoState>>){
      return { ...state, ...action.payload };
    },
  },

});

export const { putDemo } = demo.actions;
