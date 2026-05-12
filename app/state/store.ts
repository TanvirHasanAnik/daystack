import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user/userSlice"
import { userApiSlice } from "./user/userApiSlice";

export const store = configureStore({
    reducer: {
        user: userReducer,
        [userApiSlice.reducerPath]: userApiSlice.reducer
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(userApiSlice.middleware)
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch