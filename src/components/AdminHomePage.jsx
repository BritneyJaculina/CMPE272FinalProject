import React from "react";
import {Link} from "react-router-dom";

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


export default AdminHomePage;


