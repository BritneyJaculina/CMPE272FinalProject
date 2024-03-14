import React, {useState} from 'react';
import {Link} from "react-router-dom";
//import { TextField } from "@mui/material";

const Login = () => {

    //const [name, setName] = useState("")

    return (
        <form>
            <h1>Login Page</h1>
            <div>username</div>
            <input type="text"/>

            <div>password</div>
            <input type="text"/>
            <Link to="/AdminHomePage"><button>
                Login
            </button>
            </Link>
        </form>
    );
}


export default Login;