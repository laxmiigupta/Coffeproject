import React from "react";
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  Button,
  NavbarToggler,
  Collapse,
} from "reactstrap";
import logo from '../assets/logo.jpeg'; // Adjust path as per your project 
import { useNavigate } from "react-router-dom";

export default function Header() {
  const [isOpen, setIsOpen] = React.useState(false);
  const navigate = useNavigate();

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar
      style={{
        backgroundColor: "#000",
        borderBottom: "2px solid #000",
        padding: "10px 20px",
      }}
      light
      expand="md"
    >
      {/* Logo */}
      <NavbarBrand href="/">
        <img
          src={logo}
          alt="Logo"
          style={{ width: "100px", height: "30px" }}
        />
      </NavbarBrand>

      {/* Toggler for mobile view */}
      <NavbarToggler onClick={toggle} />

      {/* Collapsible navigation links */}
      <Collapse isOpen={isOpen} navbar>
        <Nav className="ms-auto" navbar>
          <NavItem>
            <Button
              style={{
                backgroundColor: "#000",
                color: "#fff",
                border: "1px solid #000",
                marginRight: "10px",
              }}
            >
              Login
            </Button>
          </NavItem>
          <NavItem>
            <Button
              style={{
                backgroundColor: "#fff",
                color: "#000",
                border: "1px solid #000",
              }}
              onClick={() => navigate("/signup")}
            >
              Signup
            </Button>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
}
