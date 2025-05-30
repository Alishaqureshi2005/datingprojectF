import React, { useState } from "react";
import { signup } from "../../utils/Apis";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const SignUpPage = () => {
    const navigate = useNavigate();
    // Generate days, months, and years
    const days = Array.from({ length: 31 }, (_, i) => i + 1);
    const months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
    ];
    const currentYear = new Date().getFullYear();
    const years = Array.from({ length: currentYear - 1900 + 1 }, (_, i) => currentYear - i);

    // State for form data
    const [formData, setFormData] = useState({
        firstName: "",
        surname: "",
        email: "",
        password: "",
        day: "",
        month: "",
        year: "",
        gender: "",
    });

    const [isLoading, setIsLoading] = useState(false);

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            const response = await signup({
                firstName: formData.firstName,
                surname: formData.surname,
                email: formData.email,
                password: formData.password,
                dateOfBirth: `${formData.year}-${formData.month}-${formData.day}`,
                gender: formData.gender,
            });

            // Store the token in localStorage
            localStorage.setItem("token", response.token);

            toast.success("Account created successfully! Please verify your email.");
            setTimeout(() => {
                navigate('/verify-email');
            }, 2000);
        } catch (err) {
            toast.error(err.message || "Registration failed. Please try again.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="bg-gray-100 flex items-center justify-center p-4 min-h-screen ">
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
                <div className="border-b border-gray-300 mb-2">
                    <h1 className="text-2xl font-bold text-center mb-2">Create a new account</h1>
                    <p className="text-center text-gray-600 mb-4">It's quick and easy.</p>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="flex space-x-2 mb-4">
                        <input
                            required
                            type="text"
                            name="firstName"
                            placeholder="First name"
                            value={formData.firstName}
                            onChange={handleChange}
                            className="w-1/2 p-2 border border-gray-300 rounded"
                        />
                        <input
                            required
                            type="text"
                            name="surname"
                            placeholder="Surname"
                            value={formData.surname}
                            onChange={handleChange}
                            className="w-1/2 p-2 border border-gray-300 rounded"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-1">
                            Date of birth <i className="fas fa-question-circle text-gray-400"></i>
                        </label>
                        <div className="flex space-x-2">
                            <select
                                name="day"
                                value={formData.day}
                                onChange={handleChange}
                                className="w-1/3 p-2 border border-gray-300 rounded"
                                required
                            >
                                <option value="" defaultValue>
                                    Day
                                </option>
                                {days.map((day) => (
                                    <option key={day} value={day}>
                                        {day}
                                    </option>
                                ))}
                            </select>
                            <select
                                name="month"
                                value={formData.month}
                                onChange={handleChange}
                                className="w-1/3 p-2 border border-gray-300 rounded"
                                required
                            >
                                <option value="" defaultValue>
                                    Month
                                </option>
                                {months.map((month, index) => (
                                    <option key={month} value={index + 1}>
                                        {month}
                                    </option>
                                ))}
                            </select>
                            <select
                                name="year"
                                value={formData.year}
                                onChange={handleChange}
                                className="w-1/3 p-2 border border-gray-300 rounded"
                                required
                            >
                                <option value="" defaultValue>
                                    Year
                                </option>
                                {years.map((year) => (
                                    <option key={year} value={year}>
                                        {year}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-1">
                            Gender <i className="fas fa-question-circle text-gray-400"></i>
                        </label>
                        <div className="flex space-x-2">
                            <label className="flex items-center space-x-1">
                                <input
                                    required
                                    type="radio"
                                    name="gender"
                                    value="Female"
                                    onChange={handleChange}
                                    className="form-radio"
                                />
                                <span>Female</span>
                            </label>
                            <label className="flex items-center space-x-1">
                                <input
                                    required
                                    type="radio"
                                    name="gender"
                                    value="Male"
                                    onChange={handleChange}
                                    className="form-radio"
                                />
                                <span>Male</span>
                            </label>
                            <label className="flex items-center space-x-1">
                                <input
                                    required
                                    type="radio"
                                    name="gender"
                                    value="Custom"
                                    onChange={handleChange}
                                    className="form-radio"
                                />
                                <span>Custom</span>
                            </label>
                        </div>
                    </div>
                    <div className="mb-4">
                        <input
                            required
                            type="text"
                            name="email"
                            placeholder="Mobile number or email address"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-300 rounded"
                        />
                    </div>
                    <div className="mb-4">
                        <input
                            required
                            type="password"
                            name="password"
                            placeholder="New password"
                            value={formData.password}
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-300 rounded"
                        />
                    </div>
                    <p className="text-xs text-gray-600 mb-4">
                        People who use our service may have uploaded your contact information to Facebook.{" "}
                        <a href="#" className="text-blue-600">
                            Learn more.
                        </a>
                    </p>
                    <p className="text-xs text-gray-600 mb-4">
                        By clicking Sign Up, you agree to our{" "}
                        <a href="#" className="text-blue-600">
                            Terms
                        </a>
                        ,{" "}
                        <a href="#" className="text-blue-600">
                            Privacy Policy
                        </a>{" "}
                        and{" "}
                        <a href="#" className="text-blue-600">
                            Cookies Policy
                        </a>
                        . You may receive SMS notifications from us and can opt out at any time.
                    </p>
                    <button
                        type="submit"
                        disabled={isLoading}
                        className="w-full bg-orange-500 text-white py-2 rounded text-lg font-semibold"
                    >
                        {isLoading ? 'Signing up...' : 'Sign up'}
                    </button>
                    <p className="text-center text-blue-600 mt-4">
                        <a href="#" onClick={() => navigate('/')}>Already have an account?</a>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default SignUpPage;
