import { createSlice } from "@reduxjs/toolkit"

interface UserState {
    isAuthenticated: boolean
}

const initialState: UserState = {
    isAuthenticated: false
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        notAuthenticated: (state) => {
            state.isAuthenticated = false
        },
        authenticated: (state) => {
            state.isAuthenticated = true
        }
    }
})

export const { notAuthenticated,authenticated } = userSlice.actions
export default userSlice.reducer