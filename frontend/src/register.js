import React, { useState } from 'react';
import Axios from 'axios';
import { Button, Form, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router';

function RegisterCompte({ username, password, onSucces, onError}) {
    Axios.post('http://localhost:3000/register/', { username, password }).then((response) => {
        console.log("it's good edit")
        onSucces(response);
    }).catch((error) => {
        onError(error);
    });
}

export default function RegisterHoppy() {

    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    let navigate = useNavigate();

    return (
        <Container>
            <Form className="Auth-form">
                <Form.Group className="mb-3" controlId="upload_form">
                    <Form.Label>username</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="Username"
                        autoFocus
                        value={username}
                        onChange={(e) => {
                            setUsername(e.target.value);
                        }}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="upload_form">
                    <Form.Label>password</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="Password"
                        autoFocus
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value);
                        }}
                    />
                </Form.Group>
                <div className="d-grid gap-2 mt-3">
                    <Button type="submit" className="btn btn-primary" onClick={(e) => {
                        e.preventDefault();
                        RegisterCompte({ username: username, password: password, onSucces: () => {
                            navigate('/login');
                        },
                        onError: () => {
                            console.log("error");
                        }});
                    }}>
                        Register
                    </Button>
                </div>
            </Form>
        </Container>
    );
}