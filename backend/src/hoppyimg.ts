import express from "express";
import { HoppyImgModel } from "./models";

const router = express.Router();

router.post('/hoppy', (req, res) => {
    HoppyImgModel.create({
        latitude: 0,
        longitude: 0,
        name: req.body.name,
        date: new Date(),
        picture: req.body.picture,
        description: req.body.description,
    }).then(value => {
        res.status(201).send('hoppy created');
    }).catch(reason => {
        console.error(reason);
        res.status(500).send('internal error');
    });
});

router.get('/hoppy', (req, res) => {
    HoppyImgModel.find().then(value => {
        res.status(200).json(value);
    }).catch(reason => {
        console.error(reason);
        res.status(500).send('crash');
    });
});

router.delete('/hoppy/:id', (req, res) => {
    HoppyImgModel.deleteOne({ id: req.params.id }).then(value => {
        res.status(201).send('hoppy deleted');
    }).catch(reason => {
        console.error(reason);
        res.status(500).send('not good');
    });
})

router.put('/hoppy/:id', (req, res) => {
    HoppyImgModel.updateOne({ id: req.params.id }, { $set: { name: req.body.name, description: req.body.description } }).then(value => {
        res.status(201).send('hoppy changed');
    }).catch(reason => {
        console.error(reason);
        res.status(500).send('not good change');
    });
})

router

export default router;