
import { Container, ListGroup } from 'react-bootstrap';
import { useSelector} from 'react-redux';


function UserList() {

  const {usuarios} = useSelector(state => state.usuario);

  return (
    <Container className='container w-50 my-3 align-content-center'>
    <h1 className='titulo text-center'>Lista de Usuarios</h1>
    <ListGroup>
      {usuarios.map(usuarios => (
        <ListGroup.Item key={usuarios.id}>
          {usuarios.nombre} - {usuarios.email}
        </ListGroup.Item>
      ))}
    </ListGroup>
  </Container>

  );
}

export default UserList;
