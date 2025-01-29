import React, { useState } from 'react';
import { Play, Mail, Lock, Eye, EyeOff } from 'lucide-react';
import './Login.css';

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        rememberMe: false
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Login form submitted:', formData);
    };

    return (
        <div className="login-page">
            <nav className="login-nav">
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
                        <h2>Welcome back</h2>
                        <p>Sign in to continue streaming</p>
                    </div>

                    <form onSubmit={handleSubmit} className="login-form">
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
                                    placeholder="Enter your password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    required
                                />
                                <button
                                    type="button"
                                    className="toggle-password"
                                    onClick={() => setShowPassword(!showPassword)}
                                    aria-label={showPassword ? "Hide password" : "Show password"}
                                >
                                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                                </button>
                            </div>
                        </div>

                        <div className="form-options">
                            <div className="remember-me">
                                <input
                                    type="checkbox"
                                    id="rememberMe"
                                    name="rememberMe"
                                    checked={formData.rememberMe}
                                    onChange={handleChange}
                                    className="checkbox-input"
                                />
                                <label htmlFor="rememberMe" className="checkbox-label">
                                    Remember me
                                </label>
                            </div>
                            <a href="/forgot-password" className="forgot-password">
                                Forgot password?
                            </a>
                        </div>

                        <button type="submit" className="submit-button">
                            Sign In
                        </button>
                    </form>

                    <div className="form-footer">
                        <p>Don't have an account? <a href="/signup" className="signup-link">Sign up</a></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;