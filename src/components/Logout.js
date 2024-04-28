import React from "react";
import useLogout from "../hooks/Logout";

const LogoutButton = () => {
    const handleLogout = useLogout();

    return (
        <button onClick={handleLogout}>
            Logout
        </button>
    );
};

export default LogoutButton;