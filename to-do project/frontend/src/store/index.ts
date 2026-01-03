import { configureStore } from '@reduxjs/toolkit'
import currentUserReducer from './slices/current-user'
import userReducer from './slices/add-user'

export const store = configureStore({
  reducer: {
    currentUserReducer,
    userReducer
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch