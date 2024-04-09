import deleteImg from "../../assets/delete.svg";
import arrowImg from "../../assets/arrow-forward.svg";
import cartExample from "../../assets/cartExample.png";
import "../cssPages/carrito.css";

const PaginaCarrito = () => {
    localStorage.setItem("cart", []);
    const arrayItemsCarrito = localStorage.getItem("cart");

    return (
        <main className="pagCarrito">
            <div className="pagCarritoTableContainer">
                <h1 className="pagCarritoTitle">CARRITO DE COMPRAS</h1>
                <table className="pagCarritoTable">
                    <tbody>
                        {arrayItemsCarrito == null ||
                        arrayItemsCarrito == [] ? (
                            <tr className="pagCarritoItem">
                                <th className="pagCarritoItemName">
                                    Aún no hay productos en el carrito, ¡Agrega
                                    alguno!
                                </th>
                            </tr>
                        ) : (
                            <tr className="pagCarritoItem">
                                <th className="pagCarritoItemShowAmount">X1</th>
                                <th className="pagCarritoItemImg">
                                    <img src={cartExample} alt="#" />
                                </th>
                                <th className="pagCarritoItemName">
                                    1. PAD TAILANDÉS
                                </th>
                                <th className="pagCarritoItemEditAmount">
                                    <button className="itemCarritoEditAmoutChild itemCarritoLess">
                                        -
                                    </button>
                                    <div className="itemCarritoEditAmoutChild itemCarritoAmount">
                                        1
                                    </div>
                                    <button className="itemCarritoEditAmoutChild itemCarritoMore">
                                        +
                                    </button>
                                </th>
                                <th className="pagCarritoItemPrice">$ 5.200</th>
                                <th className="pagCarritoItemDelete">
                                    <button className="itemCarritoDelete">
                                        <img
                                            className="itemCarritoDeleteImg"
                                            src={deleteImg}
                                        />
                                    </button>
                                </th>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
            <button className="pagCarritoPagarBtn">
                Check-Out y Pago{" "}
                <img
                    className="pagCarritoPagarBtnFlecha"
                    src={arrowImg}
                    alt="ir al pago"
                />
            </button>
        </main>
    );
};

export default PaginaCarrito;
