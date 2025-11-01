import './App.css'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import LandingPage from './Components/Landing/page'
import Subjects from './Components/Subjects/subject'
import Teacher from './Components/Teacher/teacher'
import Exams from './Components/Exams/exam'
import Lectures from './Components/Lectures/lecture'
import LoginPage from './Components/Login/login'
import SignupPage from './Components/signup/signup'
import Student from './Components/Student/student'
import {  Routes, Route } from 'react-router-dom'





function App() {

  return (
   <>
      <Header />
      <Routes>
        <Route path="/" element={<SignupPage />} />
         <Route path="/home" element={<LandingPage />} />
        <Route path="/subjects" element={<Subjects />} />
        <Route path="/teacher" element={<Teacher />} />
        <Route path="/lectures" element={<Lectures />} />
        <Route path="/student" element={<Student />} />
        <Route path="/exams" element={<Exams />} />
        <Route path="/login" element={<LoginPage />} />
        

      </Routes>
      <Footer />
      </>
   
  )
}


export default App
