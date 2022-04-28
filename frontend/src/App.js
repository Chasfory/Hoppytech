import React, { useState } from 'react';
import HoppyImageGetter from './HoppyImageGetter';
import HoppyNavb from './HoppyNavb';
import ModalUpload from './ModalUpload';
import { Helmet } from 'react-helmet';
import { Routes, Route } from "react-router-dom";
import { Button, Container, Modal, Accordion } from 'react-bootstrap';

function HoppyInsta() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <Container>
            <div className="d-grid gap-2 mt-3">
                <Button variant="success" size="lg" onClick={handleShow}>Upload</Button>

                <Modal show={show} onHide={handleClose}>
                    <ModalUpload handleClose={handleClose} />
                </Modal>
            </div>
            <div className="mt-3">
                <HoppyImageGetter />
            </div>
        </Container>
    );
}

function Hoppy() {

    return (
        <div>
            <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>GeoHoppy</Accordion.Header>
                    <Accordion.Body>
                        Locate Hoppy based on images posted at their satellite positions.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>HoppyInsta</Accordion.Header>
                    <Accordion.Body>
                        Share all your photos taken with Hoppy to share them with as many people as possible.
                        We love our cat!!! And know what he's doing. Especially since we're not going to lie to each other...He's too CUTE!!!
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>HoppyRun</Accordion.Header>
                    <Accordion.Body>
                        Show you're the best with HoppyRun. As we say so well,
                        you have to become the best trainer in the world.
                        One day I will be the best trainer in Hoppy!!!!.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
            <Helmet bodyAttributes={{style: 'background-color : black'}}/>
        </div>
    )
}

function App() {
    return (
        <div>
            <HoppyNavb />
            <Routes>
                <Route path="/hoppyInsta" element={<HoppyInsta />} />
                <Route path="/" element={<Hoppy />} />
            </Routes>
        </div>
    );
}

export default App;
