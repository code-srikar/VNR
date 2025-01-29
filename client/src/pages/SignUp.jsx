import React, { useState } from 'react';
import { Play, User, Mail, Lock, Eye, EyeOff } from 'lucide-react';
import './SignUp.css';

const SignUp = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmpassword: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { name, email, password, confirmpassword } = formData;
        if (password !== confirmpassword) {
            alert("Passwords do not match!");
            return;
        }
        try {
            const res = await fetch('http://localhost:3000/digiplay/signup', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ name, email, password, confirmpassword }),
            });

            if (!res.ok) {
                const errorData = await res.json();
                alert(`Error: ${errorData.message}`);
                return;
            }

            const data = await res.json();
            alert(`Sign-up successful! Welcome, ${data.name}`);
        } catch (err) {
            console.error("Error during sign-up:", err);
            alert("Something went wrong. Please try again.");
        }
    };

    return (
        <div className="signup-page">
            <nav className="signup-nav">
                <div className="nav-content">
                    <div className="nav-brand">
                        <Play size={32} className="brand-icon" />
                        <span className="brand-text">DigiPlay</span>
                    </div>
                </div>
            </nav>

            <div className="main-content">
                <div className="form-container">
                    <div className="form-header">
                        <h2>Create your account</h2>
                        <p>Start your streaming journey today</p>
                    </div>

                    <form onSubmit={handleSubmit} className="signup-form">
                        <div className="input-field">
                            <label htmlFor="name">Username</label>
                            <div className="input-wrapper">
                                <User className="field-icon" />
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    placeholder="Enter your username"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>

                        <div className="input-field">
                            <label htmlFor="email">Email</label>
                            <div className="input-wrapper">
                                <Mail className="field-icon" />
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="Enter your email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>

                        <div className="input-field">
                            <label htmlFor="password">Password</label>
                            <div className="input-wrapper">
                                <Lock className="field-icon" />
                                <input
                                    type={showPassword ? "text" : "password"}
                                    id="password"
                                    name="password"
                                    placeholder="Create a password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    required
                                />
                                <button
                                    type="button"
                                    className="toggle-password"
                                    onClick={() => setShowPassword(!showPassword)}
                                >
                                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                                </button>
                            </div>
                        </div>

                        <div className="input-field">
                            <label htmlFor="confirmpassword">Confirm Password</label>
                            <div className="input-wrapper">
                                <Lock className="field-icon" />
                                <input
                                    type={showPassword ? "text" : "password"}
                                    id="confirmpassword"
                                    name="confirmpassword"
                                    placeholder="Confirm your password"
                                    value={formData.confirmpassword}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>

                        <button type="submit" className="submit-button">
                            Create Account
                        </button>
                    </form>

                    <div className="form-footer">
                        <p>Already have an account? <a href="/login" className="login-link">Log in</a></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;