import returnArrow from "../../assets/arrow-forward.svg";
import "../cssPages/details.css";
import { HashLink } from "react-router-hash-link";

const ProductDetails = ({ objectPage }) => {
    return (
        <main className="pagDetails" id="detailsPage">
            <HashLink smooth to="/#mainMenu" className="detailsReturnBtn">
                <img src={returnArrow} alt="" />
            </HashLink>
            <section className="detailsSection">
                <div className="detailsImgContainer">
                    <img src={objectPage.img} alt="" className="detailsImg" />
                </div>
                <div className="detailsTextContainer">
                    <h1 className="detailsProductName">{objectPage.name}</h1>
                    <p className="detailsProductDesc">{objectPage.details}</p>
                    <h3 className="detailsProductState">
                        {objectPage.state
                            ? "Disponible"
                            : "No se encuentra disponible."}
                    </h3>
                    <h2 className="detailsProductPrice">
                        {"$ " + objectPage.price}
                    </h2>
                    <button className="detailsProductAddToCart">
                        + Añadir a la Orden
                    </button>
                </div>
            </section>
        </main>
    );
};

export default ProductDetails;
