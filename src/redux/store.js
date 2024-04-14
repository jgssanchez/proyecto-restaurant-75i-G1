import { configureStore } from '@reduxjs/toolkit';
import usuarioReducer from './slices/usuarioSlice.js';

export const store = configureStore({
    reducer: {
        usuario : usuarioReducer,
    },
})