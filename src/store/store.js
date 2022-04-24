import React from 'react'
import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './counter.js'
import burgerSlice from './burger'
import productSlice from './product.js'

const store = configureStore({
    reducer: {
        counter: counterSlice.reducer,
        burger: burgerSlice.reducer,
        product: productSlice.reducer
    }
})

export default store