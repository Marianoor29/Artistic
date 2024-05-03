import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit'

export interface UserState {
    token?: string | null,
    isLoggedIn: boolean,
    userMeta?: any 
}

const initialState : UserState = {
    token: null,
    isLoggedIn: false,
    userMeta: null,
}

export const userSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
        loginUser: (state, action: PayloadAction<UserState>) => {
            const { token, userMeta } = action.payload;
            state.token = token;
            state.userMeta = userMeta;
            state.isLoggedIn = true;
        },
        logoutUser: (state) => {
            state.token = null;
            state.userMeta = null;
            state.isLoggedIn = false;
        },
    }
})

export default userSlice.reducer
export const { loginUser , logoutUser} = userSlice.actions
