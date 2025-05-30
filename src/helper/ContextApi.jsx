import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getUserProfile, verifyEmail, sendVerificationEmail } from "../utils/Apis";
import { toast } from "react-toastify";

export const ContextApi = createContext();

export const ContextApiProvider = ({ children }) => {
    const navigate = useNavigate();
    const [profileData, setProfileData] = useState(null);
    const [error, setError] = useState("");
    const [isEmailVerified, setIsEmailVerified] = useState(() => {
        // Initialize from localStorage
        return localStorage.getItem("isEmailVerified") === "true";
    });
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    // Function to check token in localStorage
    const checkAuthToken = () => {
        const token = localStorage.getItem("token");
        if (!token) {
            setIsAuthenticated(false);
            localStorage.removeItem("isEmailVerified"); // Clear verification status
            navigate("/"); // Redirect to the root path if no token
            return null;
        }
        setIsAuthenticated(true);
        return token;
    };

    // Function to fetch profile data
    const fetchProfileData = async () => {
        const token = checkAuthToken();
        if (!token) {
            setIsLoading(false);
            return;
        }

        try {
            setIsLoading(true);
            const data = await getUserProfile(token);
            console.log("Fetched Profile Data:", data);
            setProfileData(data);
            
            // Access isEmailVerified from the user object in the response
            const isVerified = data.user?.isEmailVerified || false;
            setIsEmailVerified(isVerified);
            // Store verification status in localStorage
            localStorage.setItem("isEmailVerified", isVerified.toString());
            setIsAuthenticated(true);
            
            // Only redirect if not verified
            if (!isVerified) {
                navigate('/verify-email');
            }
        } catch (err) {
            console.error("Error fetching profile data:", err.message);
            setError(err.message || "Failed to fetch profile data.");
            setIsAuthenticated(false);
            localStorage.removeItem("token");
            localStorage.removeItem("isEmailVerified");
            navigate("/");
        } finally {
            setIsLoading(false);
        }
    };

    // Function to verify email
    const handleVerifyEmail = async (otp) => {
        const token = checkAuthToken();
        if (!token) return;

        try {
            setIsLoading(true);
            console.log(profileData)
            await verifyEmail(profileData.user.email,otp,token);
            setIsEmailVerified(true);
            localStorage.setItem("isEmailVerified", "true");
            toast.success("Email verified successfully!");
            navigate('/dashboard');
        } catch (err) {
            toast.error(err.message || "Failed to verify email.");
            throw err;
        } finally {
            setIsLoading(false);
        }
    };

    // Function to resend verification email
    const handleResendVerificationEmail = async () => {
        const token = checkAuthToken();
        if (!token) return;

        try {
            setIsLoading(true);
            await sendVerificationEmail(token);
            toast.success("Verification email sent successfully!");
        } catch (err) {
            toast.error(err.message || "Failed to send verification email.");
            throw err;
        } finally {
            setIsLoading(false);
        }
    };

    // Function to handle logout
    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("isEmailVerified");
        setIsAuthenticated(false);
        setIsEmailVerified(false);
        setProfileData(null);
        navigate("/");
    };

    // Fetch profile data on component mount
    useEffect(() => {
        fetchProfileData();
    }, []);

    return (
        <ContextApi.Provider 
            value={{ 
                profileData, 
                fetchProfileData, 
                error,
                isEmailVerified,
                isAuthenticated,
                isLoading,
                handleVerifyEmail,
                handleResendVerificationEmail,
                handleLogout
            }}
        >
            {children}
        </ContextApi.Provider>
    );
};