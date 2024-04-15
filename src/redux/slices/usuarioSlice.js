import { createSlice } from "@reduxjs/toolkit";
import { getUsuario, agregarCarrito, getCarrito } from "../actions/usuarioActions.js";

const usuarioSlice = createSlice({
    name: 'usuarios',
    initialState: {
        estaLogueado: false,
        loading: true,
        carrito: []
    },
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(getUsuario.pending, (state) => {
                state.loading = true;
            })
            .addCase(getUsuario.fulfilled, (state, action) => {
                state.estaLogueado = true;
                state.loading = false;
                state.error = null;
                state.usuario = action.payload;
            })
            .addCase(getUsuario.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
                state.estaLogueado = false;
            })

            .addCase(agregarCarrito.pending, (state) => {
                state.loading = true;
            })
            .addCase(agregarCarrito.fulfilled, (state, action) => {
                state.loading = false;
                state.error = null;
                state.carrito = action.payload;
            })
            .addCase(agregarCarrito.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })

            .addCase(getCarrito.pending, (state) => {
                state.loading = true;
            })
            .addCase(getCarrito.fulfilled, (state, action) =>  {
                state.estaLogueado= true;
                state.loading = false;
                state.error = null;
                state.carrito = action.payload;
            })
            .addCase(getCarrito.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
    },
})

export default usuarioSlice.reducer;