import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit'

export interface userStage {
    token?: any,
    isLoggedIn?: boolean,
    userMeta?: any 
}

const initialState : userStage ={
    token: 1,
    isLoggedIn:true,
    userMeta:'000', 
}

export const userSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
        setToken: (state, action:  PayloadAction<any>) =>{
            state.token = action.payload;
        },
        setIsLoggedIn: (state, action: PayloadAction<boolean>)=>{
            state.isLoggedIn = action.payload
        },
        setUserMeta: (state, action : PayloadAction<any>) => {
            state.userMeta = action.payload
        }
    }
})

export default userSlice.reducer
export const {
    setToken,
     setIsLoggedIn, 
     setUserMeta
    } = userSlice.actions