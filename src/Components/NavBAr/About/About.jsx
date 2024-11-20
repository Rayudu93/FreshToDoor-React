import 'bootstrap-icons/font/bootstrap-icons.css';
import React from 'react';
import HeaderPart from '../../Header/Header';
import './About.css';
    const AboutUs = () => {
    return (
        <div>
            <HeaderPart />
        <header>
            <h1>Welcome to Fresh to Door</h1>
            <p>Your one-stop solution for fresh produce delivered straight to your door.</p>
        </header>

        <section>
            <h2>Our Values</h2>
            <ul>
            <li><strong>Quality:</strong> We are committed to providing the highest quality produce to our customers.</li>
            <li><strong>Convenience:</strong> We strive to make grocery shopping easy and hassle-free.</li>
            <li><strong>Sustainability:</strong> We prioritize sustainability in everything we do, from sourcing to delivery.</li>
            <li><strong>Community:</strong> We believe in building strong relationships with our customers and supporting our local community.</li>
            </ul>
        </section>

        <section>
            <h2>Meet Our Team</h2>
            <p>Behind Fresh to Door is a dedicated team of professionals who are passionate about bringing fresh produce to your doorstep. Get to know the people who make it all happen:</p>
            <ul>
            <li><strong>John Smith - Founder & CEO:</strong> With a background in agriculture, John is the driving force behind Fresh to Door's mission.</li>
            <li><strong>Amy Johnson - Head of Operations:</strong> Amy ensures that our operations run smoothly and efficiently.</li>
            <li><strong>David Lee - Head of Marketing:</strong> David leads our marketing efforts to spread the word about Fresh to Door.</li>
            {/* Add more team members as needed */}
            </ul>
        </section>

        <section>
            <h2>Our Partners</h2>
            <p>We are proud to partner with local farmers, producers, and suppliers who share our commitment to quality and sustainability. Together, we work to bring you the freshest produce possible.</p>
        </section>

        <section style={{ paddingBottom: '125px' }}>
            <h2>Contact Us</h2>
            <p>If you have any questions, feedback, or inquiries, please don't hesitate to reach out to us. We're here to help!</p>
            <p>Email: info@freshtodoor.com</p>
            <p>Phone: 1-800-FRESH-TO-DOOR</p>
        </section>

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
        </div>
    );
    };

    export default AboutUs;
