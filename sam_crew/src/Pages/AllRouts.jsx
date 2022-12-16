import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "../Components/Footer";
import HomePage from "../Components/HomePage";
import Navbar from "../Components/Navbar";
import Mens from "./Mens";
// import SingleProduct from "./SingleProduct";
import ProductPage from "./MensProduct/ProductPage";
import { useDispatch } from "react-redux";
import { get_products } from "../features/Product/productSam";
import { SubdirectoryArrowLeft } from "@mui/icons-material";
import FinalPayment from "./FinalPayment";
import Cart from "./Cart";
import Checkout from "./Checkout";

export default function Index() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(get_products());
       
    }, []);
    return (
        <>
            <Navbar />
            <Routes>
                <Route exact path="/" element={<HomePage/>}></Route>
                <Route exact path="/mens" element={<Mens />}></Route>
                <Route exact path="/products/mens" element={<ProductPage />} />
                <Route
                    exact
                    path="/products/mens/:id"
                    // element={<SingleProduct />}
                />
                <Route exact path="/checkOut" element={<Checkout />} />
                <Route
                    exact
                    path="/checkOut/payment"
                    element={<FinalPayment />}
                />
                <Route exact path="/cart" element={<Cart />} />
            </Routes>

            <Footer />
        </>
    );
}
