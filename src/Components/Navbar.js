import style from '../Styles/Navbar.module.css'
import {NavLink} from "react-router-dom";

let Navbar = () => {
    return (
        <nav className={style.navbarWrapper}>
            <div><NavLink to='/posts'>Post Page</NavLink></div>
            <div><NavLink to='/messages'>Message Page</NavLink></div>
            <div>
                Music
            </div>
            <div>
                Settings
            </div>
        </nav>
    )
}

export default Navbar;