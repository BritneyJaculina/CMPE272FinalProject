import React, {useRef} from 'react';
import '../stylesheets/Login.css';

import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const
    LoginPage = () => {

        const usernameRef = useRef();
        const passwordRef = useRef();
        const navigate = useNavigate();
        const handleClick = async (e) => {
            e.preventDefault();
            const username = usernameRef.current.value;
            const password = passwordRef.current.value;

            axios.post('http://localhost:8080/api/auth/login',{
                username: username,
                password: password
            }).then((result) => {
                localStorage.setItem('token', result.data.accessToken);
                console.log("Logged in! Token: " + result.data.accessToken);
                console.log("result data: " + result.data.uid);
                console.log(result.data.role);
                navigate('/' + result.data.role + '/' + result.data.uid);
            })


        }

        return (
            <div className = "login">
                <div className="lcontainer">
                    <h1>Login</h1>
                    <div className = "entryContainer">
                        <span>Username</span>
                        <input
                            type="text"
                            placeholder="type your username"
                            id="username"
                            ref={usernameRef}
                            className="linput"
                        />
                    </div>
                    <div className = "entryContainer">
                        <span>Password</span>
                        <input
                            type="password"
                            placeholder="type your password"
                            id="username"
                            ref={passwordRef}
                            className="linput"
                        />
                    </div>

                    <button onClick={handleClick} className="lButton">
                        Login
                    </button>

                </div>
            </div>
        );
    }


export default LoginPage;