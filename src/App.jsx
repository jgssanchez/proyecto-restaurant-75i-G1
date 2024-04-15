import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect } from "react";
import "./App.css";
import Home from "./components/pages/home";
import Login from "./components/pages/login";
import Register from "./components/pages/register";
import NotFound from "./components/pages/notFound";
import Layout from "./components/common/layout/layout";
import PaginaCarrito from "./components/pages/carrito";
import ProductDetails from "./components/pages/productDetails";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getUsuario,
  getCarrito,
  getUsuarios,
} from "./redux/actions/usuarioActions";
import { getProductos } from "./redux/actions/productoActions";
import Dashboard from "./components/pages/Dashboard";
import UserList from "./components/pages/UserList";
import RutaAdmin from "./components/routes/rutasAdmin";
import ProductList from "./components/pages/productList";

function App() {
  const dispatch = useDispatch();
  const { estaLogueado, loading } = useSelector((state) => state.usuario);

  useEffect(() => {
    dispatch(getUsuario());
    dispatch(getProductos());
    dispatch(getCarrito());
    dispatch(getUsuarios());
  }, []);

  return (
    <>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route exact path="/login" element={<Login />}></Route>
            <Route path="*" element={<NotFound />}></Route>
            <Route path="/register" element={<Register />}></Route>
            <Route path="/details" element={<ProductDetails />}></Route>
            <Route path="/carrito" element={<PaginaCarrito />}></Route>
            <Route path="/detalle/:id" element={<ProductDetails />} />
            <Route path="/admin" element={<Dashboard />} />
            <Route path="/admin/usuarios" element={<UserList />} />
            <Route path="/admin/productos" element={<ProductList />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;
