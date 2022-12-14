import { configureStore } from "@reduxjs/toolkit";
// import LoginReducer from "./features/Login/LoginSlice";
 import ModalReducer from "./Components/MainModal/MainModal";
// import AuthReducer from "./features/Auth/AuthSlice";
// import ProductReducer from "./features/Product/productSlice";

// import HomeReducer from "./features/Home/HomeSlice";

export const store = configureStore({
  reducer: {
    // login: LoginReducer,
    modal: ModalReducer,
    // auth: AuthReducer,
    // product: ProductReducer,

    // home: HomeReducer,
  },
});
