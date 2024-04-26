import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from './navbar';
import './App.css'

function Analysis() {
    const [uploading, setUploading] = useState(false);
    const [showResults, setShowResults] = useState(false);
    const { id } = useParams();
    const analysisData = require('./analysisData.json');

    const handleUploadClick = () => {
        setUploading(true);
        setTimeout(() => {
            setUploading(false);
            setShowResults(true);
        }, 3000); // Simulate file upload time
    };
    
    

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        console.log('File uploaded:', file.name);  // Handle file upload here
    };

    const uploadContainerStyle = {
        fontFamily: 'Arial, sans-serif',
        width: '100%', // full width - use max-width for large screens
        maxWidth: '600px',
        background: '#FFFFFF',
        borderRadius: '10px',
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
        margin: '50px auto',
        padding: '20px',
        textAlign: 'center',
    };

    const fileDropAreaStyle = {
        border: '2px dashed #DDEEFE',
        borderRadius: '10px',
        padding: '30px',
        marginTop: '20px',
        position: 'relative',
        cursor: 'pointer',
    };

    const maxSizeTextStyle = {
        fontSize: '0.85rem',
        color: '#999999',
        marginTop: '10px',
    };

    const uploadButtonStyle = {
        backgroundColor: '#22C55E',
        color: '#FFFFFF',
        border: 'none',
        borderRadius: '20px',
        padding: '10px 40px',
        fontSize: '1rem',
        cursor: 'pointer',
    };

    const loadingTextStyle = {
        color: 'black',
        fontSize: '20px',
    };
    const centerStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh', // full viewport height
      };

    if (analysisData[id].notSubmitted) {
        return <div style={centerStyle} > <div style={uploadContainerStyle}>Not submitted. Total score is 0</div></div>;
    } else if (analysisData[id].upload && !showResults) {
        return (
            <div style={centerStyle}>
            <div style={uploadContainerStyle}>
                {uploading ? (
                    <div style={loadingTextStyle}>Loading...</div>
                ) : (
                    <>
                        <div style={fileDropAreaStyle}>
                            Drop your file here or <span style={{color: '#0066FF'}}>browse</span>
                            <input 
                                type="file" 
                                onChange={handleFileChange} 
                                style={{ width: '100%', height: '100%', top: 0, left: 0, opacity: 0, position: 'absolute' }} 
                            />
                        </div>
                        <div style={maxSizeTextStyle}>Maximum file size: 100MB</div>
                        <button onClick={handleUploadClick} style={uploadButtonStyle}>Upload Assignment</button>
                    </>
                )}
                </div>
            </div>
        );
    } else {
        return (
            <div>
                <Navbar />
                <div className="analysis-results">
                    <h2>Analysis Results</h2>
                    <table className="styled-table">
                        <thead>
                            <tr>
                                <th>Question</th>
                                <th>Answer</th>
                                <th>Score</th>
                            </tr>
                        </thead>
                        <tbody>
                            {analysisData[id].questions.map((item, index) => (
                                <tr key={index}>
                                    <td>{item.question}</td>
                                    <td>{item.answer}</td>
                                    <td>
                                        <div className="progress-container">
                                            <div className="progress-bar" style={{ width: `${item.studentScore / item.score * 100}%` }}></div>
                                        </div>
                                        <span className="score-text">{item.studentScore}/{item.score}</span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                        <tfoot>
                            <tr>
                                <td colSpan="2">Total Score</td>
                                <td>
                                    <div className="total-score">
                                        {analysisData[id].studentTotalScore}/{analysisData[id].totalScore}
                                    </div>
                                </td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
        );
    }
}

export default Analysis;
