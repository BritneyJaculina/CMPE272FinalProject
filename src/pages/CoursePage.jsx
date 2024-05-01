import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import LogoutButton from "../components/Logout";

const CoursePage = ( ) => {
    const { courseId } = useParams();
    const [course, setCourse] = useState(null);
    const [announcementText, setAnnouncementText] = useState('');
    const [assignmentName, setAssignmentName] = useState('');
    const [quizName, setQuizName] = useState('');

    const getToken = () => {
        const token = localStorage.getItem('token');
        return {
            headers: {
                Authorization: `Bearer ${token}`,
                Accept: "application/json"
            }
        };
    };

    const sendAnnouncement = async () => {
            try {
                const config = getToken();
                const data = {
                    ...course,
                    announcements: [...course.announcements, announcementText]
                };

                await axios.patch(`http://localhost:8080/api/v1/courses/${courseId}`, data, config);
                fetchCourse();
                setAnnouncementText('');
            } catch (error) {
                console.error('Error sending announcement:', error);
            }
        };

        const addAssignment = async () => {
            try {
                const config = getToken();
                const data = {
                    ...course,
                    assignments: [...course.assignments, assignmentName]
                };

                await axios.patch(`http://localhost:8080/api/v1/courses/${courseId}`, data, config);

                fetchCourse();
                setAssignmentName('');
            } catch (error) {
                console.error('Error adding assignment:', error);
            }
        };

        const addQuiz = async () => {
            try {
                const config = getToken();
                const data = {
                    ...course,
                    quizzes: [...course.quizzes, quizName]
                }
                await axios.patch(`http://localhost:8080/api/v1/courses/${courseId}`, data, config);

                fetchCourse();
                setQuizName('');
            } catch (error) {
                console.error('Error adding quiz:', error);
            }
        };
        const fetchCourse = async () => {
            try {
                const config = getToken();
                const response = await axios.get(`http://localhost:8080/api/v1/courses/${courseId}`, config);
                setCourse(response.data);
            } catch (error) {
                console.error('Error fetching course:', error);
            }
        };
    useEffect(() => {
        fetchCourse();
    }, [courseId]);

    return (
        <div>
            <h2>Course Details</h2>
            {course ? (
                <div>
                    <p>Course Name: {course.courseName}</p>
                    <p>Course Professor: {course.professorName}</p>
                    <div>
                        <h3>Announcements</h3>
                        {course.announcements.map((announcement, index) => (
                            <p key={index}>{announcement}</p>
                        ))}
                    </div>
                    <div>
                        <h3>Assignments</h3>
                        {course.assignments.map((assignment, index) => (
                            <p key={index}>{assignment}</p>
                        ))}
                    </div>
                    <div>
                        <h3>Quizzes</h3>
                        {course.quizzes.map((quiz, index) => (
                            <p key={index}>{quiz}</p>
                        ))}
                    </div>
                </div>
            ) : (
                <p>Loading...</p>
            )}
            <div>
                <h3>Create Announcement</h3>
                <input type="text" value={announcementText} onChange={(e) => setAnnouncementText(e.target.value)} />
                <button onClick={sendAnnouncement}>Send Announcement</button>
            </div>

            <div>
                <h3>Add Assignment</h3>
                <input type="text" value={assignmentName} onChange={(e) => setAssignmentName(e.target.value)} />
                <button onClick={addAssignment}>Add Assignment</button>
            </div>

            <div>
                <h3>Add Quiz</h3>
                <input type="text" value={quizName} onChange={(e) => setQuizName(e.target.value)} />
                <button onClick={addQuiz}>Add Quiz</button>
            </div>
            <LogoutButton />
        </div>
    );
};

export default CoursePage;
