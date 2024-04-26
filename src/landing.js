import React from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';
import Navbar from './navbar';



const LandingPage = () => {
    const navigate = useNavigate(); // This replaces the old useHistory hook

    const handleLoginRedirect = (role) => {
        navigate(`/${role}-login`); // This replaces history.push
    };
    


    return (
        <div className="image">
            
        <div className="containers text-center mt-5">
           
            
            <h1 className="head">Welcome to Homework Grader</h1>
            <div className="mt-3">
                <button onClick={() => handleLoginRedirect('student')} className="btn btn-primary mx-2">Student Login</button>
                <button onClick={() => handleLoginRedirect('teacher')} className="btn btn-success mx-2">Professor Login</button>
            </div>
        </div>
        </div>
        
    );
};

export default LandingPage;

