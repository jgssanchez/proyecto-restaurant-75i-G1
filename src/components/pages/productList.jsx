import { Button, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import ItemProducto from "./itemProducto";
import { TiPlusOutline } from "react-icons/ti";
import ModalProducto from "./modalProducto";
import {useState} from "react"



const ProductList = () => {
  const { allProductos } = useSelector((state) => state.producto);
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };
  return (
    <>
      <section className="container mainSection">
        <div className="d-flex justify-content-between align-items-center mt-5">
          <h2 className="display-4 ">Productos disponibles</h2>
          <Button variant="primary" onClick={openModal}>
          <TiPlusOutline />
        </Button>
        {showModal && <ModalProducto show={showModal} handleClose={closeModal} />}
        </div>
        <hr />
        <Table responsive striped bordered hover>
          <thead>
            <tr className="text-center">
              <th>Producto</th>
              <th>Precio</th>
              <th>URL de Imagen</th>
              <th>Detalle</th>
            </tr>
          </thead>
          <tbody>
            {allProductos.map((producto) => (
              <ItemProducto
              key={producto._id}
                nombre={producto.nombre}
                detalle={producto.detalle}
                precio={producto.precio}
                imagen={producto.imagen}
                id={producto._id}
              />
            ))}
          </tbody>
        </Table>
      </section>
    </>
  );
};

export default ProductList;
