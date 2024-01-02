import { BrowserRouter as Router, Routes, Route, } from "react-router-dom"
import { TutData } from "./TutData.jsx"
import "./tutbar.css"
import Main from "../tutorials/TutReat/Reactmain"
import Reacthome from "../tutorials/TutReat/Tutorials/0.ReactHome";
import ReactIntro from "../tutorials/TutReat/Tutorials/1.ReactIntro";
import ReactStart from "../tutorials/TutReat/Tutorials/2.ReactStart";
import ReactES from "../tutorials/TutReat/Tutorials/3.ReactES6";
import ReactCompon from "../tutorials/TutReat/Tutorials/4.ReactCompon";


const Tutbar = () => {
    return (
        <>
            <Router>
                <div className="tutNav">
                    <ul className='tutData'>
                        {TutData.map((val, key) => (
                            <li key={key} className='Row' onClick={() => { window.location.pathname = val.path }}>
                                <div id='tital'>{val.tital}</div>
                            </li>
                        ))}
                    </ul>
                </div>


                <Routes>
                    <Route><Route exact path="/React" element={<Main />}> </Route></Route>
                    <Route exact path="/React/react-home" element={<Reacthome />}> </Route>
                    <Route exact path="/React/Intro" element={<ReactIntro />}> </Route>
                    <Route exact path="/React/Started" element={<ReactStart />}> </Route>
                    <Route exact path="/React/ES6" element={<ReactES />}> </Route>
                    <Route exact path="/React/Components" element={<ReactCompon />}> </Route>

                </Routes>
            </Router>

        </>
    )
}

export default Tutbar;