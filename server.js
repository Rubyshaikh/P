// Import necessary modules
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Middleware
app.use(bodyParser.json());

// Database (simulated)
let users = [];
let properties = [];

// User Registration
app.post('/register', (req, res) => {
    const { firstName, lastName, email, phoneNumber, userType } = req.body;
    const newUser = { firstName, lastName, email, phoneNumber, userType };
    users.push(newUser);
    res.status(201).json({ message: 'User registered successfully' });
});

// Seller Flow
app.post('/properties', (req, res) => {
    const { location, area, bedrooms, bathrooms, amenities } = req.body;
    const newProperty = { location, area, bedrooms, bathrooms, amenities };
    properties.push(newProperty);
    res.status(201).json({ message: 'Property posted successfully' });
});

app.get('/properties', (req, res) => {
    res.status(200).json(properties);
});

// Buyer Flow
app.get('/properties', (req, res) => {
    res.status(200).json(properties);
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(Server running on port ${PORT}));
