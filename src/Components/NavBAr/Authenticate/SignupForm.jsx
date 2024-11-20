import React, { useState } from 'react';
import './style.css'; // Ensure this file is created for styling

const SignupForm = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle signup logic here
        console.log({ username, email, password, confirmPassword });
    };

    return (
        <div className="container">
            <div className="login form">
                <header>Signup</header>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="Enter your Name"
                        required
                    />
                    <input
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        required
                    />
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Create a password"
                        required
                    />
                    <input
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        placeholder="Confirm your password"
                        required
                    />
                    <input type="submit" className="button" value="Signup" />
                </form>
                <div className="Login">
                    <span style={{ marginLeft: '80px' }}>
                        Already Registered? <a href="/login">login</a>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default SignupForm;
