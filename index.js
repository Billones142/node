const express = require('express')
const ejs = require('ejs');
const path = require('path'); // Import the path module
const app = express()
const port = 3000

app.engine('html', ejs.renderFile);

app.get('/', function (req, res) {
    email = req.query.email;
    password = req.query.password;

    const filePath = path.join(__dirname, 'pagina/index.html'); // Ruta al archivo HTML
    console.log(req.url);
    console.log("email: " + email);
    console.log("password: " + password);
    res.render(filePath, { email: email, password: password });
})

app.get('/pagina/prueba.js', function(req, res){
    res.sendFile(__dirname + '/pagina/prueba.js');
});

app.post('/login', (req, res) => {
    // Code to handle form data from the login form
});

app.listen(port, function () {
    console.log(`Example app listening on port ${port}`)
})