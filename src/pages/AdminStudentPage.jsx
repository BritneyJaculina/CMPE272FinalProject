import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const AdminStudentPage = () => {
    const [courseInfo, setCourseInfo] = useState(null);
    const { courseName } = useParams();

    const [students, setStudents] = useState([]);

    useEffect(() => {
        const fetchStudents = async () => {
            try {
                const token = localStorage.getItem('token');
                const config = {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        Accept: 'application/json'
                    }
                };
                const response = await axios.get(`http://localhost:8080/api/v1/users/courseName?courseName=${courseName}`, config);
                setCourseInfo(response.data);
                setStudents(response.data)
            } catch (error) {
                console.error('Error fetching students:', error);
            }
        };

        fetchStudents();
    }, [courseName]);


    return (
        <div>
            <h1>Course: {courseName}</h1>
            <h2>
                Students:
            </h2>
            <ul>
                {students.map((student, index) => (
                    <li key={index}>{student.firstName} {student.lastName}</li>
                ))}
            </ul>
        </div>
    );
};

export default AdminStudentPage;

