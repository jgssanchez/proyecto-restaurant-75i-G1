import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
// import { autoCloseAlert } from "../utils/alerts";

const RutaProtegida = ({ children }) => {
    const { loading, estaLogueado } = useSelector((state) => state.usuario);

    if (!loading && !estaLogueado) {
        // autoCloseAlert('Primero debes loguearte', 'warning', '#F56903')
        alert("Primero debes loguearte")
        return <Navigate to="/login" replace />;
    }
    return children;
};

export default RutaProtegida;