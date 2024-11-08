import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from 'axios';
import LogoutButton from "../components/Logout";
import '../stylesheets/FacultyHome.css';

const FacultyHomePage = () => {
    const [user, setUser] = useState([]);
    const [coursesBySemester, setCoursesBySemester] = useState({});
    const { userId } = useParams(); // Get userId from URL params

    const getToken = () => {
        const token = localStorage.getItem('token');
        return {
            headers: {
                Authorization: `Bearer ${token}`,
                Accept: "application/json"
            }
        };
    };

    const fetchUser = async () => {
        try {
            const config = getToken();
            const response = await axios.get(`http://54.241.143.51:8080/api/v1/users/user?id=${userId}`, config);
            setUser(response.data);
        } catch (error) {
            console.error('Error fetching user:', error);
        }
    };

    const fetchCourses = async () => {
        try {
            const config = getToken();
            const fullName = user.firstName + " " + user.lastName
            const response = await axios.get(`http://54.241.143.51:8080/api/v1/courses/professor?professorName=${fullName}`, config);

            const courses = response.data.reduce((acc, course) => {
                if (!acc[course.semester]) {
                    acc[course.semester] = [];
                }
                acc[course.semester].push(course);
                return acc;
            }, {});
            setCoursesBySemester(courses);
        } catch (error) {
            console.error('Error fetching courses:', error);
        }
    };

    useEffect(() => {
        fetchUser();
    }, [userId]);

    useEffect(() => {
        if (user && user.firstName && user.lastName) {
            fetchCourses();
        }
    }, [user]);

    return (
        <div className="facultyHome">
            <div className= "fhContainer">
            <h1>San Jose State University</h1>
            <div className= "coursesBySem">
            {coursesBySemester && Object.entries(coursesBySemester).map(([semester, courses]) => (
                <div key={semester}>
                    <h3>Courses for {semester}</h3>
                    <div className = "courseEntry">
                    <ul>
                        {courses.map(course => (
                            <li key={course.courseID}>
                 
                                {course.published ? <span style={{color: 'green'}}>&#x2714;</span> :
                                    <span style={{color: 'red'}}>&#x2718;</span>}
                                <Link to={`/course/${course.courseID}`}>
                                    {course.courseName}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    </div>
                </div>
            ))}
                <LogoutButton/>
            </div>

            </div>
        </div>
    );
};

export default FacultyHomePage;
