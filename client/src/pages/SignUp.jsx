import React, { useState } from 'react';
import { Play, User, Mail, Lock, Eye, EyeOff } from 'lucide-react';
import './SignUp.css';

const SignUp = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
    };

    return (
        <div className="signup-page">
            <nav className="signup-nav">
                <div className="nav-content">
                    <div className="nav-brand">
                        <Play size={32} className="brand-icon" />
                        <span className="brand-text">StreamApp</span>
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
                            <label htmlFor="username">Username</label>
                            <div className="input-wrapper">
                                <User className="field-icon" />
                                <input
                                    type="text"
                                    id="username"
                                    name="username"
                                    placeholder="Enter your username"
                                    value={formData.username}
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
                            <label htmlFor="confirmPassword">Confirm Password</label>
                            <div className="input-wrapper">
                                <Lock className="field-icon" />
                                <input
                                    type={showPassword ? "text" : "password"}
                                    id="confirmPassword"
                                    name="confirmPassword"
                                    placeholder="Confirm your password"
                                    value={formData.confirmPassword}
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