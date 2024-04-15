import React, { useEffect, useState } from "react";
import "../cssPages/dashboard.css";
/* import {
    Container,
    Navbar,
    Col,
    Button,
    Offcanvas,
    Nav,
    Image,
} from "react-bootstrap";
import usuario from "../../assets/usuario.png";
import logo from "../../assets/logo-sinbg.png";
import { HiOutlineMenuAlt1, HiOutlineMenu } from "react-icons/hi";
import { FaUsers } from "react-icons/fa";
import {
    MdOutlineRequestPage,
    MdOutlineRestaurantMenu,
    MdOutlineLogout,
} from "react-icons/md"; */

const Dashboard = props => {
    //ACLARACIÓN DE JOAQUIN
    /* Entiendo el concepto de Maia, pero considero que esta llevado a cabo de una manera muy extraña
  así que me limito a hacer la logica y despues vemos como arreglamos eso. Joaquin */
    //
    //
    //
    //

    /*     const [showNavbar, setShowNavbar] = useState(false);
    const [openOffcanvas, setOpenOffcanvas] = useState(true);

    const handleCloseNavbar = () => setShowNavbar(false);
    const handleShowNavbar = () => setShowNavbar(true);

    const toggleOffcanvas = () => setOpenOffcanvas(!openOffcanvas); */

    const [productsArray, setProductsArray] = useState([]);
    const [productName, setProductName] = useState("");
    const [productDesc, setProductDesc] = useState("");
    const [productPrice, setProductPrice] = useState("");
    const [productstock, setProductstock] = useState("");
    const [productImg, setProductImg] = useState("");

    const handleDeletion = id => {
        setProductsArray(productsArray.filter(product => product.id !== id));
    };

    return (
        <main className="dashboardPage">
            <section className="dashboardHeader">
                <h1 className="dashboardTitle">Panel de administrador</h1>
                <button className="dashboardMainBtns">
                    + Agregar Producto
                </button>
            </section>
            <table>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Descripción</th>
                        <th>Precio</th>
                        <th>Disponibilidad</th>
                        <th>Imagen URL</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {productsArray.map(product => {
                        return (
                            <tr key={product.id}>
                                <td>{product.nombre}</td>
                                <td>{product.detalle}</td>
                                <td>{product.stock}</td>
                                <td>{product.productPrice}</td>
                                <td>{product.productImg}</td>
                                <td>
                                    <button>Editar</button>
                                    <button
                                        onClick={() =>
                                            handleDeletion(product.id)
                                        }
                                    >
                                        Eliminar
                                    </button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
            <AdminModal
                productsArray={productsArray}
                setProductsArray={setProductsArray}
            />
        </main>
    );
};

let nextId = 0;
const AdminModal = ({ productsArray, setProductsArray }) => {
    const [productName, setProductName] = useState("");
    const [productDesc, setProductDesc] = useState("");
    const [productPrice, setProductPrice] = useState("");
    const [productStock, setProductStock] = useState("");
    const [productImg, setProductImg] = useState("");
    const handleSubmit = e => {
        e.preventDefault();
        const object = {
            id: nextId++,
            nombre: productName,
            detalle: productDesc,
            stock: productStock,
            precio: productPrice,
            imagen: productImg,
        };

        setProductsArray([...productsArray, object]);
        setProductName("");
        setProductDesc("");
        setProductPrice("");
        setProductStock("");
        setProductImg("");
    };

    useEffect(() => {
        console.log(productsArray);
    }, [productsArray]);

    return (
        <section className="adminModalContainer">
            <div className="adminModal">
                <form action="addProduct">
                    <input
                        type="text"
                        placeholder="Nombre del producto"
                        value={productName}
                        onChange={e => setProductName(e.target.value)}
                    />
                    <textarea
                        type="text"
                        placeholder="Descripción del producto"
                        value={productDesc}
                        onChange={e => setProductDesc(e.target.value)}
                    />
                    <input
                        type="number"
                        placeholder="Precio del producto"
                        value={productPrice}
                        onChange={e => setProductPrice(e.target.value)}
                    />
                    <input
                        type="checkbox"
                        placeholder="Disponibilidad"
                        value={productStock}
                        onChange={e => setProductStock(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="URL de la Imagen"
                        value={productImg}
                        onChange={e => setProductImg(e.target.value)}
                    />
                    <button type="submit" onClick={handleSubmit}>
                        Crear/Actualizar
                    </button>
                </form>
            </div>
        </section>
    );
};

{
    /* <Container className="d-flex">
            <Navbar bg="dark" expand="lg" fixed="top" className="dashboard">
                <Container
                    fluid
                    className="d-flex justify-content-around align-items-center"
                >
                    <Col>
                        <Button
                            onClick={toggleOffcanvas}
                            aria-controls="offcanvas-collapse"
                            className="btn btn-link"
                        >
                            <HiOutlineMenuAlt1 size={44} />
                        </Button>
                    </Col>
                    <Col>
                        <Navbar.Brand href="#" className="mx-auto">
                            <img
                                src={logo}
                                width="290"
                                height="50"
                                className="img-fluid"
                                alt="logo"
                            />
                        </Navbar.Brand>
                    </Col>
                    <Col>
                        <Button
                            variant="primary"
                            onClick={handleShowNavbar}
                            className="btn btn-link"
                        >
                            <HiOutlineMenu size={58} />
                        </Button>
                    </Col>
                </Container>
            </Navbar>

            <Offcanvas
                show={showNavbar}
                onHide={handleCloseNavbar}
                placement="end"
                className="bg-light"
            >
                <Offcanvas.Header closeButton></Offcanvas.Header>
                <Offcanvas.Body>
                    <Nav
                        variant="tabs"
                        className="flex-column mt-4 text-center"
                    >
                        <Nav.Link href="/inicio">Inicio</Nav.Link>
                        <Nav.Link href="/nosotros">Nosotros</Nav.Link>
                        <Nav.Link href="#">Productos</Nav.Link>
                    </Nav>
                </Offcanvas.Body>
            </Offcanvas>

            <Offcanvas
                show={openOffcanvas}
                onHide={toggleOffcanvas}
                placement="start"
                backdrop={false}
                keyboard={false}
                scrollLock={false}
                className="offcanva-dashboard"
            >
                <Offcanvas.Header closeButton className="btn-dashboard">
                    <div className="d-flex flex-column">
                        <Offcanvas.Title className="col-12">
                            {" "}
                            Bienvenido admin
                        </Offcanvas.Title>
                        <Image
                            src={usuario}
                            height="100"
                            className="col-6 mt-4"
                            style={{ marginLeft: "110px" }}
                            roundedCircle
                        ></Image>
                        <p className="col-12 text-center ms-5 mt-4">
                            administrador@gmail.com
                        </p>
                    </div>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Nav className="mt-4 flex-column text-center align-items-center">
                        <Nav.Link href="/usuarios">
                            <FaUsers />
                            Usuarios
                        </Nav.Link>
                        <Nav.Link href="#">
                            <MdOutlineRequestPage />
                            Pedidos
                        </Nav.Link>
                        <Nav.Link href="#">
                            <MdOutlineRestaurantMenu />
                            Productos
                        </Nav.Link>
                    </Nav>
                    <Nav
                        style={{ marginTop: "130px", marginLeft: "120px" }}
                        className="link-logout"
                    >
                        <Nav.Link>
                            <MdOutlineLogout></MdOutlineLogout>Logout
                        </Nav.Link>
                    </Nav>
                </Offcanvas.Body>
            </Offcanvas>

            <Container
                style={{ marginLeft: openOffcanvas ? "250px" : "0" }}
                className="mt-5"
            >
                <Col>
                    <div className="p-3">
                        <h5>Otro contenido</h5>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Nullam accumsan, mauris et pulvinar varius,
                            risus neque porta arcu, nec dignissim leo purus nec
                            ligula. Nullam auctor metus id orci convallis, quis
                            commodo odio scelerisque.
                        </p>
                    </div>
                </Col>
            </Container>
        </Container> */
}

export default Dashboard;
