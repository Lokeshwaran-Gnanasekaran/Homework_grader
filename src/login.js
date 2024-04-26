import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './navbar';
import './App.css' // Import useNavigate for navigation

function Login({ role, onLogin }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate(); // Hook for navigation
    
    const handleSubmit = (event) => {
        event.preventDefault();
        if (username == 'Student' && password == 'Student' && role == 'Student') {
            console.log('hiii')
            // onLogin({ username, role });  // Pass user data to parent component
            navigate('/student-dashboard');  // Navigate to student dashboard
        } else if (username === 'Professor' && password === 'Professor' && role === 'Professor') {
            // onLogin({ username, role });  // Pass user data to parent component
            navigate('/teacher-dashboard');  // Navigate to teacher dashboard
        } else {
            alert('Invalid credentials');
        }
    };

    return (
        <div>
            <Navbar />
        {/* <div className="containers"> */}
        <div className="login-wrapper">
        <div className="login-container">
        <div className="login-illustration">
            {/* Place your image here */}
            <img src="./Work_7.jpg" alt="Illustration" className="illustration-img" />
        </div>
            <div className="login-form">
            <h2>{role.charAt(0).toUpperCase() + role.slice(1)} Login</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Username:  <span className="required-star">*</span></label>
                    <input type="text" className="form-control" value={username} onChange={e => setUsername(e.target.value)} />
                    <small className="form-text text-muted">Hint: Username is "{role}"</small>
                </div>
                <div className="form-group">
                    <label>Password: <span className="required-star">*</span></label>
                    <input type="password" className="form-control" value={password} onChange={e => setPassword(e.target.value)} />
                    <small className="form-text text-muted">Hint: Password is "{role}"</small>
                </div>
                <button type="submit" className="btn btn-primary">Login</button>
            </form>
        </div>
        
        </div>
        </div>
        </div>
    );
}

export default Login;
