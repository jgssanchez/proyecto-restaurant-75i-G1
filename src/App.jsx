import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import "./App.css";
import Home from "./components/pages/home";
import Login from "./components/pages/login";
import Register from "./components/pages/register";
import NotFound from "./components/pages/notFound";
import ProductDetails from "./components/pages/productDetails";
import PaginaCarrito from "./components/pages/carrito";

import Footer from "./components/common/footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home></Home>}></Route>
                    <Route
                        exact
                        path="/login"
                        element={<Login></Login>}
                    ></Route>
                    <Route path="*" element={<NotFound></NotFound>}></Route>
                    <Route
                        path="/register"
                        element={<Register></Register>}
                    ></Route>
                    <Route
                        path="/details"
                        element={<ProductDetails></ProductDetails>}
                    ></Route>
                    <Route
                        path="/carrito"
                        element={<PaginaCarrito></PaginaCarrito>}
                    ></Route>
                </Routes>
                <Footer />
            </BrowserRouter>
        </>
    );
}

export default App;
