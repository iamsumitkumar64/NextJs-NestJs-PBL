import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { conversationSchemaType } from "../interface/current-conversation";

const initialState: conversationSchemaType = {
    conversation_id: null,
    receiver_id: null
}

export const currentConversationSlice = createSlice({
    name: 'conversation',
    initialState,
    reducers: {
        currentConversation: (state: conversationSchemaType, action: PayloadAction<conversationSchemaType>) => {
            state.conversation_id = action.payload.conversation_id;
            state.receiver_id = action.payload.receiver_id;
        }
    }
})

export const { currentConversation } = currentConversationSlice.actions

export default currentConversationSlice.reducer