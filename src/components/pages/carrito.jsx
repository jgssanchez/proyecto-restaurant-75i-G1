import { useState, useEffect } from "react";
import deleteImg from "../../assets/delete.svg";
import arrowImg from "../../assets/arrow-forward.svg";
import "../cssPages/carrito.css";
import cartExample from "../../assets/cartExample.png";

/* Eliminar el codigo comentado cuando se agreguen productos al carrito desde otras paginas */
const plato = {
    name: "1.POLLO AL CURRY ROJO",
    state: true,
    price: 5600,
    details: "Filete de Pollo salteado con curry rojo y arroz.",
    img: cartExample,
};
const plato2 = {
    name: "1.caca con carne",
    state: true,
    price: 300,
    details: "Filete de Pollo salteado con curry rojo y arroz.",
    img: cartExample,
};
const plato3 = {
    name: "1.carne AL CURRY ROJO",
    state: true,
    price: 5000,
    details: "Filete de Pollo salteado con curry rojo y arroz.",
    img: cartExample,
};

/* Esto tiene que venir desde app.jsx, cuando se agregue un item al carrito desde otra pagina */
localStorage.setItem(
    "cart",
    JSON.stringify([
        { dish: plato, amount: 1 },
        { dish: plato3, amount: 3 },
        { dish: plato2, amount: 5 },
    ])
);
/* ----------------------------------------------------------------------------- */

const PaginaCarrito = () => {
    const [arrayCarrito, setArrayCarrito] = useState(
        JSON.parse(localStorage.getItem("cart"))
    );

    const [total, setTotal] = useState(0);

    useEffect(() => {
        const totalPrice = arrayCarrito.map(element => {
            const productPrice = element.dish.price * element.amount;
            return productPrice;
        });
        let suma = 0;
        totalPrice.forEach(element => {
            suma += element;
        });
        setTotal(suma);
    }, [arrayCarrito]);

    return (
        <main className="pagCarrito">
            <div className="pagCarritoTableContainer">
                <h1 className="pagCarritoTitle">CARRITO DE COMPRAS</h1>
                <table className="pagCarritoTable">
                    <tbody>
                        {arrayCarrito == null || arrayCarrito.length === 0 ? (
                            <tr className="pagCarritoItem">
                                <th className="pagCarritoItemName">
                                    Aún no hay productos en el carrito, ¡Agrega
                                    alguno!
                                </th>
                            </tr>
                        ) : (
                            arrayCarrito.map(item => {
                                return (
                                    <CartItem
                                        key={item.dish.name}
                                        item={item}
                                        setArray={setArrayCarrito}
                                        array={arrayCarrito}
                                    ></CartItem>
                                );
                            })
                        )}
                    </tbody>
                </table>
                <p className="pagCarritoTotal">{"Total: $ " + total}</p>
            </div>
            {arrayCarrito == null || arrayCarrito.length === 0 ? (
                ""
            ) : (
                <button className="pagCarritoPagarBtn">
                    Check-Out y Pago{" "}
                    <img
                        className="pagCarritoPagarBtnFlecha"
                        src={arrowImg}
                        alt="ir al pago"
                    />
                </button>
            )}
        </main>
    );
};

const CartItem = ({ item, array, setArray }) => {
    const [amount, setAmount] = useState(item.amount);

    const handleMoreAmount = () => {
        const newAmount = amount + 1;
        setAmount(newAmount);
        const updatedItem = { ...item, amount: newAmount }; // Crea una nueva instancia de 'item' con la cantidad actualizada
        updateItemInArray(updatedItem); // Actualiza el estado 'array' con el 'item' actualizado
    };

    const handleLessAmount = () => {
        if (amount > 1) {
            const newAmount = amount - 1;
            setAmount(newAmount);
            const updatedItem = { ...item, amount: newAmount }; // Crea una nueva instancia de 'item' con la cantidad actualizada
            updateItemInArray(updatedItem); // Actualiza el estado 'array' con el 'item' actualizado
        }
    };

    const handleDeletion = name => {
        const updatedArray = array.filter(
            product => product.dish.name !== name
        );
        setArray(updatedArray);
        localStorage.setItem("cart", JSON.stringify(updatedArray));
    };

    const updateItemInArray = updatedItem => {
        const updatedArray = array.map(product => {
            if (product.dish.name === updatedItem.dish.name) {
                return updatedItem; // Reemplazar el 'item' actualizado en el array
            }
            return product;
        });
        setArray(updatedArray);
        localStorage.setItem("cart", JSON.stringify(updatedArray));
    };

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(array));
    }, [array]);

    return (
        <tr className="pagCarritoItem">
            <th className="pagCarritoItemShowAmount">X {item.amount}</th>
            <th className="pagCarritoItemImg">
                <img src={item.dish.img} alt="#" />
            </th>
            <th className="pagCarritoItemName">{item.dish.name}</th>
            <th className="pagCarritoItemEditAmount">
                <button
                    className={
                        amount <= 1
                            ? "itemCarritoEditAmoutChild itemCarritoLess disabled"
                            : "itemCarritoEditAmoutChild itemCarritoLess"
                    }
                    onClick={handleLessAmount}
                    disabled={amount <= 1 ? true : false}
                >
                    -
                </button>
                <div className="itemCarritoEditAmoutChild itemCarritoAmount">
                    {item.amount}
                </div>
                <button
                    className="itemCarritoEditAmoutChild itemCarritoMore"
                    onClick={handleMoreAmount}
                >
                    +
                </button>
            </th>
            <th className="pagCarritoItemPrice">
                {"$" + " " + item.dish.price * amount}
            </th>
            <th className="pagCarritoItemDelete">
                <button
                    className="itemCarritoDelete"
                    onClick={() => {
                        handleDeletion(item.dish.name);
                    }}
                >
                    <img className="itemCarritoDeleteImg" src={deleteImg} />
                </button>
            </th>
        </tr>
    );
};

export default PaginaCarrito;
