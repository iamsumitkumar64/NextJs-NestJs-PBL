import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { currentUserSchemaType } from "../interface/current-user";

const initialState: currentUserSchemaType = {
    user_id: null,
}

export const currentUserSlice = createSlice({
    name: 'conversation',
    initialState,
    reducers: {
        currentUser: (state: currentUserSchemaType, action: PayloadAction<currentUserSchemaType>) => {
            state.user_id = action.payload.user_id;
        }
    }
})

export const { currentUser } = currentUserSlice.actions

export default currentUserSlice.reducer