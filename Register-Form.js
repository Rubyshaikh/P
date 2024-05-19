import React, { useState } from 'react';
import axios from 'axios';

const RegisterForm = () => {
    const [userData, setUserData] = useState({});

    const handleChange = (e) => {
        setUserData({ ...userData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('/register', userData);
            alert('User registered successfully');
        } catch (error) {
            console.error('Error registering user:', error);
            alert('Failed to register user');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="firstName" placeholder="First Name" onChange={handleChange} />
            <input type="text" name="lastName" placeholder="Last Name" onChange={handleChange} />
            <input type="email" name="email" placeholder="Email" onChange={handleChange} />
            <input type="tel" name="phoneNumber" placeholder="Phone Number" onChange={handleChange} />
            <select name="userType" onChange={handleChange}>
                <option value="seller">Seller</option>
                <option value="buyer">Buyer</option>
            </select>
            <button type="submit">Register</button>
        </form>
    );
};

export default RegisterForm;
