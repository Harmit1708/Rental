import React, { useContext } from "react";
import { Navbar, Nav } from "react-bootstrap";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { rentContext } from "../App";
function Header() {
  let context = useContext(rentContext);
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="/dashboard">Rental</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="/dashboard">Home</Nav.Link>
            <Nav.Link href="/help">Help</Nav.Link>
            <Nav.Link href="/cart">
              <ShoppingCartIcon />
              <span className="count">{context.cartValue}</span>
            </Nav.Link>
            <Nav.Link href="/login" className="btn btn-outline-secondary">
              Login&nbsp;/&nbsp;Signup
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Header;
