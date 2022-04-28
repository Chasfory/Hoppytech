import Axios from 'axios';
import React, { useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';

function CreateHoppy({ name, description, picture}) {
    Axios.post('http://localhost:3000/hoppy', {
        name, description, picture
    }).then((response) => {
    });
}

export default function ModalUpload({ handleClose }) {
    const [state, setState] = useState({
        name: "",
        description: "",
        picture: ""
    });

    return (
        <div>
            <Modal.Header closeButton>
                <Modal.Title>New Picture</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3" controlId="upload_form">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="Hoppy au ski"
                            autoFocus
                            value={state.name}
                            onChange={(e) => {
                                setState({
                                    ...state,
                                    name: e.target.value,
                                });
                            }}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="upload_form">
                        <Form.Label>Description</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="Douce journée avec Hoppy"
                            autoFocus
                            value={state.description}
                            onChange={(e) => {
                                setState({
                                    ...state,
                                    description: e.target.value,
                                });
                            }}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="upload_form">
                        <Form.Label>Image url</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="https://website/picture.png"
                            autoFocus
                            value={state.picture}
                            onChange={(e) => {
                                setState({
                                    ...state,
                                    picture: e.target.value,
                                });
                            }}
                        />
                    </Form.Group>
                    <div className="d-grid gap-2 mt-3">
                        <Button type="submit" variant="primary" onClick={(e) => {
                            e.preventDefault();
                            CreateHoppy({ ...state});
                        }}>
                            Upload
                        </Button>
                    </div>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <p>Aucun Hoppy n'a été blessé au cours de la construction de ce site</p>
            </Modal.Footer>
        </div>
    );
}