import {configureStore} from '@reduxjs/toolkit';
import cartReducer from "./features/cart/cartSlice";
import booksApi from './features/cart/booksApi';

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        [booksApi.reducerPath] : booksApi.reducer, // rtk query reducer 등록
    },
    middleware : (getDefaultMiddleware) => 
        getDefaultMiddleware().concat(booksApi.middleware) // api 요청 미들웨어 등록
})