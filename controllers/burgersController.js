const express = require('express');

const router = express.Router();

const burger = require('../models/burgers.js');

//get
router.get('/', (req, res) => {

});

//post
router.post('/api/burgers', (req, res) => {

});


//put
router.put('/api/burgers/:id', (req, res) => {

});

//export routes to server.js
module.exports = router;
