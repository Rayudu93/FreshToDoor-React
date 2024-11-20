import React, { useState } from 'react';
import './ContactUs.css';

    const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
        ...formData,
        [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here, such as sending the data to an API
        console.log('Form submitted:', formData);
        // Reset form data if necessary
        setFormData({
        name: '',
        email: '',
        message: ''
        });
    };

    return (
        <>
        <div className="container">
        <div className="contact">
            <h2>Contact Us</h2>
            <p>If you have any questions or need assistance, please feel free to contact us:</p>
            <ul>
            <li>Email: easydrives@yourcarrentals.com</li>
            <li>Phone: 1-800-123-4567</li>
            <li>Address: 123 Car Rental St,</li>
            </ul>
            <p>You can also fill out the form below and we'll get back to you as soon as possible:</p>
            <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label><br />
            <input 
                type="text" 
                id="name" 
                name="name" 
                value={formData.name} 
                onChange={handleChange} 
            /><br />
            <label htmlFor="email">Email:</label><br />
            <input 
                type="email" 
                id="email" 
                name="email" 
                value={formData.email} 
                onChange={handleChange} 
            /><br />
            <label htmlFor="message">Message:</label><br />
            <textarea 
                id="message" 
                name="message" 
                rows="4" 
                value={formData.message} 
                onChange={handleChange} 
            /><br />
            <input type="submit" value="Submit" />
            </form>
        </div>
        </div>
        <footer>
        <center>
        <a href="#" style={{ color: 'white', textDecoration: 'none' }}>@Rayudu Roy</a>
        <p>Copyrights &copy; 2023-2026 | All rights are reserved</p>
        </center>
        <div style={{ color: '#f4f4f4' }}>
        <a href="#" className="social2" style={{ color: '#f4f4f4', marginRight: '30px' }}><i className="bi bi-instagram"></i></a>
        <a href="#" className="social2" style={{ color: '#f4f4f4', marginRight: '30px' }}><i className="bi bi-facebook"></i></a>
        <a href="#" className="social2" style={{ color: '#f4f4f4' }}><i className="bi bi-twitter"></i></a>
        </div>
    </footer>
    </>
    );
    };

    export default ContactUs;
