import React, { useState } from 'react';
import axiosInstance from '../api/axiosInstance';

const Signup = () => {
    const [form, setForm] = useState({ email: '', name: '', password: '', confirm_password: '' });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (form.password !== form.confirm_password) return alert("Passwords don't match");
        try {
            await axiosInstance.post('/auth/register/', form);
            alert('Registration successful');
        } catch (err) {
            alert('Registration failed');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Signup</h2>
            <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
            <input type="text" name="name" placeholder="Name" onChange={handleChange} required />
            <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
            <input type="password" name="confirm_password" placeholder="Confirm Password" onChange={handleChange} required />
            <button type="submit">Register</button>
        </form>
    );
};

export default Signup;
