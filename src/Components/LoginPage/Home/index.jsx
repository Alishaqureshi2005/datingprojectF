import React, { useState } from 'react';
import homeImg from "../../../assets/Images/1st-bg.png";
import card from "../../../assets/Images/card.png";
import Navbar from './Navbar';
import { login } from "../../../utils/Apis";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Home = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            const response = await login({
                email: formData.email,
                password: formData.password
            });

            // Store the token in localStorage
            localStorage.setItem("token", response.token);

            toast.success("Login successful!");
            
            // Check if email is verified
            if (response.user.isEmailVerified) {
                navigate('/dashboard');
            } else {
                navigate('/verify-email');
            }
        } catch (err) {
            toast.error(err.message || "Invalid email or password.");
        } finally {
            setIsLoading(false);
        }
    };

    const iconClasses = [
        { class: "fa-solid fa-gem fa-flip text-blue-500", background: "bg-blue-200" },
        { class: "fa-solid fa-compass fa-spin text-red-500", background: "bg-red-200" },
        { class: "fa-solid fa-heart fa-beat text-green-500", background: "bg-green-200" },
        { class: "fa-solid fa-calendar-days fa-fade text-yellow-500", background: "bg-yellow-200" }
    ];

    return (
        <div
            className="flex flex-col min-h-screen overflow-hidden"
            style={{
                backgroundColor: "#A7C7BD",
                backgroundImage: `url(${homeImg})`,
                backgroundSize: "contain",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                width: "100%",
            }}
        >
            <Navbar />

            <main className="flex flex-col xl:flex-row gap-2 xl:gap-12 lg:gap-4 items-center justify-center w-full p-6 space-y-8 xl:pl-48 md:space-y-0 md:space-x-8 mx-0 md:mx-8 lg:mx-16 xl:max-w-screen-xl ">
                <div className="flex-1 text-center w-full sm:w-3/4 lg:w-2/4 flex flex-col xl:items-start items-center xl:justify-start justify-center xl:text-left p-4 md:-mt-20">
                    <h1 className="text-4xl md:text-5xl font-bold text-custom-blue">
                        Meet New Friends, Make Memories
                    </h1>
                    <p className="text-lg text-gray-700 mt-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut.
                    </p>
                    <div className="flex space-x-4 mt-6 justify-center md:justify-start ">
                        {iconClasses.map((iconClass, index) => (
                            <div
                                key={index}
                                className={`${iconClass.background} p-2 rounded-full`}
                            >
                                <i
                                    className={`${iconClass.class} text-2xl`}
                                    style={{ margin: "5px" }}
                                ></i>
                            </div>
                        ))}
                    </div>
                    <div class="w-full max-w-xs flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4  py-5">
    <button
      class="flex items-center justify-center border border-gray-300 rounded-full py-3 px-6 w-full bg-white"
      type="button"
    >
      <img
        alt="Google icon centered"
        class="w-6 h-6"
        height="24"
        src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png"
        width="24"
      />
    </button>
    <button
      class="flex items-center justify-center bg-white border border-gray-300 rounded-full py-3 px-6 w-full"
      type="button"
    >
      <img
        alt="blue facebook logo icon centered"
        class="w-6 h-6"
        height="24"
        src="https://cdn-icons-png.freepik.com/256/15713/15713427.png?semt=ais_hybrid"
        width="24"
      />
      </button>
                </div>
                </div>

                <div
                    className="flex-1 md:right-20 xl:relative rounded-lg w-full xl:max-w-sm"
                    style={{
                        backgroundImage: `url(${card})`,
                        backgroundPosition: "center",
                        backgroundSize: "contain",
                        backgroundRepeat: "no-repeat",
                        minHeight: "500px",
                    }}
                >
                    <div className="xl:absolute xl:left-2 xl:top-[66%] mt-[22rem] sm:mt-[26rem] xl:mt-0 w-full justify-center left-0 right-0 transform -translate-y-1/2 pr-8 pl-8 rounded-b-lg ">
                        <h1 className="text-3xl font-bold text-center text-gray-800 mb-2 truncate">
                            Login
                        </h1>
                        <form className="flex flex-col justify-center items-center" onSubmit={handleSubmit}>
                            <div className="mb-[2px] sm:mb-2">
                                <input
                                    className="pl-2 pr-6 py-1 sm:py-2 w-full border placeholder:text-white bg-custom-pink rounded-md text-white truncate"
                                    placeholder="Email"
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="mb-[2px] sm:mb-2">
                                <input
                                    className="w-full pl-2 pr-6 py-1 sm:py-2 border placeholder:text-white bg-custom-pink rounded-md text-white truncate"
                                    placeholder="Password"
                                    type="password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="mb-[2px] sm:mb-2">
                                <button
                                    className="px-4 py-1 sm:py-2 text-center w-full bg-teal-200 font-bold text-blue-800 rounded-md truncate"
                                    type="submit"
                                    disabled={isLoading}
                                >
                                    {isLoading ? 'Logging in...' : 'Login'}
                                </button>
                            </div>
                            <div className="text-center mb-1 sm:mb-2">
                                <Link to='/forgetpasword' className="text-blue-800 truncate" >
                                    Forgotten password?
                                </Link>
                            </div>
                            <div className="text-center">
                                <button
                                    className="w-fit bg-custom-pink text-white px-6 py-1 sm:py-2 rounded-full truncate"
                                    type="button"
                                    onClick={() => navigate('/signup')}
                                >
                                    Create new account
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Home;

