import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoginOpen: false,
    isSignUpOpen: false,
    isLogin: false,
};

const LoginSlice = createSlice({
    name: "login",
    initialState,
    reducers: {
        openLogin: (state) => {
            state.isLoginOpen = true;
            state.isSignUpOpen = false;
        },
        closeLogin: (state) => {
            state.isLoginOpen = false;
        },
        openSignUp: (state) => {
            state.isLoginOpen = false;
            state.isSignUpOpen = true;
        },
        closeSignUp: (state) => {
            state.isSignUpOpen = false;
        },
        auth: (state) => {
            state.isLogin = true;
        }
    },
});

export default LoginSlice.reducer;
export const { openLogin, closeLogin, openSignUp, closeSignUp, auth } =
    LoginSlice.actions;
