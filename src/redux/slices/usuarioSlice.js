import { createSlice } from "@reduxjs/toolkit";
import { getUsuario } from "../actions/usuarioActions.js";

const usuarioSlice = createSlice({
    name: 'usuarios',
    initialState: {
        estaLogueado: false,
        loading: true,
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

    },
})

export default usuarioSlice.reducer;