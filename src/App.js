import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Switch, Route, Routes, withRouter } from 'react-router-dom';
import {ToastContainer} from "react-bootstrap";

//components
import Login from './components/Login'
import AdminHomePage from './components/AdminHomePage'

function App() {
    return (
        <BrowserRouter>
                <ToastContainer position = "top-center"/>
                <Routes>
                    <Route exact path="/" element={<Login />} />
                    <Route exact path="/Login" element={<Login />} />
                    <Route exact path="/AdminHomePage" element={<AdminHomePage />} />
                </Routes>
        </BrowserRouter>

    );
}

export default App;

