import React, { useEffect, useState } from "react";
import styles from "./ProductPage.module.css";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import ProductItem from "./ProductItem";
import { useDispatch, useSelector } from "react-redux";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Stack from "@mui/material/Stack";
import {
    update_data_with_filter,
    upper_filter,
    change_filter,
    change_filter_2,
} from "../../features/Product/productSam";

const ProductPage = () => {
    const [accordinas, setAccordinas] = useState([]);
    const [showFilters, setShowFilters] = useState(true);
    const [upperFilters, setUpperFilters] = useState(false);
    const [upperFilterProperties, setUpperFilterProperties] = useState([
        {
            id: "uf1",
            value: "Featured",
            status: true,
            key: "f",
        },
        {
            id: "uf2",
            value: "Price : High to Low",
            status: false,
            key: "htl",
        },
        {
            id: "uf3",
            value: "Price : Low to High",
            status: false,
            key: "lth",
        },
        {
            id: "uf4",
            value: "Top Rated",
            status: false,
            key: "top",
        },
        {
            id: "uf5",
            value: "Best Seller",
            status: false,
            key: "best",
        },
    ]);
    const { products_data, isLoading, isError, data, filters } = useSelector(
        (store) => store.product
    );
    const handleAccordian = (index) => {
        dispatch(change_filter(index));

    };
    useEffect(() => {
        let filterData = [...data];
        let keys = [];
        accordinas.map((item) => {
        return item.options.map((el) => {
        return (
        el.status && keys.push({ title: item.title, keys: el.key })
        );
        });
        });
        let resData = [];
        if (keys.length > 0) {
            filterData.map((item) => {
                return keys.map((el) => {
                    if (el.title === "Category") {
                    return item.category === el.keys && resData.push(item);
                    } else if (el.title === "Size") {

                    return item.sizes.map((s) => {
                    return s.size === el.keys && resData.push(item);
                    });
                    } else if (el.title === "Color") {
                    return item.variant.map((c) => {
                    return (
                                
                    el.keys.toUpperCase() ===
                     c.color.toUpperCase() && resData.push(item)
                    );
                    });
                    } else if (el.title === "Trending") {
                    return item.Trending === el.keys && resData.push(item);
                    }
                });
            });
        } else {
            resData = [...data];
        }



        dispatch(update_data_with_filter(resData));
    }, [accordinas]);

    const handleFilterChange = (key, mainIndex, primaryIndex) => {
        dispatch(change_filter_2({ mainIndex, primaryIndex }));

    };

    useEffect(() => {
        setAccordinas([...filters]);
    }, [filters]);



    useEffect(() => {
        document.title = "Men's Collection";
        if (window.pageYOffset > 300) {
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        }
    }, []);


    const handleUpperFilters = (value) => {
        let key = value.key;
        upperFilterProperties.map((item) =>
            item.key === key ? (item.status = true) : (item.status = false)
        );
        setUpperFilterProperties([...upperFilterProperties]);
        if (key === "htl") {
            let sortData = [...data];
            sortData.sort((a, b) => b.price - a.price);

            dispatch(upper_filter(sortData));
        } 
        
        else if (key === "lth") {
            let sortData = [...data];
            sortData.sort((a, b) => a.price - b.price);

            dispatch(upper_filter(sortData));
        } 
        else if (key === "f") {

            dispatch(upper_filter(data));
        }
         else if (key === "best") {
            let filterData = data.filter((item) => {
                return item.Trending === "best_seller";
            });

            dispatch(upper_filter(filterData));
        }
         else if (key === "top") {
            let filterData = data.filter((item) => {
                return item.Trending === "top_rated";
            });

            dispatch(upper_filter(filterData));
        }
    };

    const dispatch = useDispatch();
    return (
        <>
            <div className={styles.products_wrapper}>
                <div className={styles.products_container}>
                    <div className={styles.products_header}>
                        <h1>men's new arrivals</h1>
                    </div>
                    <div className={styles.products_head_info}>
                        <div
                            className={`${styles.filter_btn} ${styles.left}`}
                            onClick={() => setShowFilters(!showFilters)}  >
                      
                            <div className={styles.filter_btn_left}>
                                <p>
                                    {showFilters
                                        ? "Hide Filters"
                                        : "Show Filters"}
                                </p>
                            </div>
                            <div className={styles.filter_btn_icon}>
                                {showFilters ? (
                                <ArrowDropUpIcon />
                                ) : (
                                    <ArrowDropDownIcon />
                                )}
                            </div>
                        </div>
                        <div className={styles.head_right}>
                            <div
                                className={styles.dropdown}
                                onClick={() => setUpperFilters(!upperFilters)} >
                           
                                <div className={styles.featured}>
                                <div
                                className={`${styles.filter_btn} ${styles.width} `}  >
                                  
                                 <div
                                    className={`${styles.filter_btn_left} `} >
                                       
                                     {upperFilterProperties.map((el) => {
                                         return (
                                        el.status && (
                                        <p key={el.id}>
                                          {el.value}
                                        </p>
                                          )
                                            );
                                            })}
                                        </div>
                                        <div className={styles.filter_btn_icon}>
                                            {upperFilters ? (
                                             <ArrowDropUpIcon />
                                            ) : (
                                                <ArrowDropDownIcon />
                                            )}
                                        </div>
                                    </div>
                                </div>
                                {upperFilters && (
                                    <div className={styles.dropdown_menu}>
                                        {upperFilterProperties.map((el) => {
                                        return (
                                             <div
                                              key={el.id}
                                              onClick={() =>
                                              handleUpperFilters(el)
                                                }
                                                className={
                                                el.status
                                                ? `${styles.dropdown_item} ${styles.active_dropdown_item}`
                                                : styles.dropdown_item
                                                } >
                                               
                                        <p>{el.value}</p>
                                        </div>
                                        );
                                        })}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className={styles.products}>
                        {showFilters && (
                            <div className={`${styles.filters_panel}`}>
                            {filters.map((item, index) => {
                             return (
                            <div
                            key={item.id}
                                className={styles.accordian}  >
                                      
                                <div
                                className={styles.top}
                                onClick={() =>
                                handleAccordian(index)
                                     } >
                                           
                                    <div className={styles.title}>
                                    <p>{item.title}</p>
                                     </div>
                                    <div className={styles.icons}>
                                     {item.status ? (
                                     <RemoveIcon />
                                        ) : (
                                         <AddIcon />
                                         )}
                                        </div>
                                        </div>
                                            {item.status && (
                                             <div className={styles.options}>
                                            {item.options.map(
                                            (el, i) => {
                                            return (
                                            <label
                                             key={el.id} >
                                                               
                                             <input
                                            checked={
                                             el.status
                                                 }
                                            type="checkbox"
                                            onChange={() =>
                                             handleFilterChange(
                                             el.key,
                                            index,
                                            i
                                             )
                                             }
                                            value={
                                            el.key
                                            }/>
                                                                
                                            {el.value}
                                            </label>
                                            );
                                            }
                                              )}

                                            </div>
                                            )}

                                        </div>

                                    );
                                })}
                            </div>
                        )}
                        <div className={styles.product_list}>
                            {isLoading ? (
                                <Box
                                    sx={{
                                        position: "absolute",
                                        top: "0",
                                        left: "0",
                                        right: "0",
                                        bottom: "0",
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        width: "100%",
                                    }} >
                               
                                <CircularProgress />
                                </Box>
                            ) : isError ? (
                                <Stack
                                    sx={{
                                        position: "absolute",
                                        top: "0",
                                        left: "0",
                                        right: "0",
                                        bottom: "0",
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        width: "100%",
                                    }}
                                    spacing={2}
                                >
                                    <Alert severity="info">
                                        <AlertTitle>Error</AlertTitle>
                                        Something went wrong{" "}
                                        <strong>Please try again!</strong>
                                    </Alert>
                                </Stack>
                            ) : (
                                products_data?.map((item) => {
                                    return (
                                        <ProductItem
                                            key={item.id}
                                            item={item}
                                        />
                                    );
                                })
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductPage;
