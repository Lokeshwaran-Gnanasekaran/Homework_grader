import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './navbar';
import './App.css'

const Student = () => {
    const [assignments, setAssignments] = useState([
        { id: 1, title: "Algorithm Analysis", description: "Analyze the complexity of various sorting algorithms.", due: "Next Monday", status: "Submitted", score: "95/100" },
        { id: 2, title: "Database Systems", description: "Design a relational database schema for a library management system.", due: "Friday", status: "Assigned" },
        { id: 3, title: "Machine Learning", description: "Implement a logistic regression model from scratch.", due: "Two Weeks", status: "Not Submitted" },
        { id: 4, title: "Operating Systems", description: "Develop a small shell in C.", due: "Next Month", status: "Assigned" },
        { id: 5, title: "Network Security", description: "Analyze network vulnerabilities.", due: "In 3 Days", status: "Submitted", score: "88/100" },
        { id: 6, title: "Data Structures", description: "Implement various tree data structures.", due: "End of Semester", status: "Not Submitted" },
        { id: 7, title: "Software Engineering", description: "Study different software development methodologies.", due: "Next Monday", status: "Submitted", score: "93/100" },
        { id: 8, title: "Web Development", description: "Develop a RESTful API using Node.js.", due: "In 4 Weeks", status: "Assigned" },
        { id: 9, title: "Artificial Intelligence", description: "Create an AI model to play chess.", due: "Next Month", status: "Submitted", score: "89/100" },
        { id: 10, title: "Cryptography", description: "Study symmetric vs asymmetric encryption methods.", due: "In 2 Weeks", status: "Assigned" }
    ]);
    

    const getStatusClass = (status) => {
        switch (status) {
            case 'Submitted': return 'text-success';
            case 'Assigned': return 'text-warning';
            case 'Not Submitted': return 'text-danger';
            default: return '';
        }
    };

    return (
        <div>
               <Navbar />
        <div className="container mt-5">
    <h1 className="mb-3">Computer Science Assignments</h1>
    <div className="row">
        {assignments.map(assignment => (
            <div key={assignment.id} className="col-lg-4 col-md-6 card-container">
                <Link to={`/analysis/${assignment.id}`} className="card" data-testid="assignment-card">
                    <div className="card-body">
                        <h5 className="card-title">{assignment.title}</h5>
                        <p className="card-text">{assignment.description}</p>
                        <small className="text-muted">Due: {assignment.due}</small><br />
                        <small className={getStatusClass(assignment.status)}>{assignment.status}</small>
                    </div>
                </Link>
            </div>
        ))}
    </div>
</div>
</div>
    );
};

export default Student;
