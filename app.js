//users
const users = [

    {
        user: 'luis',
        password: '123'
    },
    {
        user: 'juan',
        password: '456'
    }
]
const express = require('express');
const path = require('path');
const app = express();

const PORT = 3030;






//middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'views')));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'views/home.html'));
})


app.post('/login', function(req, res) {
    let logueado = false;
    const { user, password } = req.body;
    if (user != '' && password != '') {
        for (let i = 0; i < users.length; i++) {
            if (user === users[i].user && password === users[i].password) {
                logueado = true;
            }
        }
        if (logueado) {
            res.sendFile(path.join(__dirname, 'views/redirect.html'));

        } else {
            res.sendFile(path.join(__dirname, 'views/login.html'));
        }
    } else {
        res.send('<h1>Por favor, llenar ambos campos</h1>')
    }
});

app.get('/register', function(req, res) {
    res.sendFile(path.join(__dirname, 'views/register.html'));
})


app.post('/register', function(req, res) {
    const { userName, password, passwordConfirm } = req.body;
    let newUser;
    for (let i = 0; i < users.length; i++) {
        if (userName === users[i].user && password === users[i].password) {
            newUser = false;
        }
        /*         } else if (userName != users[i].user && password != users[i].password) {
                    if (password === passwordConfirm) {
                        newUser = true;
                    } */
    }
    if (newUser === false) {
        res.sendFile(path.join(__dirname, 'views/register.html'));
    } else {
        users.push({ user: userName, password: password });
        res.sendFile(path.join(__dirname, 'views/login.html'));
    }
    console.log(users);
})



app.listen(PORT, function() {
    console.log(`El servidor esta corriendo en el puerto ${PORT}`);
});