import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";


const RutaAdmin = ({ children }) => {
    const { loading, estaLogueado, usuario } = useSelector((state) => state.usuario);
    
    if (loading === false) {
        if (!estaLogueado) {
            return <Navigate to="/login" replace />;
        }else if(usuario && usuario.role !== 'admin'){
            return <Navigate to="/" replace />
        }
    }
    return children;
};


export default RutaAdmin;