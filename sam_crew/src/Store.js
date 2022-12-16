import { configureStore } from "@reduxjs/toolkit";
import LoginReducer from "./features/Login/LoginSlice";
import ModalReducer from "./features/Modal/ModalSlice";
import AuthReducer from "./features/Auth/AuthSlice";
import ProductReducer from "./features/Product/productSam";

export const store = configureStore({
    reducer: {
        login: LoginReducer,
        modal: ModalReducer,
        auth: AuthReducer,
        product: ProductReducer,
       
    },
});
