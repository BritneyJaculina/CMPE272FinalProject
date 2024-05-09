import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import AdminHomePage from "./pages/AdminHomePage";
import FacultyHomePage from "./pages/FacultyHomePage";
import CoursePage from "./pages/CoursePage";

export const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route path="/CoursePage/:courseId" element={<CoursePage />} />
                <Route path="/" exact>
                    <LoginPage/>
                </Route>
                <Route path = "/LoginPage">
                    <LoginPage/>
                </Route>
                <Route path = "/AdminHomePage">
                    <AdminHomePage/>
                </Route>
                <Route path = "/FacultyHomePage">
                    <FacultyHomePage/>
                </Route>
            </Switch>
        </Router>
    )
}
