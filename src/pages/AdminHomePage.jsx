import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
import LogoutButton from "../components/Logout";

const AdminHomePage = () => {
    const [courses, setCourses] = useState([]);
    const [selectedProfessor, setSelectedProfessor] = useState(null);
    const [newDocumentData, setNewDocumentData] = useState({
        courseName: '',
        professorName: '',
        semester: ''
    });

    useEffect(() => {
        fetchCourses();
    }, []);

    const fetchCourses = async () => {
        try {
            const token = localStorage.getItem('token');
            const config = {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            };
            const response = await axios.get(`http://localhost:8080/api/v1/courses/`, config);
            setCourses(response.data);
        } catch (error) {
            console.error('Error fetching courses:', error);
        }
    };

    const coursesBySemester = courses.reduce((acc, course) => {
        if (!acc[course.semester]) {
            acc[course.semester] = {};
        }
        if (!acc[course.semester][course.professorName]) {
            acc[course.semester][course.professorName] = [];
        }
        acc[course.semester][course.professorName].push(course);
        return acc;
    }, {});

    const handleProfessorClick = (professorName) => {
        setSelectedProfessor(prevProfessor => (prevProfessor === professorName ? null : professorName));
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewDocumentData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    return (
        <form style={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start'}}>
            <div style={{width: '50%'}}>
                <h1>San Jose State University</h1>

                {Object.entries(coursesBySemester).map(([semester, professors]) => (
                    <div key={semester}>
                        <h3>Faculty Courses for {semester}</h3>
                        <ul>
                            {[...new Set(Object.keys(professors))].map(professor => (
                                <li key={professor}>
                                    <p onClick={() => handleProfessorClick(professor)}>{professor}</p>
                                    {selectedProfessor === professor && (
                                        <ul>
                                            {professors[professor].map(course => (
                                                <li key={course.id}>{course.courseName}</li>
                                            ))}
                                        </ul>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}

                {/* Button to navigate to AddCoursePage */}
                <Link to={`${window.location.pathname}/add-course`}>
                    <button>Add Course</button>
                </Link>

                <LogoutButton/>
            </div>
        </form>

    );
};


/*
const AdminHomePage = () => {
    const professors = ["john doe", "bernardo flores", "tommy dao", "justin pau", "professor pranuv"];
    return (
        <form>
            <h1>Admin Homepage</h1>
            <h2>Faculty Courses for Spring 2024</h2>
            <li>{professors[0]}</li>
            <li>{professors[1]}</li>
            <li>{professors[2]}</li>
            <br/>

            <h2>Faculty Courses for Fall 2023</h2>
            <li>{professors[4]}</li>
            <li>{professors[3]}</li>
            <li>{professors[2]}</li>
            <br/>

            <h2>Faculty Courses for Spring 2023</h2>
            <li>{professors[2]}</li>
            <li>{professors[3]}</li>
            <li>{professors[4]}</li>
            <br/>

            <Link to="/Login"><button>
                Logout
            </button>
            </Link>
        </form>
    );
}

 */


export default AdminHomePage;