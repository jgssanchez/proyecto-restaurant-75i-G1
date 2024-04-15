import { createSlice } from "@reduxjs/toolkit";
import { getProductoPorId, getProductos } from "../actions/productoActions.js";

const productoSlice = createSlice({
    name: 'productos',
    initialState: {
        allProductos: [],
        producto: {},
        loading: true,
    },
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(getProductos.pending, (state) => {
                state.loading = true;
            })
            .addCase(getProductos.fulfilled, (state, action) => {
                state.loading = false;
                state.error = null;
                state.allProductos = action.payload;
            })
            .addCase(getProductos.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })

            .addCase(getProductoPorId.pending, (state) => {
                state.loading = true;
            })
            .addCase(getProductoPorId.fulfilled, (state, action) => {
                state.loading = false;
                state.error = null;
                state.producto = action.payload;
            })
            .addCase(getProductoPorId.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
    },
})

export default productoSlice.reducer;