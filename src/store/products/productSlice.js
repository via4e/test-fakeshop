import { createSlice } from '@reduxjs/toolkit';

export const productSlice = createSlice({
    name: 'products',
    initialState: {
        list: [],
        categories: []
    },
    reducers: {
        update: (state, payload) => {
            state.list = payload.payload
        },

        categories: (state, payload) => {
            state.categories = payload.payload
        }
    }
})

export const { update, categories } = productSlice.actions

export default productSlice.reducer