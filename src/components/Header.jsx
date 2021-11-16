import React from "react";
import { Container, Nav, Navbar, Button } from "react-bootstrap";
import {useHistory} from 'react-router-dom';

const Header = () => {

  let history = useHistory();

  const irAlInicio = () => {
    history.push("/");
  }

  const irAAcercaDe = () => {
    history.push("/acercaDe");
  }

  const irABuscarCancion = () => {
    history.push("/buscarCancion");
  }
  return (
    <>
      <Navbar style={{backgroundColor : "rgb(212, 236, 221)", color:"black !important"}} variant="light">
        <Container>
          <Nav className="m-auto">

            <Button variant="link" onClick={irAAcercaDe}>Acerca De</Button>
            <Button variant="link" onClick={irAlInicio}>Inicio</Button>
            <Button variant="link" onClick={irABuscarCancion}>Buscar Cancion</Button>

          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
