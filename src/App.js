import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Switch, Route, Routes, withRouter } from 'react-router-dom';
import {ToastContainer} from "react-bootstrap";

//components
import Login from './pages/LoginPage'
import AdminHomePage from './pages/AdminHomePage'
import FacultyHomePage from "./pages/FacultyHomePage";
import StudentHomePage from "./pages/StudentHomePage";
import AddCoursePage from "./pages/AddCoursePage";

function
App() {
    return (
        <BrowserRouter>
            <ToastContainer position="top-center"/>
            <Routes>
                <Route exact path="/" element={<Login/>}/>
                <Route exact path="/Login" element={<Login/>}/>
                <Route path="/admin/:userId" element={<AdminHomePage/>}/>
                <Route path="/faculty/:userId" element={<FacultyHomePage/>}/>
                <Route path="/student/:userId" element={<StudentHomePage/>}/>
                <Route path ="/admin/:userId/add-course" element={<AddCoursePage/>}/>
            </Routes>
        </BrowserRouter>

    );
}




export default App;

