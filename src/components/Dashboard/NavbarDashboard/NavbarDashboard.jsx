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


const navMenu = [
    { 
        submenuName: "Dashboard", 
        items: [
            { url: "/", icon: <MdOutlineDashboard/>, description: "Dashboard", },
            { url: "/pages", icon: <RiPagesLine/>, description: "Pages", submenu: [
                { url: "/pages/all", icon: <FaTimes/>, description: "Add", position: 2, },
                { url: "/pages/add", icon: <FaTimes/>, description: "Add 1", position: 1, },
            ], },
        ],
        position: 1
    }
];

const NavbarDashboard = () => {

    const [nav, setNav] = useState(() => {
        return window.innerWidth > 1024
    });

    const recursiveMenu = (items) => {
        items.sort((a,b) => a.position - b.position);
        const checkWindowSize = () => {
            if(window.innerWidth < 1024) setNav(!nav);
        }

        const navMenu = items.sort((a, b) => a.position - b.position)
            .map(({url, icon, description, submenu = null}, index) => {
                return <li key={index} className={styles.li_navlink}>
                    <NavLink 
                        to={`${url}`}
                        onClick={() => checkWindowSize()}
                        className={({isActive}) => (isActive ? styles.active : undefined)}
                    >
                        {icon}
                        <span className={styles.description}>{description}</span>
                    </NavLink>
                    {
                    submenu 
                    ? 
                        <ul className={styles.submenu}>{recursiveMenu(submenu)}</ul>
                    : null
                    }
                </li>;
            })

        return navMenu;
    }

    function constructMenu(){
        return navMenu.sort((a, b) =>a.position - b.position)
            .map((submenu, index) => {
            return <ul key={index}>
                <span className={styles.categories}>
                    {nav ? "Dashboard" : <BsThreeDots />}
                </span>
                {
                    recursiveMenu(submenu.items)
                }
            </ul>
        })
    }

    console.log(constructMenu());

    return (
        <div 
            className={`${styles.navbar_container} 
            ${nav ? styles.navbar_mobile_active : undefined}`}
        >
            {/* LOGO */}
            <nav className={`${nav ? undefined : styles.nav_small}`}>
                <div className={styles.logo}>
                    <VscDashboard 
                        className={styles.logo_icon}
                        onClick={() => setNav(!nav)}
                    />
                    <FaTimes 
                        className={styles.mobile_cancel_icon}
                        onClick={() => setNav(!nav)} 
                    />
                </div>
            {/* SUBMENU */}
                {constructMenu()}
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
