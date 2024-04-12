import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import "./App.css";
import Home from "./components/pages/home";
import Login from "./components/pages/login";
import Register from "./components/pages/register";
import NotFound from "./components/pages/notFound";
import Menu from "./components/common/Menu";
import Footer from "./components/common/footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./components/pages/Dashboard";

function App() {
  return (
    <>
    <BrowserRouter>
    <Menu></Menu>
      <Routes>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/admin" element={<Dashboard></Dashboard>}></Route>
        <Route exact path="/login" element={<Login></Login>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
      </Routes>
      <Footer/>
    </BrowserRouter>
    </>
  );
}

export default App;
