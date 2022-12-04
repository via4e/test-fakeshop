import { configureStore } from '@reduxjs/toolkit';
import productReducer from './products/productSlice'; 
import basketReducer from './products/basketSlice';

export default configureStore ({
    reducer: {
        products: productReducer,
        basket: basketReducer
    }
})