import styles from './NavbarDashboard.module.scss'

//ICONS FROM REACT ICONS
import {
	MdOutlineDashboard,
	MdOutlineLogout
} from 'react-icons/md';
import { RiPagesLine } from 'react-icons/ri';
import { FaTimes } from 'react-icons/fa';
import { BsThreeDots } from 'react-icons/bs';
import { VscDashboard } from 'react-icons/vsc';

import { NavLink } from 'react-router-dom';
import { useState } from 'react';


const NavbarDashboard = () => {

    const [nav, setNav] = useState(false);

    const NavUrl = ({url, icon, description}) => {

        const checkWindowSize = () => {
            if(window.innerWidth < 1024) setNav(!nav);
        }

        return <li className={styles.li_navlink}>
            <NavLink 
                to={`${url}`}
                onClick={() => checkWindowSize()}
                className={({isActive}) => (isActive ? styles.active : undefined)}
            >
                {icon}
                <span className={styles.description}>{description}</span>
            </NavLink>
        </li>;
    }

    return (
        <div 
            className={`${styles.navbar_container} 
            ${nav ? styles.navbar_mobile_active : undefined}`}
        >
            {/* LOGO */}
            <div className={styles.test}>
                <button onClick={() => setNav(!nav)}>PRESS</button>
            </div>
            <nav className={`${nav ? undefined : styles.nav_small}`}>
                <div className={styles.logo}>
                    <VscDashboard className={styles.logo_icon}/>
                    <FaTimes 
                        className={styles.mobile_cancel_icon}
                        onClick={() => setNav(!nav)} 
                    />
                </div>
            {/* SUBMENU */}
            <ul className={styles.menu_container}>
                <span className={styles.categories}>
                    {nav ? "Dashboard" : <BsThreeDots />}
                </span>

                <NavUrl
                    url="/"
                    icon={<MdOutlineDashboard/>}
                    description="Dashboard"
                />
                <NavUrl
                    url="/pages"
                    icon={<RiPagesLine/>}
                    description="Pages"
                />

            </ul>
                {/* LOGOUT BUTTON */}
                <div className={styles.btn_logout}
                    onClick={() => setNav(!nav)}
                >
                    <MdOutlineLogout/>
                </div>

                {/*ADD BACKGROUND FOR MOBILE*/}
            </nav>
        </div>
    )
}

export default NavbarDashboard
