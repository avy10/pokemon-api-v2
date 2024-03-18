import "./App.css";
import { Routes, Route } from "react-router-dom";

import SpecificType from "./Components/SpecificType.jsx";
import NotFound from "./Components/NotFound.jsx";
import WebSiteLayout from "./WebSiteLayout.jsx";

function App() {
	return (
		<Routes>
			<Route path="/" element={<WebSiteLayout />}>
				<Route index element={<NotFound />} />
				<Route path="/types/:type" element={<SpecificType />} />
				<Route path="*" element={<NotFound />} />
			</Route>
		</Routes>
	);
}

export default App;
