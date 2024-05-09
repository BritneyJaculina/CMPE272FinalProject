import React, { useState, useEffect } from "react";
import axios from 'axios';
import {Link, useParams} from "react-router-dom";
import LogoutButton from "../components/Logout";
import '../stylesheets/AdminHome.css';

const AdminHomePage = () => {
    const [courses, setCourses] = useState([]);
    const [selectedProfessor, setSelectedProfessor] = useState(null);
    const [newDocumentData, setNewDocumentData] = useState({
        courseName: '',
        professorName: '',
        semester: ''
    });
    const { courseName } = useParams();
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetchCourses();
    }, []);

    useEffect(() => {
        if (courseName) {
            fetchUsersByCourse();
        }
    }, [courseName]);

    const fetchCourses = async () => {
        try {
            const token = localStorage.getItem('token');
            const config = {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            };
            const response = await axios.get(`http://54.241.143.51:8080/api/v1/courses/`, config);
            setCourses(response.data);
        } catch (error) {
            console.error('Error fetching courses:', error);
        }
    };

    const fetchUsersByCourse = async () => {
        try {
            const response = await axios.get(`/api/v1/users/course?courseName=${courseName}`);
            setUsers(response.data);
        } catch (error) {
            console.error('Error fetching users by course:', error);
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

    return (
        <div className = "adminHome">
            <div className = "aContainer">
                <h1>San Jose State University</h1>
                <div className="entries">
                    {Object.entries(coursesBySemester).map(([semester, professors]) => (
                        <div key={semester}>
                            <h3>Faculty Courses for {semester}</h3>
                            <div className="students">
                                <ul>
                                    {[...new Set(Object.keys(professors))].map(professor => (
                                        <li key={professor}>
                                            <p onClick={() => handleProfessorClick(professor)}>{professor}</p>
                                            {selectedProfessor === professor && (
                                                <ul>
                                                    {professors[professor].map(course => (
                                                        <li key={course.id}>{
                                                            <a href={`${window.location.pathname}/course/${course.courseName}`}>
                                                                {course.courseName}
                                                            </a>}
                                                        </li>
                                                    ))}
                                                </ul>
                                            )}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                    <div className="buttons">
                        <Link to={`${window.location.pathname}/add-course`}>
                            <button>Add Course</button>
                        </Link>

                        <LogoutButton/>
                    </div>

                </div>



            </div>
        </div>

    );
};

export default AdminHomePage;