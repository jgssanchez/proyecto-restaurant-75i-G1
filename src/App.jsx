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
import { useState } from "react";

function App() {
    const [objectPage, setObjectPage] = useState(
        localStorage.getItem("objectPage") == undefined
            ? {}
            : JSON.parse(localStorage.getItem("objectPage"))
    );

    const handleCart = event => {
        const itemObject = JSON.parse(event.target.value);
        const cartArray =
            localStorage.getItem("cart") == undefined
                ? []
                : JSON.parse(localStorage.getItem("cart"));

        let found = false;
        for (let i = 0; i < cartArray.length; i++) {
            if (cartArray[i].dish.name == itemObject.name) {
                found = true;
                cartArray[i].amount++;
                localStorage.setItem("cart", JSON.stringify(cartArray));

                break;
            }
        }
        if (!found) {
            const updatedArray = [
                ...cartArray,
                { dish: itemObject, amount: 1 },
            ];
            localStorage.setItem("cart", JSON.stringify(updatedArray));
            localStorage.setItem("cart", JSON.stringify(updatedArray));
        }
    };

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route
                        path="/"
                        element={
                            <Home
                                setObjectPage={setObjectPage}
                                handleCart={handleCart}
                            ></Home>
                        }
                    ></Route>
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
                        element={
                            <ProductDetails
                                objectPage={objectPage}
                                handleCart={handleCart}
                            ></ProductDetails>
                        }
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
