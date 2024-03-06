import { Row, Col } from "react-bootstrap";
import { Product, Loading } from "../components";
import { useGetProductsQuery } from "../redux/slices/productApiSlice";


const HomeScreen = () => {
    const { data: products, isLoading, isError } = useGetProductsQuery();

    return (
        <>
            {isLoading ? <Loading /> : isError ? <h1>{isError?.data?.message || isError.error}</h1> : (
                <>
                    <h1>Latest Products</h1>
                    <Row>
                        {products.map(product => {
                            return (
                                <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                                    <Product product={product} />
                                </Col>
                            )
                        })}
                    </Row>
                </>
            )}
        </>
    )
};

export default HomeScreen;