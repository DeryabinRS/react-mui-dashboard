import { Outlet } from "react-router-dom"
import Navbar from "../../components/Dashboard/NavbarDashboard/NavbarDashboard"
import TopBarDashboard from "../../components/Dashboard/TopBarDashboard/TopBarDashboard"

const MainDashboardLayout = () => {
    return (
        <>
            <Navbar/>
			<main>
				<TopBarDashboard/>
                <Outlet/>
			</main>
        </>
    )
}

export default MainDashboardLayout
