import React from 'react';
import './page.css';

function LandingPage() {
  return (
    <div className="landing-container">
      
      {/* Hero Section */}
      <section className="hero">
        <h1>Welcome to Quiz App</h1>
        <p>Your journey to knowledge starts here!</p>
        <button className="get-started">Get Started</button>
      </section>

      {/* About Section */}
      <section className="about">
        <h2>About Us</h2>
        <p>
          Quiz App is designed to make learning fun and interactive. 
          Our goal is to provide students and learners with the best 
          resources to master their subjects and track their progress effectively.
        </p>
      </section>

      {/* Features Section */}
      <section className="features">
        <h2>Features</h2>
        <div className="feature-cards">
          <div className="feature-card">
            <img src="/icons/subjects.svg" alt="Subjects" />
            <h3>Subjects</h3>
            <p>Explore a variety of subjects to enhance your knowledge.</p>
          </div>
          <div className="feature-card">
            <img src="/icons/teacher.svg" alt="Teacher" />
            <h3>Teacher</h3>
            <p>Learn from experienced teachers and experts.</p>
          </div>
          <div className="feature-card">
            <img src="/icons/lectures.svg" alt="Lectures" />
            <h3>Lectures</h3>
            <p>Access engaging lectures to deepen your understanding.</p>
          </div>
          <div className="feature-card">
            <img src="/icons/exams.svg" alt="Exams" />
            <h3>Exams</h3>
            <p>Test your knowledge with our comprehensive exams.</p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works">
        <h2>How It Works</h2>
        <div className="steps">
          <div className="step">
            <img src="/icons/step1.svg" alt="Step 1" />
            <h3>Step 1</h3>
            <p>Sign up for free</p>
          </div>
          <div className="step">
            <img src="/icons/step2.svg" alt="Step 2" />
            <h3>Step 2</h3>
            <p>Choose your subjects</p>
          </div>
          <div className="step">
            <img src="/icons/step3.svg" alt="Step 3" />
            <h3>Step 3</h3>
            <p>Start learning with quizzes</p>
          </div>
          <div className="step">
            <img src="/icons/step4.svg" alt="Step 4" />
            <h3>Step 4</h3>
            <p>Track your progress</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <h2>What Our Users Say</h2>
        <div className="testimonial-cards">
          <div className="testimonial-card">
            <p>"This app made learning so much fun. I scored better in exams!"</p>
            <h4>- Ali, Student</h4>
          </div>
          <div className="testimonial-card">
            <p>"As a teacher, I love how easy it is to share quizzes with students."</p>
            <h4>- Ayesha, Teacher</h4>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="cta">
        <h2>Ready to start learning?</h2>
        <button className="start-learning">Start Learning Now</button>
      </section>

     
    </div>
  );
}

export default LandingPage;
