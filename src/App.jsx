import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";
import "./App.css";
import Home from "./components/pages/home";
import Login from "./components/pages/login";
import Register from "./components/pages/register";
import NotFound from "./components/pages/notFound";
import ProductDetails from "./components/pages/productDetails";
import PaginaCarrito from "./components/pages/carrito";

import Footer from "./components/common/footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
<<<<<<< HEAD
import Layout from "./components/common/layout/layout";
import Nosotros from "./components/pages/aboutUs";
=======
import { useState } from "react";
>>>>>>> d51994613928f6e98495415da3f6d75a46d30d0e

import { useDispatch } from "react-redux";
import { getUsuario } from "./redux/actions/usuarioActions";
import RutaProtegida from "./components/routes/rutasProtegidas";
function App() {
<<<<<<< HEAD
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsuario());
  }, []);

  return (
    <>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route exact path="/login" element={<Login />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/register" element={<Register />} />
            <Route
              path="/carrito"
              element={
                <RutaProtegida>
                  <PaginaCarrito />
                </RutaProtegida>
              }
            />
            <Route path="/nosotros" element={<Nosotros />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
=======
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
>>>>>>> d51994613928f6e98495415da3f6d75a46d30d0e
}

export default App;
