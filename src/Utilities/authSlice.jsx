import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isAuthenticated: localStorage.getItem("token") ? true : false,
    user: null,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login(state, action) {
            state.isAuthenticated = true;
            state.user = action.payload;
            localStorage.setItem("token", action.payload.token)
        },
        logout(state) {
            state.isAuthenticated = false;
            state.user = null;
            localStorage.removeItem("token")
        },
        signup(state, action) {
            state.isAuthenticated = true;
            state.user = action.payload.data;
            localStorage.setItem("token", action.payload.token)
        },
        failed(state) {
            state.isAuthenticated = false;
            state.user = null;
            localStorage.removeItem("token")
        }
    }
});

export const { login, logout, signup, failed } = authSlice.actions;
export const authReducer = authSlice.reducer;
export const selectAuth = state => state.auth;