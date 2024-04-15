import { Button } from "react-bootstrap";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { CiTrash } from "react-icons/ci";
import { MdEdit } from "react-icons/md";

const ItemProducto = ({nombre, precio, detalle, imagen, id}) => {
    

//   const eliminarProducto = ()=>{
//     Swal.fire({
//       title: "¿Está seguro de eliminar el producto",
//       text: "No se puede revertir esta operación",
//       icon: "warning",
//       showCancelButton: true,
//       confirmButtonColor: "#3085d6",
//       cancelButtonColor: "#d33",
//       confirmButtonText: "Borrar",
//       cancelButtonText: "Cancelar",
//     }).then(async (result) => {
//       if (result.isConfirmed) {
//         const respuesta = await borrarProducto(producto.id);
//         if(respuesta.status === 200){
//           Swal.fire({
//             title: "Producto eliminado",
//             text: `El producto ${producto.nombreProducto} fue eliminado correctamente`,
//             icon: "success"
//           });
//           const respuestaNuevosProductos = await leerProductos();
//           if(respuestaNuevosProductos.status === 200){
//             const nuevosProductos = await respuestaNuevosProductos.json()
//             setProductos(nuevosProductos);
//           }
//         }else{
//           Swal.fire({
//             title: "Ocurrio un error",
//             text: `El producto ${producto.nombreProducto} no fue eliminado, intente esta operación en unos minutos`,
//             icon: "error"
//           });
//         }
//       }
//     });
//   }


  return (
    <tr>
      <td>{nombre}</td>
      <td className="text-end">${precio}</td>
      <td className="text-center">
        <img
          src={imagen}
          className="img-thumbnail"
          alt={nombre}
          width="50px"
        ></img>
      </td>
      <td className="text-center">{detalle}</td>
      <td className="text-center">
        <Link className="me-lg-2 btn btn-warning" to={'/administrador/editar/'+ id}>
        <MdEdit />
        </Link>
        <Button variant="danger">
        <CiTrash />
        </Button>
      </td>
    </tr>
  );
};

export default ItemProducto;
