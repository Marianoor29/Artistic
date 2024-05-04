import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit'

export interface UserState {
    email: string,
    password: string,
    isLoggedIn: boolean
}

const initialState : UserState = {
    email: '',
    password: '',
    isLoggedIn: false
}

export const userSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
        loginUser: (state, action: PayloadAction<string>) => {
            state.email = action.payload;
            state.password = action.payload;
        },
        logoutUser: (state) => {
            state.email = '',
            state.password = ''

        },
    }
})

export default userSlice.reducer
export const { loginUser , logoutUser} = userSlice.actions
