import React from "react";
import { Container, Navbar, Nav, Badge } from "react-bootstrap";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import { LinkContainer as Link } from "react-router-bootstrap";
import { useSelector } from "react-redux";
import logo from "../assets/logo.png";


const Header = () => {
    const { cartItems } = useSelector(state => state.cart);

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
                            <Nav.Link>
                                <FaShoppingCart /> Cart
                                {cartItems.length > 0 && (
                                    <Badge pill bg="success" style={{ marginLeft: "5px" }}>
                                        {cartItems.reduce((a, i) => a + i.qty, 0)}
                                    </Badge>
                                )}
                            </Nav.Link>
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