import React, { useState, useEffect } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const AddCoursePage = () => {
    const [courseData, setCourseData] = useState({
        courseName: '',
        professorName: '',
        semester: ''
    });
    const [courseCreated, setCourseCreated] = useState(false);
    const navigate = useNavigate(); // useNavigate hook

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setCourseData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const token = localStorage.getItem('token');
            const config = {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            };

            // Initialize new course data with default values
            const courseDataWithDefaults = {
                ...courseData,
                published: true,
                announcements: [],
                assignments: [],
                quizzes: []
            };

            await axios.post('http://localhost:8080/api/v1/courses/newCourse', courseDataWithDefaults, config);
            // Set course created flag to trigger redirection
            setCourseCreated(true);
        } catch (error) {
            console.error('Error creating course:', error);
        }
    };

    // Redirect to previous page after successful creation
    useEffect(() => {
        if (courseCreated) {
            // Navigate back to the previous page
            navigate(-1);
        }
    }, [courseCreated, navigate]);

    return (
        <div>
            <h2>Add Course</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="courseName">Course Name:</label>
                    <br />
                    <input type="text" id="courseName" name="courseName" value={courseData.courseName} onChange={handleInputChange} />
                </div>
                <div>
                    <label htmlFor="professorName">Professor Name:</label>
                    <br />
                    <input type="text" id="professorName" name="professorName" value={courseData.professorName} onChange={handleInputChange} />
                </div>
                <div>
                    <label htmlFor="semester">Semester:</label>
                    <br />
                    <input type="text" id="semester" name="semester" value={courseData.semester} onChange={handleInputChange} />
                </div>
                <button type="submit">Create Course</button>
            </form>
        </div>
    );
};

export default AddCoursePage;


