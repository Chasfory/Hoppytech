import React, { useState } from 'react';
import Moment from "moment";
import Axios from 'axios';
import { Button, Modal, Form } from 'react-bootstrap';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import { useNavigate } from 'react-router';

function DeleteCardHoppy({id, onSucces, onError}) {
    Axios.delete('http://localhost:3000/hoppy/' + id).then((reponse) => {
        onSucces(reponse);
    }).catch((error) => {
        onError(error);
    });
}

function DeleteHoppy({ id }) {
    let navigate = useNavigate();

    return (
        <div>
            <Modal.Header closeButton>
                <Modal.Title>Delete Picture</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <div className="d-grid gap-2 mt-3">
                        <Button type="submit" variant="primary" onClick={(e) => {
                            e.preventDefault();
                            DeleteCardHoppy(({
                                id: id, onSucces: () => {
                                    navigate('/hoppyInsta');
                                },
                                onError: () => {
                                    console.log("error");
                                }
                            }));
                        }}>
                            Delete
                        </Button>
                    </div>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <p>Aucun Hoppy n'a été blessé au cours de la destruction de cette image</p>
            </Modal.Footer>
        </div>
    );
}

function EditCardHoppy({ name, description, id, onSucces, onError }) {
    console.log(id)
    Axios.put('http://localhost:3000/hoppy/' + id, { name, description }).then((response) => {
        onSucces(response);
    }).catch((error) => {
        onError(error);
    });
}

function EditHoppy(props) {
    const [state, setState] = useState({
        name: props.name,
        description: props.description,
        id: props.id
    });
    let navigate = useNavigate();

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
                    <div className="d-grid gap-2 mt-3">
                        <Button type="submit" variant="primary" onClick={(e) => {
                            e.preventDefault();
                            console.log(state)
                            EditCardHoppy({
                                name: state.name, description: state.description, id: state.id, onSucces: () => {
                                    navigate('/hoppyInsta');
                                },
                                onError: () => {
                                    console.log("error");
                                }
                            })
                        }}>
                            Edit
                        </Button>
                    </div>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <p>Aucun Hoppy n'a été blessé au cours de la construction de ce site</p>
            </Modal.Footer>
        </div >
    );
}

function DropdownOptions({ name, description, id }) {
    const [show, setShow] = useState(false);
    const [showDelete, setShowDelete] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleCloseDelete = () => setShowDelete(false);
    const handleShowDelete = () => setShowDelete(true);

    const handleSelect = (e) => {
        if (e === "Delete") {
            handleShowDelete();
        }
        if (e === "Edit") {
            handleShow();
        }
    }

    return (
        <div className="container">

            <DropdownButton
                title="Options"
                onSelect={handleSelect}
            >
                <Dropdown.Item eventKey="Edit">
                    Edit
                </Dropdown.Item>
                <Dropdown.Item eventKey="Delete">
                    Delete
                </Dropdown.Item>
            </DropdownButton>
            <Modal show={show} onHide={handleClose}>
                <EditHoppy name={name} description={description} id={id} />
            </Modal>
            <Modal show={showDelete} onHide={handleCloseDelete}>
                <DeleteHoppy id={id} />
            </Modal>
        </div >
    );
}

export default function HoppyCard({ name, description, date, image_url, id }) {
    return (
        <div className="card">
            <img src={image_url} className="card-img-top" alt="hoppy" />
            <div className="card-body">
                <DropdownOptions key={id} id={id} name={name} description={description} />
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{description}</p>
            </div>
            <div className="card-footer">
                <small className="text-muted">Posted {Moment(date).fromNow()}</small>
            </div>
        </div>
    );
}