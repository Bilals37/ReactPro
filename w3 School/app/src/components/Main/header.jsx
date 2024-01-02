import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom"
import { IoMdMenu } from "react-icons/io";
import "./header.css"



const Header = () => {
    return (
        <>
            <Router>
                <nav className="header">
                    <ul className="headList">

                        <li >
                            <NavLink className="homeLink" to="/">
                                <img className="img" src={process.env.PUBLIC_URL + 'logo-shape.png'} alt="" />
                                <span>CodeMind Technology</span>
                            </NavLink>
                        </li>


                        <li  >
                            <NavLink className="navLink" to="/services">
                                Tutorials
                            </NavLink>
                        </li>

                        <li >
                            <NavLink className="navLink" to="/contact">
                                Exercise
                            </NavLink>
                        </li>

                        <li >
                            <NavLink className="navLink" to="/contact">
                                Certificate
                            </NavLink>
                        </li>

                        <li >
                            <NavLink className="navLink" to="/contact">
                                About
                            </NavLink>
                        </li>

                        <li >
                            <NavLink className="navLink" to="/contact">
                                Faculty
                            </NavLink>
                        </li>

                        <li >
                            <NavLink className="navLink" to="/about">
                                Services
                            </NavLink>
                        </li>

                        <div className="Search">
                            <input type="search" placeholder="Search" />
                        </div>

                        <div >
                            <NavLink className="loginSign" to="/about">
                                <button type="button" className="loginBtn" >Login</button>
                                <button type="button" className="signBtn" >Sign Up</button>
                            </NavLink>
                        </div>

                        <div >
                            <IoMdMenu className="menuIcon" />
                        </div>

                    </ul>


                </nav>
                <Routes><Route></Route></Routes>
            </Router>

        </>
    )
}

export default Header;