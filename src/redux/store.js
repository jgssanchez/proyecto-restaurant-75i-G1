import { configureStore } from '@reduxjs/toolkit';
import usuarioReducer from './slices/usuarioSlice.js';
import productoReducer from './slices/productoSlice.js';

export const store = configureStore({
    reducer: {
        usuario : usuarioReducer,
        producto: productoReducer
    },
})
