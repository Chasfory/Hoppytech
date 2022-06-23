import express from "express";
import { User } from "./connection_models";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const router = express.Router();

router.post('/register', (req, res) => {
    User.create({
        username: req.body.username,
        password: bcrypt.hashSync(req.body.password, 10),
    }).then(value => {
        res.status(201).send('Account created');
    }).catch(reason => {
        console.error(reason);
        res.status(500).send('User already exist');
    });
})

router.post('/login', (req, res) => {
    User.findOne( { username: req.body.username } ).then(value => {
        const password:string = value?.password!;
        if (bcrypt.compareSync(req.body.password, password)) {
            const token = jwt.sign({id: value?.id!}, 'azertyuiop', { expiresIn: '1h' });
            res.status(201).json({ token: token });
        } else {
            res.status(500).send('User does not exist');
        }
    }).catch(reason => {
        console.error(reason);
        res.status(500).send('User does not exist');
    });
})

export default router;