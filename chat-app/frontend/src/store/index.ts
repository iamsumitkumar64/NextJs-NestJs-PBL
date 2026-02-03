import { configureStore } from "@reduxjs/toolkit";
import conversationReducer from "./slices/current-conversation"

export const store = configureStore({
    reducer: {
        conversationReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch