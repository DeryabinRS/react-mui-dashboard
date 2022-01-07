import styles from './Navbar.module.scss'

//ICONS FROM REACT ICONS
import {
	MdOutlineDashboard,
	MdOutlineAnalytics,
	MdOutlineFlag,
	MdPeopleOutline,
	MdOutlineMessage,
	MdOutlineLogout
} from 'react-icons/md';
import { IoMdLogIn } from 'react-icons/io';
import { FaReact, FaTimes } from 'react-icons/fa';
import { BsThreeDots } from 'react-icons/bs';
import { VscDashboard } from 'react-icons/vsc';

import { NavLink } from 'react-router-dom';
import { useState } from 'react';


const Navbar = () => {

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
                    {nav ? "Pages" : <BsThreeDots />}
                </span>

                <NavUrl
                    url="/"
                    icon={<MdOutlineDashboard/>}
                    description="Dashboard"
                />
                <NavUrl
                    url="/analytics"
                    icon={<MdOutlineAnalytics/>}
                    description="Analytics"
                />
                <NavUrl
                    url="/campaings"
                    icon={<MdOutlineFlag/>}
                    description="Campaings"
                />
                <NavUrl
                    url="/messages"
                    icon={<MdOutlineMessage/>}
                    description="Messages"
                />

                {/*SECOND CATEGORY*/}
                <span className={`${styles.categories} ${styles.second_category}`}>
                    {nav ? "More" : <BsThreeDots/>}
                </span>
                <NavUrl
                    url="/other1"
                    icon={<IoMdLogIn/>}
                    description="Auth"
                />
                <NavUrl
                    url="/other2"
                    icon={<FaReact/>}
                    description="Rect JS"
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

export default Navbar
