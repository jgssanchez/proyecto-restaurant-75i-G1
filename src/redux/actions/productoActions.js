import { createAsyncThunk } from "@reduxjs/toolkit";
import clienteAxios from "../../utils/clienteAxios";

export const getProductos = createAsyncThunk("getProductos", async() => {
    const response = await clienteAxios.get("/productos");
    return response.data;
})

export const getProductoPorId = createAsyncThunk("getProductoPorId", async(id) => {
    const response = await clienteAxios.get(`/productos/${id}`);
    return response.data;
})