import React from "react";
import { useParams, Link } from "react-router-dom";
import { useGetProductDetailsQuery } from "../redux/slices/productApiSlice";
import { Row, Col, Image, ListGroup, Card, Button } from "react-bootstrap";
import { Rating, Loading, Message } from "../components";


const ProductScreen = () => {
    const { id: productID } = useParams();
    const { data: product, isLoading, isError } = useGetProductDetailsQuery(productID);

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
                                    <ListGroup.Item>
                                        <Button style={{ width: "100%" }} type="button" disabled={product.countInStock === 0}>
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