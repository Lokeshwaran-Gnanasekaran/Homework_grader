import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './navbar';
import Student from './student';
import Teacher from './teacher';
import Login from './login';
import LandingPage from './landing';
import Analysis from './analysis';




function App() {
    const [user, setUser] = useState(null);

    const handleLogin = (username, password, role) => {
        if ((role === 'student' && username === 'student' && password === 'student') ||
            (role === 'teacher' && username === 'teacher' && password === 'teacher')) {
            setUser({ username, role });
        } else {
            alert('Invalid credentials');
        }
    };
    <div className='container'>
    <Navbar />
</div>

    return (
        <Router>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/student-login" element={<Login role="Student" onLogin={handleLogin} />} />
                <Route path="/teacher-login" element={<Login role="Professor" onLogin={handleLogin} />} />
                <Route path="/student-dashboard" element={ <Student />} />
                <Route path="/analysis/:id" element={<Analysis />} />
                <Route path="/teacher-dashboard" element={ <Teacher />} />
            </Routes>
        </Router>
    );
}

export default App;
