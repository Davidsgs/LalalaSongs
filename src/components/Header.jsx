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

  const btnStyle = {
    textDecoration: "none",
    color: "white",
    fontWeight: "bolder"
  }

  return (
    <>
      <Navbar style={{backgroundColor : "rgb(17, 32, 49)"}} variant="light">
        <Container>
          <Nav style={btnStyle} className="m-auto">

            <Button variant="link" style={btnStyle} onClick={irAAcercaDe}>Acerca De</Button>
            <Button variant="link" style={btnStyle} onClick={irAlInicio}>Inicio</Button>
            <Button variant="link" style={btnStyle} onClick={irABuscarCancion}>Buscar Cancion</Button>

          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
