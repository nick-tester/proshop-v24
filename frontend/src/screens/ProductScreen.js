import React, { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useGetProductDetailsQuery } from "../redux/slices/productApiSlice";
import { Row, Col, Image, ListGroup, Card, Button, Form } from "react-bootstrap";
import { Rating, Loading, Message } from "../components";
import { addToCart } from "../redux/slices/cartSlice";


const ProductScreen = () => {
    const [qty, setQty] = useState(1);

    const { id: productID } = useParams();
    const { data: product, isLoading, isError } = useGetProductDetailsQuery(productID);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const addToCartHandler = () => {
        dispatch(addToCart({ ...product, qty }));
        navigate("/cart");
    }

    return (
        <>
            <Link to="/" className="btn btn-light my-3">Go Back</Link>
            {isLoading ? <Loading /> : isError ? <Message variant="danger">{isError?.data?.message || isError.error}</Message> : (
                <>
                    <Row>
                        <Col md={5}>
                            <Image src={product.image} alt={product.name} fluid />
                        </Col>
                        <Col md={4}>
                            <ListGroup variant="flush">
                                <ListGroup.Item>
                                    <h3>{product.name}</h3>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <Rating value={product.rating} text={`${product.numReviews} reviews`} />
                                </ListGroup.Item>
                                {/* <ListGroup.Item>
                                        Price: £{product.price}
                                    </ListGroup.Item> */}
                                <ListGroup.Item>
                                    <strong>Description:</strong> {[product.description]}
                                </ListGroup.Item>
                            </ListGroup>
                        </Col>
                        <Col md={3}>
                            <Card>
                                <ListGroup variant="flush">
                                    <ListGroup.Item>
                                        <Row>
                                            <Col>Price: </Col>
                                            <Col>
                                                <strong>£ {product.price}</strong>
                                            </Col>
                                        </Row>
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <Row>
                                            <Col>Status: </Col>
                                            <Col>
                                                <strong>{product.countInStock > 0 ? "In Stock" : "Out Of Stock"}</strong>
                                            </Col>
                                        </Row>
                                    </ListGroup.Item>
                                    {product.countInStock > 0 && (
                                        <ListGroup.Item>
                                            <Row>
                                                <Col>Qty</Col>
                                                <Col>
                                                    <Form.Control as="select" value={qty} onChange={(e) => setQty(Number(e.target.value))}>
                                                        {[...Array(product.countInStock).keys()].map(x => (
                                                            <option key={x + 1} value={x + 1}>{x + 1}</option>
                                                        ))}
                                                    </Form.Control>
                                                </Col>
                                            </Row>
                                        </ListGroup.Item>
                                    )}
                                    <ListGroup.Item>
                                        <Button style={{ width: "100%" }} type="button" disabled={product.countInStock === 0} onClick={addToCartHandler}>
                                            Add To Cart
                                        </Button>
                                    </ListGroup.Item>
                                </ListGroup>
                            </Card>
                        </Col>
                    </Row>
                </>
            )}
        </>
    )
};

export default ProductScreen;