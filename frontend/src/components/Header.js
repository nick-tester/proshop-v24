import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import { LinkContainer as Link } from "react-router-bootstrap";
import logo from "../assets/logo.png";


const Header = () => {
    return <header>
        <Navbar bg="dark" variant="dark" expand="md" collapseOnSelect>
            <Container>
                <Link to="/">
                    <Navbar.Brand>
                        <img src={logo} alt="logo" />
                        ProShop
                    </Navbar.Brand>
                </Link>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Link to="/cart">
                            <Nav.Link><FaShoppingCart /> Cart</Nav.Link>
                        </Link>
                        <Link to="/user">
                            <Nav.Link><FaUser /> Log In</Nav.Link>
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </header>
};

export default Header;