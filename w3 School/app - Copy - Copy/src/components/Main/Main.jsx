import {
    BrowserRouter as Router,
    Routes,
    Route,
    NavLink,
} from "react-router-dom";

import HomePage from "./HomePage";
import HTML from "./HTML";
import JavaScript from "./JavaScript";
import CSSLang from "./CSSLang";
import React from "./React_Tutorial/React";
import logo from "./logo.jpg";
import ReactHome from "./React_Tutorial/0ReactHome";
import ReactIntro from "./React_Tutorial/1ReactIntro";
import ReactStart from "./React_Tutorial/2ReactStart";
import ReactUpgrade from "./React_Tutorial/3ReactUpgrade";
import Reactjsx from "./React_Tutorial/ReactJsx";


const Main = () => {
    return (
        <>
            <Router>
                <nav class="navbar navbar-expand-lg navigationBar">
                    <div class="container-fluid">
                        <img
                            src={logo}
                            alt="Logo"
                            className="image"
                        />
                        <NavLink className="navbar-brand" to="/">
                            CODEMIND_TECHNOLOGY
                        </NavLink>
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0 ">
                            <li class="navbar-brand">
                                <NavLink
                                    className="nav-link "
                                    to="/HTML"
                                >
                                    HTML
                                </NavLink>
                            </li>
                            <li class="navbar-brand">
                                <NavLink
                                    className="nav-link "
                                    to="/CSSLang"
                                >
                                    CSS
                                </NavLink>
                            </li>
                            <li class="navbar-brand">
                                <NavLink className="nav-link" to="/JavaScript">
                                    JAVASCRIPT
                                </NavLink>
                            </li>
                            <li class="navbar-brand">
                                <NavLink className="nav-link" to="/React">
                                    REACT JS
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </nav>
                <Routes>
                    <Route exact path="/" element={<HomePage />}></Route>
                    <Route exact path="/HTML" element={<HTML />}></Route>
                    <Route exact path="/CSSLang" element={<CSSLang />}></Route>
                    <Route exact path="/JavaScript" element={<JavaScript />}></Route>
                    <Route exact path="/React" element={<React />}></Route>
                    <Route exact path="React/Home" element={<ReactHome />}></Route>
                    <Route exact path="/React/Introduction" element={<ReactIntro />}></Route>
                    <Route exact path="/React/React-Get-Started" element={<ReactStart />}></Route>
                    <Route exact path="/React/React-Upgrade" element={<ReactUpgrade />}></Route>
                    <Route exact path="/React/React-ES6" element={<ReactIntro />}></Route>
                    <Route exact path="/React/React-Render-HTML" element={<ReactUpgrade />}></Route>
                    <Route exact path="/React/React-jSX" element={<Reactjsx />}></Route>
                    <Route exact path="/React/React-Components" element={<ReactStart />}></Route>
                    <Route exact path="/React/React-Class-Components" element={<ReactUpgrade />}></Route>
                    <Route exact path="/React/React-Props" element={<ReactStart />}></Route>
                    <Route exact path="/React/React-Event" element={<ReactUpgrade />}></Route>
                    <Route exact path="/React/React-Conditional" element={<ReactUpgrade />}></Route>
                    <Route exact path="/React/React-List" element={<ReactStart />}></Route>
                    <Route exact path="/React/React-Form" element={<ReactUpgrade />}></Route>
                    <Route exact path="/React/React-Router" element={<ReactStart />}></Route>
                    <Route exact path="/React/React-Memo" element={<ReactUpgrade />}></Route>
                    <Route exact path="/React/React-CSS-Styling" element={<ReactStart />}></Route>
                    <Route exact path="/React/React-Sass-Styling" element={<ReactIntro />}></Route>

                </Routes>
            </Router>
        </>
    )
}

export default Main;