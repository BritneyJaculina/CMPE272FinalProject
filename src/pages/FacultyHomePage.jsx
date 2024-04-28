import React, { useState, useEffect } from "react";
import {Link, useParams} from "react-router-dom";
import axios from 'axios';
import LogoutButton from "../components/Logout";

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
            const response = await axios.get(`http://localhost:8080/api/v1/users/user?id=${userId}`, config);
            setUser(response.data);
            console.log(response.data);
        } catch (error) {
            console.error('Error fetching user:', error);
        }
    };

    const fetchCourses = async () => {
        try {
            const config = getToken();
            const fullName = user.firstName + " " + user.lastName
            const response = await axios.get(`http://localhost:8080/api/v1/courses/professor?professorName=${fullName}`, config);
            // Organize courses by semester
            const courses = response.data.reduce((acc, course) => {
                if (!acc[course.semester]) {
                    acc[course.semester] = [];
                }
                acc[course.semester].push(course);
                return acc;
            }, {});
            setCoursesBySemester(courses);
            console.log(courses);
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
        <div>
            <h1>San Jose State University</h1>
            {/* Loop through courses by semester if coursesBySemester contains valid data */}
            {coursesBySemester && Object.entries(coursesBySemester).map(([semester, courses]) => (
                <div key={semester}>
                    <h3>Courses for {semester}</h3>
                    <ul>
                        {courses.map(course => (
                            <li key={course.id}>
                                <p>Course Name: {course.courseName}</p>
                                {/* Add more course details here */}
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
            <LogoutButton />
        </div>
    );


};

export default FacultyHomePage;


