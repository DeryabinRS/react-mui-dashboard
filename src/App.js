import { Routes, Route} from "react-router-dom";
import MainDashboardLayout from "./layouts/Dashboard/MainDashboardLayout";
import MainDashboard from "./pages/Dashboard/MainDashboard";


function App() {

	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<MainDashboardLayout />}>
					<Route index element={<MainDashboard />} />
				</Route>
			</Routes>
		</div>
	);
}

export default App;
