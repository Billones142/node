const express = require('express')
const ejs = require('ejs');
const path = require('path'); // Import the path module
const app = express()
const port = 3000

app.engine('html', ejs.renderFile);

app.get('/', function (req, res) {
    email = req.query.email;
    password = req.query.password;

    const filePath = path.join(__dirname, 'index.html'); // Ruta al archivo HTML
    res.render(filePath, { email: email, password: password });
})

app.listen(port, function () {
    console.log(`Example app listening on port ${port}`)
})