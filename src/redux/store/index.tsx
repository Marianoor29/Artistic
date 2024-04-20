import { configureStore } from '@reduxjs/toolkit'
import configSlice from '../slice/config/configSlice'
import userSlice from '../slice/user/userSlice'

export const store = configureStore({
  reducer: {
    config: configSlice,
    user:userSlice,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch