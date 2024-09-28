import { useState } from "react";
import { Container, Form } from "react-bootstrap";
import {Card} from "react-bootstrap"
import {Button} from "react-bootstrap"
import {Spinner} from "react-bootstrap"
import { createAccount } from '../services/UserService.js';
import { ErrorModel } from "../models/ErrorModel.js";
import Swal from 'sweetalert2'; // Importa SweetAlert
import { useNavigate } from "react-router-dom";

export function RegisterScreen () {

  const [name, setName] = useState();
  const [email, setEmail] = useState()
  const [dpi, setDpi] = useState()
  const [password, setPassword] = useState()
  const [loadingCreateAccount , setLoadingCreateAccount]  =useState(false)
  const navigator = useNavigate()

  const registerHandle = async (e) => {
    e.preventDefault()
    setLoadingCreateAccount(true);
    const responseCreateAccount  = await createAccount(name, email, dpi, password); 

    if(responseCreateAccount instanceof ErrorModel){
      Swal.fire({
        icon: 'error', 
        title: 'Error al crear la cuenta',
        text: responseCreateAccount.message,  
      }); 
    }else {
      Swal.fire({
        icon: 'success', 
        title: 'Se creo la cuenta correctamente',
        text: "Por favor, ve a login para iniciar sesion",  
         
      }).then((result) => {
        if (result.isConfirmed) { 
          navigator("/Login");
        }
      });
    }
    setLoadingCreateAccount(false)
  }

  return (
    <Container className="d-flex justify-content-center  align-items-center  min-vh-100 ">
      <Card className="w-50">
        <Card.Body>
          <Form  onSubmit={registerHandle}>
            <Form.Group>
              <Form.Label>Nombre</Form.Label>
              <Form.Control 
                placeholder="Ingresa tu nombre"
                value={name}
                onChange={
                  (e) => setName(e.target.value)
                }
                required
              ></Form.Control>
            </Form.Group>
            <br />
            <Form.Group>
              <Form.Label>Email</Form.Label>
              <Form.Control 
                type="email" 
                placeholder="Ingresa tu correo"
                value={email}
                onChange={
                  (e) => setEmail(e.target.value)
                }
                required
              ></Form.Control>
            </Form.Group>
            <br />
            <Form.Group>
              <Form.Label>DPI</Form.Label>
              <Form.Control 
                type="number" 
                placeholder="Ingresa tu DPI"
                value={dpi}
                onChange={
                  (e) => setDpi(e.target.value)
                }
                required
              ></Form.Control>
            </Form.Group>
            <br />
            <Form.Group>
              <Form.Label>Contraseña</Form.Label>
              <Form.Control 
                type="password" 
                placeholder="Crea una contraseña"
                value={password}
                onChange={
                  (e) => setPassword(e.target.value)
                }
                required
              ></Form.Control>
            </Form.Group>

             <br />

             <Container className="d-flex justify-content-center">
                {
                  loadingCreateAccount ?  <Spinner animation="border" size="sm" />  : 
                  <Button  type="submit"   >Crear cuenta</Button>
                } 
             </Container>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}