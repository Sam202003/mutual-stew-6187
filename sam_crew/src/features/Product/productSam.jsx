import { createSlice } from "@reduxjs/toolkit";
import { data } from "../../Assets/data";

const initialState = {
    data: [],
    products_data: [],
    filter_data: [],
    isError: false,
    isLoading: false,
    page: 0,
    totalProduct: 0,
    perPageData: 6,
    totalPages: 0,
    filters: [],
    filterObj: [],
    cartItems: [],
    cartTotalItems: 0,
    sub_total: 0,
    apply_promo_status: true,
    estimated_subtoal: 0,
    singleProduct: {},
    payment_with_charge: 0,
    express_charge: 2052,
    standard_charge: 1071,
    express_charge_status: true,
    standard_charge_status: true,
    current_charge: 0,
};

const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        is_loading: (state) => {
            return {
                ...state,
                isLoading: true,
            };
        },
        get_products: (state) => {
            const all_data = data.men_products.data;

            let len = all_data.length;
            return {
                ...state,
                data: [...all_data],
                products_data: [...all_data],
                isLoading: false,
                isError: false,
                totalProduct: len,
                filters: [...data.men_products.filters],
                page: 1,
                totalPages: Math.ceil(len / state.perPageData),
            };
        },
        is_error: (state) => {
            return {
                ...state,
                isLoading: false,
                isError: true,
            };
        },
        upper_filter: (state, { payload }) => {
            let len = payload.length;
            return {
                ...state,
                products_data: [...payload],
                totalProduct: len,
                totalPages: Math.ceil(len / state.perPageData),
            };
        },
        update_data_with_filter: (state, { payload }) => {
            let len = payload.length;
           
            return {
                ...state,
                products_data: [...payload],
                totalProduct: len,
                totalPages: Math.ceil(len / state.perPageData),
            };
        },
        change_variant_color: (state, { payload }) => {
            let changeData = [...state.products_data];
            changeData.map((el) => {
                return (
                    el.id === payload.id &&
                    el.variant.map((innerEl) => {
                        return innerEl.id === payload.variantID
                            ? (innerEl.status = true)
                            : (innerEl.status = false);
                    })
                );
            });
        },
        remove_cart_item: (state, { payload }) => {
            state.cartItems = [...payload.changedData];
            let items = state.cartItems.reduce((x, y) => {
                return x + Number(y.quantity);
            }, 0);
            let sub_toal = state.cartItems.reduce((x, y) => {
                return x + Number(y.quantity) * Number(y.price);
            }, 0);
            state.sub_total = sub_toal;
            state.estimated_subtoal = sub_toal;
            state.cartTotalItems = items;
            state.payment_with_charge = state.sub_total + state.standard_charge;
            state.current_charge = state.standard_charge;
            state.standard_charge_status = false;
        },
        apply_promo_code: (state, { payload }) => {
            state.apply_promo_status = false;
            state.estimated_subtoal =
                state.estimated_subtoal - state.estimated_subtoal * 0.3;
            state.sub_total = state.sub_total - state.sub_total * 0.3;
            state.payment_with_charge = state.sub_total + state.standard_charge;
            state.current_charge = state.standard_charge;
            state.standard_charge_status = false;
        },
        change_variant_size: (state, { payload }) => {
            let changeData = [...state.products_data];
            changeData.map((el) => {
                return (
                    el.id === payload.id &&
                    el.sizes.map((innerEl) => {
                        return innerEl.id === payload.variantID
                            ? (innerEl.status = true)
                            : (innerEl.status = false);
                    })
                );
            });
        },
        update_quantity: (state, { payload }) => {
            let changeData = [...state.products_data];
          
            changeData.map((el) => {
                return (
                    el.id === payload.id &&
                    el.variant.map((innerEl) => {
                        return innerEl.id === payload.variantID
                            ? (innerEl.quantity =
                                  innerEl.quantity - payload.quantity)
                            : innerEl.quantity;
                    })
                );
            });
        },
        update_cart_items: (state, { payload }) => {
           
            state.cartItems = [...state.cartItems, payload.item];
            let items = state.cartItems.reduce((x, y) => {
                return x + Number(y.quantity);
            }, 0);
            let sub_toal = state.cartItems.reduce((x, y) => {
                return x + Number(y.quantity) * Number(y.price);
            }, 0);
            state.sub_total = sub_toal;
            state.estimated_subtoal = sub_toal;
            state.cartTotalItems = items;
            state.payment_with_charge = state.sub_total + state.standard_charge;
            state.current_charge = state.standard_charge;
            state.standard_charge_status = false;
           
        },
        change_filter: (state, { payload }) => {
            state.filters[payload].status = !state.filters[payload].status;
        },
        update_total_with_charge: (state, { payload }) => {
            if (payload.key == "e" && state.express_charge_status) {
                state.payment_with_charge =
                    state.payment_with_charge -
                    state.standard_charge +
                    state.express_charge;
                state.current_charge = state.express_charge;
                state.express_charge_status = false;
                state.standard_charge_status = true;
            } else if (payload.key == "s" && state.standard_charge_status) {
                state.payment_with_charge =
                    state.payment_with_charge -
                    state.express_charge +
                    state.standard_charge;
                state.express_charge_status = true;
                state.current_charge = state.standard_charge;
                state.standard_charge_status = false;
            }
        },
        get_single_product: (state, { payload }) => {
            state.singleProduct = { ...payload.sProduct };
        },
        change_filter_2: (state, { payload }) => {
            const { mainIndex, primaryIndex } = payload;
            state.filters[mainIndex].options[primaryIndex].status =
                !state.filters[mainIndex].options[primaryIndex].status;
        },
        empty_cart: (state) => {
            state.cartItems = [];
            state.cartTotalItems = 0;
        },
    },
});

export const {
    is_loading,
    get_products,
    is_error,
    upper_filter,
    update_data_with_filter,
    change_variant_color,
    change_filter,
    change_filter_2,
    change_variant_size,
    update_quantity,
    update_cart_items,
    get_single_product,
    remove_cart_item,
    apply_promo_code,
    update_total_with_charge,
    empty_cart,
} = productSlice.actions;

export default productSlice.reducer;
