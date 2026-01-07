import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface UserState {
  name: string,
  email: string,
  password: string
}
const initialState: UserState[] = []

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addUser: (state: UserState[], action: PayloadAction<UserState>) => {
      const is_user_exists = state.find((user) => user.email == action.payload.email);
      if (is_user_exists) return;
      state.push(action.payload);
    }
  },
})

export const { addUser} = userSlice.actions

export default userSlice.reducer