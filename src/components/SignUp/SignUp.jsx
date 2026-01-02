import React, { useState, useEffect } from "react";
import "./SignUp.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { resources } from "../../resources";
import AcademicHub from "../../assets/AcademicHub.png";

const SignUp = () => {
    const loginNavigate = useNavigate();

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [number, setNumber] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConformPassword] = useState("");
    const [msg, setMsg] = useState(null);

    const [verifyOtpStatus, setOtpVerifyStatus] = useState(false);
    const [otp, setOtp] = useState("");
    const [getOtp, setGetOtp] = useState("");

    const [otpVerified, setOtpVerified] = useState(false);
    const [timer, setTimer] = useState(0);

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const submitRegisterFrom = async (event) => {
        event.preventDefault();



        try {

            const registerUserDetails = {
                first_name: firstName,
                last_name: lastName,
                email: email,
                mobile_number: number,
                password: password,
                confirm_password: confirmPassword,
            };
           
            if (!registerUserDetails) {
                alert("Registered Successfully!");

                setFirstName("");
                setLastName("");
                setEmail("");
                setNumber("");
                setPassword("");
                setConformPassword("");
                setMsg(200);

                setTimeout(() => {
                    loginNavigate("/");
                }, 2000);
            }
        } catch (error) {
            console.log("submit error", error);
            alert("Registration Failed!");
            setMsg(500);
        }
    };


    return (
        <>
            <div className="login-container">
                <div className="login-box">
                    <div className="logo-container">
                        <img src={AcademicHub} className="signupImage" alt="Logo" />
                    </div>
                    <div className="form-container">
                        <h2>Sign Up</h2>
                        {msg === 200 && <p className="login-success-msg">Registered successfully</p>}
                        {msg === 500 && <p className="login-error-msg">Email already registered</p>}

                        <form onSubmit={submitRegisterFrom}>
                            <div className="input-with-icon">
                                <span className="icon">👤</span>
                                <input
                                    type="text"
                                    placeholder="First Name"
                                    required
                                    onChange={(e) => setFirstName(e.target.value)}
                                    value={firstName}
                                />
                            </div>

                            <div className="input-with-icon">
                                <span className="icon">👤</span>
                                <input
                                    type="text"
                                    placeholder="Last Name"
                                    required
                                    onChange={(e) => setLastName(e.target.value)}
                                    value={lastName}
                                />
                            </div>

                            <div className="input-row">
                                <div className="input-with-icon" style={{ width: "300px" }}>
                                    <span className="icon">📧</span>
                                    <input
                                        type="email"
                                        placeholder="Email"
                                        required
                                        onChange={(e) => setEmail(e.target.value)}
                                        value={email}
                                        disabled={otpVerified}
                                    />
                                </div>
                            </div>


                            <div className="input-with-icon">
                                <span className="icon">📞</span>
                                <input
                                    type="tel"
                                    placeholder="Mobile Number"
                                    maxLength={10}
                                    required
                                    onChange={(e) => {
                                        const value = e.target.value.replace(/\D/g, "");
                                        setNumber(value);
                                    }}
                                    value={number}
                                />
                            </div>

                            <div className="input-with-icon">
                                <span className="icon">🔒</span>
                                <input
                                    type={showPassword ? "text" : "password"}
                                    placeholder="Password"
                                    required
                                    onChange={(e) => setPassword(e.target.value)}
                                    value={password}
                                />
                                <span
                                    className="eye-icon"
                                    onClick={() => setShowPassword(!showPassword)}
                                >
                                    {!showPassword ? "🙈" : "👁️"}
                                </span>
                            </div>

                            <div className="input-with-icon">
                                <span className="icon">🔒</span>
                                <input
                                    type={showConfirmPassword ? "text" : "password"}
                                    placeholder="Confirm Password"
                                    required
                                    onChange={(e) => setConformPassword(e.target.value)}
                                    value={confirmPassword}
                                />
                                <span
                                    className="eye-icon"
                                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                >
                                    {!showConfirmPassword ? "🙈" : "👁️"}
                                </span>
                            </div>

                            <button
                                type="submit"
                                className="login-button"
                                style={{ width: "93%" }}
                            >
                                Register
                            </button>

                            <div className="buttons-container">
                                <button
                                    className="Register-button"
                                    type="button"
                                    onClick={() => loginNavigate("/")}
                                >
                                    Already have an account?
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignUp;