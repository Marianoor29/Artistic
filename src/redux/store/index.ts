import { configureStore } from '@reduxjs/toolkit'
import configSlice from '../slice/config/configSlice'
import userSlice from '../slice/user/userSlice'

export const store = configureStore({
  reducer: {
    config: configSlice,
    user: userSlice,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch