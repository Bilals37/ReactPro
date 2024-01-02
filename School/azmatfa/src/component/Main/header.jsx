import { NavLink } from "react-router-dom"
import './header.css'
import { PiPhoneCall } from "react-icons/pi";
import { MdEmail } from "react-icons/md";
const Header = () => {
    return (
        <>
            <div id="headerContainer">
                <div className="headerContain">
                    <div className="logoName">
                        <div className="logo">
                            <img className="img" src={process.env.PUBLIC_URL + 'logo.png'} alt="" />
                        </div>
                        <div className="name">
                            <span>AZMAT FATIMA ENGLISH SCHOOL & JR COLLAGE, <br />SHRIRAMPUR</span>
                        </div>
                    </div>



                    <div className="contatDetail">
                        <div className="callUs">
                            <div className="callLogo">
                                <PiPhoneCall />
                            </div>
                            <div>
                                <h5>CALL US</h5>
                                <a href="tel:8378027567">8378027567</a>
                            </div>
                        </div>
                        <div className="email">
                            <div className="emailLogo">
                                <MdEmail />
                            </div>
                            <div>
                                <h5>EMAIL</h5>
                                <a href="mailto:bilalfaruk37@gmail.com">bilalfaruk37@gmail.com</a>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}
export default Header;