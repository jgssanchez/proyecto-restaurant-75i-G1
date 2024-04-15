import { useDispatch, useSelector } from "react-redux";
import returnArrow from "../../assets/arrow-forward.svg";
import "../cssPages/details.css";
import { HashLink } from "react-router-hash-link";
import { useEffect } from "react";
import { getProductoPorId } from "../../redux/actions/productoActions.js";
import { useParams } from "react-router-dom";


const ProductDetails = () => {
    const dispatch = useDispatch()
    const {id} = useParams()
    const { producto } = useSelector((state) => state.producto)

    useEffect(()=>{
        dispatch(getProductoPorId(id));
    },[])

    return (
        <main className="pagDetails" id="detailsPage">
            <HashLink smooth to="/#mainMenu" className="detailsReturnBtn">
                <img src={returnArrow} alt="" />
            </HashLink>
            <section className="detailsSection">
                <div className="detailsImgContainer">
                    <img src={producto.imagen} alt="" className="detailsImg" />
                </div>
                <div className="detailsTextContainer">
                    <h1 className="detailsProductName">{producto.nombre}</h1>
                    <p className="detailsProductDesc">
                        {"- " + producto.detalle}
                    </p>
                    <h3 className="detailsProductState">
                        {producto.estado
                            ? "Disponible"
                            : "No se encuentra disponible."}
                    </h3>
                    <h2 className="detailsProductPrice">
                        {producto.precio ? "$ " + producto.precio : ""}
                    </h2>
                    {producto != undefined ? (
                        <button
                            className="detailsProductAddToCart"
                            onClick={e => handleCart(e)}
                        >
                            + Añadir a la Orden
                        </button>
                    ) : (
                        <p>Por favor vuelva atras e intente nuevamente.</p>
                    )}
                </div>
            </section>
        </main>
    );
};

export default ProductDetails;
