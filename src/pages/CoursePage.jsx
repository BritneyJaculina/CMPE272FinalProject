import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import LogoutButton from "../components/Logout";
import '../stylesheets/Course.css';

const CoursePage = ( ) => {
    const { courseId } = useParams();
    const [course, setCourse] = useState(null);
    const [announcementText, setAnnouncementText] = useState('');
    const [assignmentName, setAssignmentName] = useState('');
    const [quizName, setQuizName] = useState('');
    const [syllabus, setSyllabus] = useState('');
    const [studentsData, setStudentsData] = useState([]);
    const [updatedStudentIndex, setUpdatedStudentIndex] = useState(null);
    const [updatedGrade, setUpdatedGrade] = useState('');

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

                await axios.patch(`http://54.241.143.51:8080/api/v1/courses/${courseId}`, data, config);
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

                await axios.patch(`http://54.241.143.51:8080/api/v1/courses/${courseId}`, data, config);

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
            await axios.patch(`http://54.241.143.51:8080/api/v1/courses/${courseId}`, data, config);
            fetchCourse();
            setQuizName('');
        } catch (error) {
            console.error('Error adding quiz:', error);
        }
        };
    const updateSyllabus = async () => {
        try {
            const config = getToken();
            const data = {
                ...course,
                syllabus: [...course.syllabus, syllabus]
            };

            await axios.patch(`http://54.241.143.51:8080/api/v1/courses/${courseId}`, data, config);
            fetchCourse();
            setSyllabus('');
        } catch (error) {
            console.error('Error updating syllabus:', error);
        }
    };
    const fetchCourse = async () => {
        try {
            const config = getToken();
            const response = await axios.get(`http://54.241.143.51:8080/api/v1/courses/${courseId}`, config);
            setCourse(response.data);
        } catch (error) {
            console.error('Error fetching course:', error);
        }
    };
    const fetchStudentsAndGrades = async (courseName) => {
        try {
            const config = getToken();
            const response = await axios.get(`http://54.241.143.51:8080/api/v1/users/courseName?courseName=${courseName}`, config);
            setStudentsData(response.data);
        } catch (error) {
            console.error('Error fetching students and grades:', error);
        }
    };

    useEffect(() => {
        fetchCourse();
    }, [courseId]);

    useEffect(() => {
        if (course && course.courseName) {
            fetchStudentsAndGrades(course.courseName);
        }
    }, [course]);

    const handleUpdateGrade = (studentIndex) => {
        setUpdatedStudentIndex(studentIndex);
        setUpdatedGrade('');
    };

    const handleSaveGrade = async (studentIndex) => {
        try {
            const studentToUpdate = studentsData[studentIndex];
            const updatedStudent = {
                ...studentToUpdate,
                gradesList: studentToUpdate.gradesList.map((grade, index) => {
                    return studentToUpdate.courses[index].courseName === course.courseName ? updatedGrade : grade;
                })
            };

            const config = getToken();
            await axios.patch(`http://54.241.143.51:8080/api/v1/users/${studentToUpdate.userid}`, updatedStudent, config);

            const updatedStudentsData = [...studentsData];
            updatedStudentsData[studentIndex] = updatedStudent;
            setStudentsData(updatedStudentsData);
            setUpdatedStudentIndex(null);
        } catch (error) {
            console.error('Error updating grade:', error);
        }
    };

    return (
        <div className="courseInfWrapper">
            <div className="courseInfo">
                <h2>Course Details</h2>
                <div className="courseDeets">
                    {course ? (
                        <div>
                            <p>Course Name: {course.courseName}</p>
                            <p>Course Professor: {course.professorName}</p>
                            <h3>Syllabus</h3>
                            <div className="entry">
                                <ul>
                                    {course.syllabus.map((syllabus, index) => (
                                        <li key={index}>{syllabus}</li>
                                    ))}
                                </ul>
                            </div>
                            <h3>Announcements</h3>
                            <div className="entry">
                                <ul>
                                    {course.announcements.map((announcement, index) => (
                                        <li key={index}>{announcement}</li>
                                    ))}
                                </ul>
                            </div>
                            <h3>Assignments</h3>
                            <div className="entry">
                                <ul>
                                    {course.assignments.map((assignment, index) => (
                                        <li key={index}>{assignment}</li>
                                    ))}
                                </ul>
                            </div>
                            <h3>Quizzes</h3>
                            <div className="entry">
                                <ul>
                                    {course.quizzes.map((quiz, index) => (
                                        <li key={index}>{quiz}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ) : (
                        <p>Loading...</p>
                    )}
                    <h3>Update Syllabus</h3>
                    <div className="entry">
                        <textarea value={syllabus} onChange={(e) => setSyllabus(e.target.value)}></textarea>
                        <button onClick={updateSyllabus}>Update Syllabus</button>
                    </div>

                    <h3>Create Announcement</h3>
                    <div className="entry">
                        <input type="text" value={announcementText}
                               onChange={(e) => setAnnouncementText(e.target.value)}/>
                        <button onClick={sendAnnouncement}>Send Announcement</button>
                    </div>

                    <h3>Add Assignment</h3>
                    <div className="entry">
                        <input type="text" value={assignmentName} onChange={(e) => setAssignmentName(e.target.value)}/>
                        <button onClick={addAssignment}>Add Assignment</button>
                    </div>

                    <h3>Add Quiz</h3>
                    <div className="entry">
                        <input type="text" value={quizName} onChange={(e) => setQuizName(e.target.value)}/>
                        <button onClick={addQuiz}>Add Quiz</button>
                    </div>

                    <div>
                        <h3>Students and Grades</h3>
                        {studentsData.map((student, studentIndex) => (
                            <div key={student.userid} style={{marginBottom: '10px'}} className = "entry">
                                <p>
                            <span
                                style={{fontWeight: 'bold'}}>Name:</span> {student.firstName} {student.lastName}&nbsp;&nbsp;&nbsp;
                                    <span
                                        style={{fontWeight: 'bold'}}>Current Grade:</span> {student.gradesList.find((grade, index) => student.courses[index].courseName === course.courseName)}&nbsp;&nbsp;&nbsp;
                                    <button onClick={() => handleUpdateGrade(studentIndex)}>Update Grade</button>
                                </p>
                                {studentIndex === updatedStudentIndex && (
                                    <div>
                                        <input
                                            type="number"
                                            value={updatedGrade}
                                            onChange={(e) => setUpdatedGrade(e.target.value)}
                                        />
                                        <button onClick={() => handleSaveGrade(studentIndex)}>Save</button>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                    <LogoutButton/>
                </div>
            </div>
        </div>
    );
};

export default CoursePage;
