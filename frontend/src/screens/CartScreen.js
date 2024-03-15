import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col, ListGroup, Image, Form, Button, Card } from "react-bootstrap";
import { FaTrash } from "react-icons/fa";
import { Message } from "../components";
import { addToCart } from "../redux/slices/cartSlice";


const CartScreen = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const cart = useSelector(state => state.cart);

    const { cartItems } = cart;

    const updateCartHandler = (item, qty) => {
        dispatch(addToCart({ ...item, qty }));
    };

    const checkoutHandler = () => {
        console.log("checkout");
    };

    return <Row>
        <Col md={8}>
            <h1 style={{ marginBottom: "20px" }}>Shopping Cart</h1>
            {cartItems.length === 0 ? (
                <Message>
                    Your cart is empty <Link to="/">Go Back</Link>
                </Message>
            ) : (
                <ListGroup variant="flush">
                    {cartItems.map(item => {
                        return <ListGroup.Item key={item._id}>
                            <Row>
                                <Col md={2}>
                                    <Image src={item.image} alt={item.image} fluid rounded />
                                </Col>
                                <Col md={3}>
                                    <Link to={`/products/${item._id}`}>{item.name}</Link>
                                </Col>
                                <Col md={2}>
                                    £{item.price}
                                </Col>
                                <Col md={2}>
                                    <Form.Control as="select" value={item.qty} onChange={(e) => updateCartHandler(item, Number(e.target.value))}>
                                        {[...Array(item.countInStock).keys()].map(x => (
                                            <option key={x + 1} value={x + 1}>{x + 1}</option>
                                        ))}
                                    </Form.Control>
                                </Col>
                                <Col md={2}>
                                    <Button type="button" variant="light">
                                        <FaTrash style={{ color: "red" }} />
                                    </Button>
                                </Col>
                            </Row>
                        </ListGroup.Item>
                    })}
                </ListGroup>
            )}
        </Col>
        <Col md={4}>
            <Card>
                <ListGroup variant="flush">
                    <ListGroup.Item>
                        <h2>
                            Subtotal ({cartItems.reduce((acc, item) => acc + item.qty, 0)}) item{cartItems.length > 1 && "s"}
                        </h2>
                        £{cartItems.reduce((acc, item) => acc + item.price * item.qty, 0)}
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Button type="button" className="btn-block" disabled={cartItems.length === 0} onClick={checkoutHandler}>proceed to checkout</Button>
                    </ListGroup.Item>
                </ListGroup>
            </Card>
        </Col>
    </Row>
};

export default CartScreen;