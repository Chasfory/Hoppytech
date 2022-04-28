import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';

export default function HoppyNavb() {
    return (
        <Navbar bg="dark" variant="dark">
            <Container fluid>
                <Navbar.Brand href="/">Hoppy</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/GeoHoppy">GéoHoppy</Nav.Link>
                    <Nav.Link href="/HoppyInsta">HoppyInsta</Nav.Link>
                    <Nav.Link href="/HoppyRun">HoppyRun</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}