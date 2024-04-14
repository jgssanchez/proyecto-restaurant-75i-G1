import { createAsyncThunk } from "@reduxjs/toolkit";
import clienteAxios from "../../utils/clienteAxios";

export const getUsuario = createAsyncThunk("getUsuario", async() => {
    const response = await clienteAxios.get("/get-usuario-logueado");
    return response.data;
})