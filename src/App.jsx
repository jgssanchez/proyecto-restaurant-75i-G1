import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";
import "./App.css";
import Home from "./components/pages/home";
import Login from "./components/pages/login";
import Register from "./components/pages/register";
import NotFound from "./components/pages/notFound";
import PaginaCarrito from "./components/pages/carrito";

import Footer from "./components/common/footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/common/layout/layout";
import Nosotros from "./components/pages/aboutUs";

import { useDispatch } from "react-redux";
import { getUsuario } from "./redux/actions/usuarioActions";
import RutaProtegida from "./components/routes/rutasProtegidas";
function App() {
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
}

export default App;
