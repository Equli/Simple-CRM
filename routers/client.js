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
        res.send('Pobierz pojedynczego');
    })
    .post('/', (req,res) => {
        res.send('Dodaj');
    })
    .put('/:id', (req,res) => {
        res.send('Zmodyfikuj');
    })
    .put('/:id', (req,res) => {
        res.send('Usuń');
    });

module.exports ={
    clientRouter,
};