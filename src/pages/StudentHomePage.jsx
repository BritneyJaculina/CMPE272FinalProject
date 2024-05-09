import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import LogoutButton from "../components/Logout";
import '../stylesheets/StudentHome.css';

const StudentHomePage = () => {
    const [coursesBySemester, setCoursesBySemester] = useState({});
    const { userId } = useParams();
    const [grades, setGrades] = useState([]);
    const [showEditProfile, setShowEditProfile] = useState(false);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');

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
            const fetchedGrades = response.data.gradesList;
            setGrades(fetchedGrades);
            organizeCoursesBySemester(fetchedCourses);
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
            if (courseInfo) {
                const semester = courseInfo.semester;
                if (!coursesBySemester[semester]) {
                    coursesBySemester[semester] = [];
                }
                coursesBySemester[semester].push(courseInfo);
            }
        }
        setCoursesBySemester(coursesBySemester);
    };

    const handleEditProfile = () => {
        fetchUserProfile();
        setShowEditProfile(true);
    };

    const handleCloseEditProfile = () => {
        setShowEditProfile(false);
    };

    const handleSaveProfile = async () => {
        try {
            const token = localStorage.getItem('token');
            const config = {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json'
                }
            };
            const userData = {
                firstName: firstName,
                lastName: lastName,
                email: email,
                gradesList: grades
            };
            await axios.patch(`http://localhost:8080/api/v1/users/${userId}`, userData, config);
            console.log('Profile updated successfully');
        } catch (error) {
            console.error('Error updating profile:', error);
        }
        setShowEditProfile(false);
    };

    const fetchUserProfile = async () => {
        try {
            const token = localStorage.getItem('token');
            const config = {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            };
            const response = await axios.get(`http://localhost:8080/api/v1/users/user?id=${userId}`, config);
            setFirstName(response.data.firstName);
            setLastName(response.data.lastName);
            setEmail(response.data.email);
        } catch (error) {
            console.error('Error fetching user profile:', error);
        }
    };

    return (
        <div className = "studentHome">
            <h1>Student Home Page</h1>
            <div className = "homeWrapper">
                <div className = "textContainers">
                <div style={{ flex: 1 }}>
                    {Object.entries(coursesBySemester).map(([semester, courses]) => (
                        <div key={semester}>
                            <h3>Courses for {semester}</h3>
                            <div className= "entry">
                                <ul>
                                    {courses.map((course, index) => (
                                        <li key={course.courseid}>
                                            {course.published ? (
                                                <React.Fragment>
                                                    <a href={`${window.location.pathname}/course/${course.courseName}`}>
                                                        {course.courseName}
                                                    </a>
                                                    {grades[index] && <span> - Grade: {grades[index]}</span>}
                                                </React.Fragment>
                                            ) : (
                                                <span>{course.courseName}</span>
                                            )}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
                <div style={{ flex: 1 }}>
                    {Object.entries(coursesBySemester).map(([semester, courses]) => (
                        <div key={semester}>
                            <h3>{semester} Announcements</h3>
                            <div className= "entry">
                                {courses.map(course => (
                                    <div key={course.courseid}>
                                        <h4>{course.courseName}</h4>
                                        <div className= "entry">
                                            {course.announcements && course.announcements.length > 0 ? (
                                                <ul>
                                                    {course.announcements.map((announcement, index) => (
                                                        <li key={index}>{announcement}</li>
                                                    ))}
                                                </ul>
                                            ) : (
                                                <p>No announcements</p>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
                </div>
            <div>
                <button onClick={handleEditProfile}>Edit Profile</button>
                {showEditProfile && (
                    <div>
                        <h2>Edit Profile</h2>
                        <form className = "profile">
                            <div>
                                <label htmlFor="firstName">First Name:</label>
                                <input
                                    type="text"
                                    id="firstName"
                                    value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)}
                                />
                            </div>
                            <div>
                                <label htmlFor="lastName">Last Name:</label>
                                <input
                                    type="text"
                                    id="lastName"
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}
                                />
                            </div>
                            <div>
                                <label htmlFor="email">Email:</label>
                                <input
                                    type="email"
                                    id="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <button type="button" onClick={handleCloseEditProfile}>Cancel</button>
                            <button type="button" onClick={handleSaveProfile}>Save</button>
                        </form>
                    </div>
                )}

            </div>
                <LogoutButton/>
            </div>
        </div>
    );
};

export default StudentHomePage;
