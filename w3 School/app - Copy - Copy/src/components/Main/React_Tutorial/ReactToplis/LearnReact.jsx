import { NavLink } from "react-router-dom";
import "../../Css/customDiv.css";
const LearnReact = () => {
  return (
    <>
      <h3> React JS Tutorial </h3>
      <ul type="none" className="list">
        <li>
          <NavLink className="nav-link" to="/React/Home">
            React Home
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-link" to="/React/Introduction">
            React Intro
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-link" to="/React/React-Get-Started">
            React Get Started
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-link" to="/React/React-Upgrade">
            React Upgrade
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-link" to="/React/React-ES6">
            React ES6
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-link" to="/React/React-Render-HTML">
            React Render HTML
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-link" to="/React/React-jSX">
            React JSX
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-link" to="/React/React-Components">
            React Components
          </NavLink></li>
        <li>
          <NavLink className="nav-link" to="/React/React-Class-Components">
            React Class
          </NavLink></li>
        <li>
          <NavLink className="nav-link" to="/React/React-Props">
            React Props
          </NavLink></li>
        <li>
          <NavLink className="nav-link" to="/React/React-Event">
            React Event
          </NavLink></li>
        <li>
          <NavLink className="nav-link" to="/React/React-Conditional">
            React Conditional
          </NavLink></li>
        <li>
          <NavLink className="nav-link" to="/React/React-List">
            React List
          </NavLink></li>
        <li>
          <NavLink className="nav-link" to="/React/React-Form">
            React Form
          </NavLink></li>
        <li>
          <NavLink className="nav-link" to="/React/React-Router">
            React Router
          </NavLink></li>
        <li>
          <NavLink className="nav-link" to="/React/React-Memo">
            React Memo
          </NavLink></li>
        <li>
          <NavLink className="nav-link" to="/React/React-CSS-Styling">
            React CSS Styling
          </NavLink></li>
        <li>
          <NavLink className="nav-link" to="/React/React-Sass-Styling">
            React Sass Styling
          </NavLink></li>
      </ul>
    </>
  );
};

export default LearnReact;
