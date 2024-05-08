import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const StudentHomePage = () => {
    const [coursesBySemester, setCoursesBySemester] = useState({});
    const { userId } = useParams(); // Get userId from URL params

    useEffect(() => {
        fetchCourses();
    }, []);

    const fetchCourses = async () => {
        try {
            const token = localStorage.getItem('token');
            const config = {
                headers: {
                    Authorization: `Bearer ${token}`,
                    Accept: 'application/json'
                }
            };
            const response = await axios.get(`http://localhost:8080/api/v1/users/user?id=${userId}`, config);
            const fetchedCourses = response.data.courses;
            organizeCoursesBySemester(fetchedCourses); // Organize courses by semester
        } catch (error) {
            console.error('Error fetching courses:', error);
        }
    };

    const fetchCourseInfo = async (courseName) => {
        try {
            const token = localStorage.getItem('token');
            const config = {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            };
            const response = await axios.get(`http://localhost:8080/api/v1/courses/name?courseName=${courseName}`, config);
            return response.data;
        } catch (error) {
            console.error('Error fetching course info:', error);
            return null;
        }
    };

    const organizeCoursesBySemester = async (courses) => {
        const coursesBySemester = {};
        for (const course of courses) {
            const courseInfo = await fetchCourseInfo(course.courseName);
            if (courseInfo) { // Ensure the course is published
                const semester = courseInfo.semester;
                if (!coursesBySemester[semester]) {
                    coursesBySemester[semester] = [];
                }
                coursesBySemester[semester].push(courseInfo);
            }
        }
        setCoursesBySemester(coursesBySemester);
    };

    return (
        <div>
            <h1>Student Home Page</h1>
            {Object.entries(coursesBySemester).map(([semester, courses]) => (
                <div key={semester}>
                    <h3>Courses for {semester}</h3>
                    <ul>
                        {courses.map(course => (
                            <li key={course.courseid}>
                                {course.published ? ( // Check if the course is published
                                    <a href={`${window.location.pathname}/course/${course.courseName}`}>
                                        {course.courseName}
                                    </a>
                                ) : (
                                    <span>{course.courseName}</span>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default StudentHomePage;
