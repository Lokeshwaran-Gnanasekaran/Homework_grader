import React, { useState } from 'react';
import Modal from 'react-modal';
import './App.css';
import Navbar from './navbar';

Modal.setAppElement('#root'); // Adjust this to match your application's root element ID

function Teacher() {
    const classes = [
        { id: 1, name: 'Class A', students: generateStudents(10) },
        { id: 2, name: 'Class B', students: generateStudents(10) }
    ];

    const [selectedClass, setSelectedClass] = useState(1);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [assignmentData, setAssignmentData] = useState({
        topic: '',
        marks: '',
        numQuestions: ''
    });

    const handleClassClick = (classId) => {
        setSelectedClass(classId);
    };

    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setAssignmentData(prevData => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would normally update state or a database
        console.log('Assignment Data:', assignmentData);
        closeModal();
    };

    return (
        <div>
            <Navbar />
        <div className="container">
            <h1>Classes:</h1>
            <div className="row">
                {classes.map(cls => (
                    <div key={cls.id} className="col-md-4 mb-3">
                        <div className="card" onClick={() => handleClassClick(cls.id)} style={{ cursor: 'pointer' }}>
                            <div className="card-body">
                                <h5 className="card-title">{cls.name}</h5>
                            </div>
                        </div>
                        </div>
                ))}

                        {selectedClass && (
                            <div>
                                <h2>Students in {classes.find(c => c.id === selectedClass ).name}</h2>
                                <table className="table table-striped" style={{ width: '70vw' }}>
                                    <thead className="thead-dark">
                                        <tr>
                                            <th>Student ID</th>
                                            <th>Name</th>
                                            <th>Assignment 1 Score</th>
                                            <th>Assignment 2 Score</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {classes.find(c => c.id === selectedClass ).students.map(student => (
                                            <tr key={student.id}>
                                                <td>{student.id}</td>
                                                <td>{student.name}</td>
                                                <td>{student.assignments[0].score}</td>
                                                <td>{student.assignments[1].score}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        )}
                    
            </div>
            {selectedClass && (
                <div>
                    <button className="btn btn-primary" onClick={openModal}>Add Assignment</button>
                </div>
            )}

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Add Assignment Modal"
                className="modal-content"
                overlayClassName="modal-overlay"
            >
                <div className="container" style={{ margin: '50px' }}>
                    <h2>Add New Assignment</h2>
                    <button onClick={closeModal} className="float-right modal-close-button"><i className='fa fa-close'></i></button>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="topic">Topic:<span className="required-star">*</span></label>
                            <input
                                type="text"
                                id="topic"
                                name="topic"
                                className="form-control"
                                placeholder="Topic"
                                value={assignmentData.topic}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="marks">Total Marks:<span className="required-star">*</span></label>
                            <input
                                type="number"
                                id="marks"
                                name="marks"
                                className="form-control"
                                placeholder="Total Marks"
                                value={assignmentData.marks}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="numQuestions">Number of Questions:<span className="required-star">*</span></label>
                            <input
                                type="number"
                                id="numQuestions"
                                name="numQuestions"
                                className="form-control"
                                placeholder="Number of Questions"
                                value={assignmentData.numQuestions}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <button type="submit" className="btn btn-primary">Add</button>
                    </form>
                </div>
            </Modal>
        </div>
        </div>
    );
}

function generateStudents(count) {
    return Array.from({ length: count }, (_, i) => ({
        id: i + 1,
        name: `Student ${i + 1}`,
        assignments: [
            { id: 1, score: Math.floor(Math.random() * 101) },
            { id: 2, score: Math.floor(Math.random() * 101) }
        ]
    }));
}

export default Teacher;
