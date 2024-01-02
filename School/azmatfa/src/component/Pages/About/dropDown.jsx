
import './dropDown.css'
import { DropList } from "./dropList";

const DropDown = () => {
    return (
        <>
            <div className="dropDown">
                <ul className='dropDownList'>
                    {DropList.map((val, key) => (
                        <li key={key} className='Row' onClick={() => { window.location.pathname = val.path }}>
                            <div id='titel'>{val.titel}</div>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default DropDown