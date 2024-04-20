import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit'

export interface configState {
    appLoader: boolean
  }

const initialState : configState = {
  appLoader:false,
};

export const configSlice = createSlice({
  name: 'config',
  initialState,
  reducers: {
    setAppLoader: (state, action: PayloadAction<boolean>) => {
      state.appLoader = action.payload
  },
  },
});

export default configSlice.reducer
export const { setAppLoader } = configSlice.actions
