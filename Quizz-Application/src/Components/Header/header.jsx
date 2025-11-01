import { Link } from "react-router-dom";
import "./header.css";

function Header() {

  return (
    <header className="quiz-header">
      <div className="header-container">
        <div className="logo-section">
          <div className="logo-icon"> </div>
          <Link to="/" className="logo-text">Quiz App</Link>
        </div>

        <nav className="nav-menu">
           <Link to="/home" className="nav-link"> Home </Link>
          <Link to="/subjects" className="nav-link"> Subjects </Link>
          <Link to="/student" className="nav-link"> Student </Link>
          <Link to="/teacher" className="nav-link"> Teacher </Link>
          <Link to="/lectures" className="nav-link"> Lectures </Link>
          <Link to="/exams" className="nav-link"> Exams </Link>


        </nav>
      </div>
    </header>
  );
}

export default Header;
