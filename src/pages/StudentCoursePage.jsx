import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const StudentCoursePage = () => {
    const [courseInfo, setCourseInfo] = useState(null);
    const { courseName } = useParams();

    useEffect(() => {
        fetchCourseInfo();
    }, []);

    const fetchCourseInfo = async () => {
        try {
            const token = localStorage.getItem('token');
            const config = {
                headers: {
                    Authorization: `Bearer ${token}`,
                    Accept: 'application/json'
                }
            };
            const response = await axios.get(`http://localhost:8080/api/v1/courses/name?courseName=${courseName}`, config);
            setCourseInfo(response.data);
        } catch (error) {
            console.error('Error fetching course info:', error);
        }
    };

    if (!courseInfo) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>Course: {courseInfo.courseName}</h1>
            <h2>Assignments:</h2>
            <ul>
                {courseInfo.assignments.map((assignment, index) => (
                    <li key={index}>{assignment}</li>
                ))}
            </ul>
            <h2>Quizzes:</h2>
            <ul>
                {courseInfo.quizzes.map((quiz, index) => (
                    <li key={index}>{quiz}</li>
                ))}
            </ul>
        </div>
    );
};

export default StudentCoursePage;

