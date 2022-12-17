import { createSlice } from "@reduxjs/toolkit";

let user = JSON.parse(localStorage.getItem("users")) || [];

const initialState = {
    userMail: "",
    userPass: "",
    userLocation: "",
    regUsers: user,
};

const AuthSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setUserMail: (state, actions) => {
            state.userMail = actions.payload;
        },
        setUserPass: (state, actions) => {
            state.userPass = actions.payload;
        },
        setUserLocation: (state, actions) => {
            state.userLocation = actions.payload;
        },
        addUser: (state, actions) => {
            state.regUsers.push(actions.payload);
        },
    },
});

export default AuthSlice.reducer;
export const { setUserMail, setUserPass, setUserLocation, addUser, authUser } =
    AuthSlice.actions;
