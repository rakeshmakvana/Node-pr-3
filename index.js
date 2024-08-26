const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const router = require('./routes/routes');
const app = express();
const PORT = 3005;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'views')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/', router);

app.listen(PORT, (err) => {
    if (!err) {
        console.log(`Server running in http://localhost:${PORT}`);
    };
});