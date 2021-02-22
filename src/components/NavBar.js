//components
import { Navbar, Nav } from 'react-bootstrap';
import AppIcon from "../views/img/App_icon.png";

export const Navigator = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/">
        <img
          alt=""
          src={AppIcon}
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{' '}
      MeMe Chat
  </Navbar.Brand>
      <Nav className="ml-auto">
        <Nav.Link href="/about">Features</Nav.Link>
        <Nav.Link href="/download">Download</Nav.Link>
        <Nav.Link href="/recharge">Recharge</Nav.Link>
      </Nav>
    </Navbar>

  )
};



