import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiLogOut, FiUser } from "react-icons/fi";
import "../assets/Styles/UserAccount.css";
import Header from "../components/Header";

const UserAccount = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);

    useEffect(() => {
        // user info from localStorage
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
            try {
                setUser(JSON.parse(storedUser));
            } catch (error) {
                console.error("Error parsing user data:", error);
            }
        } else {
            navigate("/login");
        }
    }, [navigate]);

    const handleLogout = () => {
        localStorage.removeItem("isLogin");
        localStorage.removeItem("user");
        window.dispatchEvent(new Event("storage"));

        navigate("/");
    };

    return (
        <>
            <Header />
            <div className="user-account-container">
                <div className="user-account-card">
                    <div className="profile-avatar">
                        <FiUser />
                    </div>

                    <h2 className="user-name">Welcome Back!</h2>
                    <p className="user-email">{user?.email || "User"}</p>

                    <div className="account-actions">
                        <button className="btn-dashboard" onClick={() => navigate("/")}>
                            Go to Home
                        </button>

                        <button className="btn-logout" onClick={handleLogout}>
                            <FiLogOut /> Logout
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default UserAccount;
