import React, { useState, useEffect } from "react";
import {Link, useParams} from "react-router-dom";
import axios from 'axios';

const AdminHomePage = () => {
    const [user, setUser] = useState([]);
    const { userId } = useParams(); // Get userId from URL params

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/api/v1/users/${userId}`);
                setUser(response.data);
                console.log(response.data);
            } catch (error) {
                console.error('Error fetching user:', error);
            }
        };

        fetchUser();
    }, [userId]);

    return (
        <div>
            <h2>User Details</h2>
            {user ? (
                <div>
                    <p>Name: {user.firstName}</p>
                    <p>Email: {user.email}</p>
                    {/* Add more details as needed */}
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
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


