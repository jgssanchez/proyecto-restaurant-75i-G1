import { createAsyncThunk } from "@reduxjs/toolkit";
import clienteAxios from "../../utils/clienteAxios";

export const getUsuario = createAsyncThunk("getUsuario", async() => {
    const response = await clienteAxios.get("/get-usuario-logueado");
    return response.data;
})

export const getProductos = createAsyncThunk("getProductos", async() => {
    const response = await clienteAxios.get("/productos");
    return response.data;
})

export const agregarCarrito = createAsyncThunk("agregarCarrito", async(id) => {
    const response = await clienteAxios.post(`/agregar-carrito/${id}`);
    return response.data;
})

export const getCarrito = createAsyncThunk("getCarrito", async(id) => {
    const response = await clienteAxios.get(`/carrito`);
    return response.data;
})

export const getUsuarios = createAsyncThunk("getUsuarios", async() => {
  const response = await clienteAxios.get(`/usuarios`);
  return response.data;
})

