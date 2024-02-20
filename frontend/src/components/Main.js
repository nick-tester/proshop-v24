import React from "react";
import { Container } from "react-bootstrap";


const Main = ({ children }) => {
    return (
        <main className="py-3">
            <Container>
                {children}
            </Container>
        </main>
    )
};

export default Main;