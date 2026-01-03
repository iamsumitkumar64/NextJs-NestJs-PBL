import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface UserState {
    email: string,
    password: string
}
const initialState: UserState = {
    email: "",
    password: ""
}

export const currentUserSlice = createSlice({
    name: 'current_user',
    initialState,
    reducers: {
        currentUser: (state: UserState, action: PayloadAction<UserState>) => {
            state = action.payload;
        }
    },
})

export const { currentUser} = currentUserSlice.actions

export default currentUserSlice.reducer