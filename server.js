const express = require('express');
const exphbs = require('express-handlebars');

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.static('public'));
app.use(express.json());


app.engine('handlebars', exphbs({ defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

const routes = require('./controllers/burgersController.js');

app.use(routes);

app.listen(PORT, () => console.log(`App now listening at localhost:${PORT}`));

