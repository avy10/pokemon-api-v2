import BackgroundBody from "./Components/BackgroundBody.jsx";
import Header from "./Components/Header.jsx";
import { Outlet } from "react-router-dom";

export default function WebSiteLayout() {
	return (
		<>
			<BackgroundBody />
			<Header />
			<Outlet />
		</>
	);
}
