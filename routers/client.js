const express = require('express');
const {db} = require('../utils/db');

const clientRouter = express.Router();

clientRouter
    .get('/', (req,res) => {
        res.render('client/list-all', {
            clients: db.getAll(),
        });
    })
    .get('/:id', (req,res) => {
        // clients.db.getOne(req.params.id);
        res.render('client/one',{
            clients: db.getOne(req.params.id)
        });
    })
    .post('/', (req,res) => {
        res.send('Dodaj');
    })
    .put('/:id', (req,res) => {
        res.send('Zmodyfikuj');
    })
    .delete('/:id', (req,res) => {
        db.delete(req.params.id);
        res.render('client/deleted');
    });

module.exports ={
    clientRouter,
};