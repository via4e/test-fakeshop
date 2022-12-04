import { createSlice } from '@reduxjs/toolkit';

export const basketSlice = createSlice({
    name: 'basket',
    initialState: [],
    reducers: {
        add: (state, payload) => {
           state.push(payload.payload)
        },
        remove: (state, payload) => {
            return [...state.filter(item => item !== payload.payload)]
        },
    }
})

export const { add, remove } = basketSlice.actions

export default basketSlice.reducer