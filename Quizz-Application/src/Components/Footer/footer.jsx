import React from 'react';
import './footer.css';



function Footer() {
    return (
        <footer className="quiz-footer">
            <div className="footer-container">
                {/* Left Section - Logo */}
                <div className="footer-logo-section">
                    <div className="footer-logo">
                        <div className="footer-logo-icon">

                        </div>
                        <span className="footer-logo-text">Quiz App</span>
                    </div>
                </div>

                {/* Center Section - Quick Navigation */}
                <div className="footer-nav-section">
                    <nav className="footer-nav">
                        <a href="#subjects" className="footer-nav-link">Subjects</a>
                        <a href="#teacher" className="footer-nav-link">Teacher</a>
                        <a href="#lectures" className="footer-nav-link">Lectures</a>
                        <a href="#exams" className="footer-nav-link">Exams</a>
                    </nav>
                </div>

                {/* Right Section - Social Media */}
                <div className="footer-social-section">
                    <div className="social-links">
                        <a href="#" className="social-link" aria-label="Facebook">
                            <img src="/Images/facebook.png" alt="Facebook" width="18"  />
                        </a>

                        <a href="#" className="social-link" aria-label="Twitter">
                            <img src="/Images/twitter.png" alt="Twitter" width="18"  />
                        </a>

                        <a href="#" className="social-link" aria-label="Instagram">
                            <img src="/Images/instagram.png" alt="Instagram" width="18" />
                        </a>

                    </div>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="footer-bottom">
                <p>&copy; 2024 Quiz App. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;
