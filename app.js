const express = require('express');
const app = express();
const port=process.env.PORT || 3000;
const ejs = require('ejs');

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
app.get('/', (req, res) => {
    res.render('index');
});

app.use(function (req, res, next) {
    res.status(404).send('404 - Not Found!');
});

app.listen(port, () => {
    console.log('Example app listening on port :'+port);
});
