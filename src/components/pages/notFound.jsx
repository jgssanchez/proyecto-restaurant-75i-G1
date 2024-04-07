import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const notFound = () => {
  return (
    <div className="text-center mainSection">
      <h1>Error 404 - Página no encontrada</h1>
      <p>Lo sentimos, la página que estás buscando no existe.</p>
      {/* Aquí puedes usar un enlace si estás utilizando enrutamiento */}
      {/* <Link to="/"> */}
      {/*   <Button variant="primary">Volver al inicio</Button> */}
      {/* </Link> */}
      {/* O simplemente un botón que redireccione */}
      <Button variant="primary" onClick={() => window.location.href = '/'}>Volver al inicio</Button>
    </div>
  );
};

export default notFound;
