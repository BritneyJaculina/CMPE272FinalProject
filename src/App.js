import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Switch, Route, Routes, withRouter } from 'react-router-dom';
import {ToastContainer} from "react-bootstrap";

//components
import Login from './pages/LoginPage'
import AdminHomePage from './pages/AdminHomePage'
import FacultyHomePage from "./pages/FacultyHomePage";
import StudentHomePage from "./pages/StudentHomePage";
import CoursePage from "./pages/CoursePage";
import AddCoursePage from "./pages/AddCoursePage";
import StudentCoursePage from "./pages/StudentCoursePage";
import AdminStudentPage from "./pages/AdminStudentPage";


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
                <Route path="/course/:courseId" element={<CoursePage />} />
                <Route path ="/admin/:userId/add-course" element={<AddCoursePage/>}/>
                <Route path ="/student/:userId/course/:courseName" element={<StudentCoursePage/>}/>
                <Route path ="/admin/:userId/course/:courseName" element={<AdminStudentPage/>}/>
            </Routes>
        </BrowserRouter>

    );
}




export default App;

