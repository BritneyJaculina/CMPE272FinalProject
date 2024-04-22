import React, { useState, useEffect } from "react";
import {Link, useParams} from "react-router-dom";
import axios from 'axios';
import LogoutButton from "../components/Logout";

const AdminHomePage = () => {
    const [user, setUser] = useState([]);
    const [userByRole, setUserByRole] = useState([]);
    const { userId } = useParams(); // Get userId from URL params
    //const [users, setUsers] = useState([]); // Initialize as an empty array

    useEffect(() => {
        const fetchUser = async () => {
            try {
                // Modify headers to include security token
                const token = localStorage.getItem('token'); // Assuming you store the token in localStorage
                const config = {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                };

                const response = await axios.get(`http://localhost:8080/api/v1/users/${userId}`, config);
                setUser(response.data);
                console.log(response.data);
            } catch (error) {
                console.error('Error fetching user:', error);
            }
        };


        const fetchUserByRole = async () => {
            try {
                // Modify headers to include security token
                const token = localStorage.getItem('token'); // Assuming you store the token in localStorage
                const config = {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                };

                const response = await axios.get(`http://localhost:8080/api/v1/users/role?professorName=FACULTY`, config);
                setUserByRole(response.data);
                console.log(response.data);
            } catch (error) {
                console.error('Error fetching user:', error);
            }
        };

        fetchUser()
        fetchUserByRole();
    }, [userByRole]);

    return (
        <form>
            <h1>San Jose State University</h1>
            <h3>Spring 2024</h3>
            {user ? (
                <div>
                    <li>Name: {user.firstName} {user.lastName}</li>
                    <li>Email: {user.dateOfBirth}</li>
                    {/* Add more details as needed */}
                </div>
            ) : (
                <br/>
            )}

            <h3>Fall 2023</h3>
            {userByRole ? (
                <div>
                    <li>Name: {userByRole.name} {userByRole.lastName}</li>
                    <li>Email: {userByRole.dateOfBirth}</li>
                    {/* Add more details as needed */}
                </div>
            ) : (
                <br/>
            )}

            <h3>Spring 2023</h3>
            {user ? (
                <div>
                    <li>Name: {user.firstName} {user.lastName}</li>
                    <li>Email: {user.dateOfBirth}</li>
                    {/* Add more details as needed */}
                </div>
            ) : (
                <br/>
            )}

            {user.length > 0 ? (
                <ul>
                    {user.map(user => (
                        <li key={user.id}>
                            <p>Name: {user.courseid}</p>
                            <p>Email: {user.courseName}</p>
                            {/* Add more details as needed */}
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No users found for the specified role.</p>
            )}
            <LogoutButton/>


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