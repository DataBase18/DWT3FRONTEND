
import React, { useContext, useState } from 'react';
import { Form, Button, Container, Col } from 'react-bootstrap'; 
import { login } from '../services/UserService.js';
import {ErrorModel} from '../models/ErrorModel.js'
import { Spinner } from 'react-bootstrap'; // Importa el Spinner de Bootstrap
import Swal from 'sweetalert2'; // Importa SweetAlert
import { SessionContext } from '../context/SessionContext.js';
import { Link, useNavigate } from 'react-router-dom';


export function Login() {

  const [loadingLogin, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();
  const state = useContext(SessionContext);

  const loginHandle = async (e) => {
    e.preventDefault();   
    setLoading(true);
    const responseLogin = await login(email, password); 

    if (responseLogin instanceof ErrorModel) { 
      Swal.fire({
        icon: 'error', 
        title: 'Error al iniciar sesión',
        text: responseLogin.message,  
      }); 
    } else {  
      state.setUser(responseLogin.name)
      navigate("/Home")
    }
    setLoading(false);
  } 

  const registerNavigateHandle = (e) => { 
    navigate("/Register")
  }

  return (
    <Container>
      <Col className="d-flex justify-content-center align-items-center" >
        <Form className="col-5 center" onSubmit={loginHandle}>
          <h2 className="mt-5">Iniciar Sesión</h2>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Ingresa tu email"
              value={email}
              onChange={
                (e) => setEmail(e.target.value)
              }
              required
            />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control
              type="password"
              placeholder="Ingresa tu clave"
              value={password}  
              onChange={
                (e) => setPassword(e.target.value)
              }  
              required
            />
          </Form.Group>

          <Container className="d-flex justify-content-center">
            <Button variant="primary" type="submit" className="mt-3" disabled={loadingLogin}>
              {
                loadingLogin ? (
                  <Spinner animation="border" size="sm" />
                ) : (
                  'Iniciar Sesión'
                )
              } 
            </Button> 
          </Container>

          <br />

          <Button variant="secondary" onClick={registerNavigateHandle}>
              Registrarme
          </Button>

        </Form>
      </Col>
    </Container>
  );
}
