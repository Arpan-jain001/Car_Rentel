document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = this[0].value;
    const email = this[1].value;
    const password = this[2].value;

    // Simulate saving to a database
    localStorage.setItem('user', JSON.stringify({ name, email, password }));

    alert('Account created successfully! You can now log in.');
    window.location.href = 'loginpage.html'; // Redirect to login page
});

document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = this[0].value;
    const password = this[1].value;

    const user = JSON.parse(localStorage.getItem('user'));

    if (user && user.email === email && user.password === password) {
        alert('Login successful!');
        // Redirect to the main page or dashboard
        window.location.href = 'dashboard.html'; // Replace with your main page
    } else {
        alert('Invalid email or password. Please try again.');
    }
});


const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

let users = []; // In-memory storage for demonstration

app.post('/signup', (req, res) => {
    const { name, email, password } = req.body;
    users.push({ name, email, password });
    res.status(201).send({ message: 'User  created successfully!' });
});

app.post('/login', (req, res) => {
    const { email, password } = req.body;
    const user = users.find(u => u.email === email && u.password === password);
    if (user) {
        res.send({ message: 'Login successful!' });
    } else {
        res.status(401).send({ message: 'Invalid email or password.' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://127.0.0.1:5500${5500}`);
});