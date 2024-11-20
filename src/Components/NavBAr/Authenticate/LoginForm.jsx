import React, { useState } from 'react';
import './style.css'; // Ensure this file is created for styling

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle login logic here
        console.log({ email, password });
    };

    return (
        <div className="container">
            <div className="login form">
                <header>Login</header>
                <form onSubmit={handleSubmit}>
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
                        placeholder="Enter your password"
                        required
                    />
                    <a href="#">Forgot password?</a>
                    <input type="submit" className="button" value="Login" />
                </form>
                <div className="signup">
                    <span>
                        Don't have an account? <a href="/signup">Signup</a>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default LoginForm;
