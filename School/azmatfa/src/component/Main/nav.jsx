import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom"
import './navBar.css'

const Navbar = () => {
    return (
        <>
            <Router>
                <nav >
                    <div id="navBar">
                        <div className="navList">
                            <ul >

                                <NavLink className="navLink" to="/services">
                                    HOME
                                </NavLink>


                                <NavLink className="navLink" to="/contact">
                                    ABOUT
                                </NavLink>


                                <NavLink className="navLink" to="/contact">
                                    THE SCHOOL
                                </NavLink>


                                <NavLink className="navLink" to="/contact">
                                    FACILITIES
                                </NavLink>

                                <NavLink className="navLink" to="/contact">
                                    NEWS
                                </NavLink>

                                <NavLink className="navLink" to="/about">
                                    GALLERY
                                </NavLink>

                                <NavLink className="navLink" to="/about">
                                    ADMISION
                                </NavLink>

                                <NavLink className="navLink" to="/about">
                                    ALUMINI
                                </NavLink>

                                <NavLink className="navLink" to="/about">
                                    CONTACT US
                                </NavLink>
                            </ul>
                        </div>
                    </div>
                </nav>
                <Routes><Route></Route></Routes>
            </Router>
        </>
    )
}
export default Navbar;