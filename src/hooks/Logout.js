import { useNavigate } from "react-router-dom";

const useLogout = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        // Logic to handle logout (e.g., clear authentication token)
        localStorage.removeItem("token");
        // Redirect to login page or perform any other necessary actions
        navigate("/login"); // Redirect to the login page after logout
    };

    return handleLogout;
};

export default useLogout;