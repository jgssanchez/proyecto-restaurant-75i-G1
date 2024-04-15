import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect } from "react";
import "./App.css";
import Home from "./components/pages/home";
import Login from "./components/pages/login";
import Register from "./components/pages/register";
import NotFound from "./components/pages/notFound";
import Footer from "./components/common/footer";
import Layout from "./components/common/layout/layout";
import PaginaCarrito from "./components/pages/carrito";
import ProductDetails from "./components/pages/productDetails";
import Dashboard from "./components/pages/Dashboard";
import Usuarios from "./components/pages/Usuarios";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUsuario, getCarrito } from "./redux/actions/usuarioActions";
import { getProductos } from "./redux/actions/productoActions";

function App() {
    return (
        <>
            <BrowserRouter>
                <Layout>
                    {/*<Menu></Menu> */}
                    <Routes>
                        <Route path="/" element={<Home />}></Route>
                        <Route
                            path="/admin"
                            element={<Dashboard></Dashboard>}
                        ></Route>
                        <Route
                            path="/usuarios"
                            element={<Usuarios></Usuarios>}
                        ></Route>
                        <Route exact path="/login" element={<Login />}></Route>
                        <Route path="*" element={<NotFound />}></Route>
                        <Route path="/register" element={<Register />}></Route>
                        <Route
                            path="/details"
                            element={<ProductDetails />}
                        ></Route>
                        <Route
                            path="/carrito"
                            element={<PaginaCarrito />}
                        ></Route>
                        <Route
                            path="/detalle/:id"
                            element={<ProductDetails />}
                        />
                    </Routes>
                </Layout>
            </BrowserRouter>
        </>
    );
}

export default App;
