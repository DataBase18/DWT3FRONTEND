import { Component, useContext } from "react";
import { Card, Container } from "react-bootstrap";
import { SessionContext } from "../context/SessionContext";


export function Home(){

  const state = useContext(SessionContext)
  console.log(state);
  
  return (
    <Container className="d-flex justify-content-center align-items-center min-vh-100">
      <Card>
        <Card.Body>
          <Card.Title>Bienvenido {state.user}</Card.Title>
          <Card.Text>
            Prueba de UseContext con enrutamiento con Router de REact
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
}