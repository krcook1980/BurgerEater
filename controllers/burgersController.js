const express = require('express');
const exphbs = require('express-handlebars');
const router = express.Router();
const app = express();
const burger = require('../models/burgers.js');

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

//get
router.get('/', (req, res) => {
    burger.selectAll((data) => {
        const hbsObject = {
            burgers: data,
        };
       
        res.render('index', hbsObject);
    });

});

//post
router.post('/api/burgers', (req, res) => {
      
    burger.insertOne([req.body.name], (result) => {
        res.json(result);
    });
});


//put
router.put('/api/burgers/:id', (req, res) => {
    const id = `${req.params.id}`;
    

    burger.updateOne(
        id,
       
    (result) => {
        if (result.changedRows === 0) {
            return res.status(404).end();
        }
        res.status(200).end();
    }
    );
});

//export routes to server.js
module.exports = router;
