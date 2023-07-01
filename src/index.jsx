import { ThemeProvider } from "@emotion/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import mytheme from "./themeForMission";
import NavBar from "./NavBar.jsx";
import App from "./App";
import MainCarousel from "./FinalCarousel";
import MisssionVision from "./Mission&Vision";
import "./index.css";
const Index = () => {
	return (
		<>
			<BrowserRouter>
				<ThemeProvider theme={mytheme}>
					<NavBar />
				</ThemeProvider>
				<Routes>
					<Route
						path="/"
						element={<App />}
					/>
					<Route
						path="/about"
						element={<MainCarousel />}
					/>
					<Route
						path="/missionandvision"
						element={<MisssionVision />}
					/>
				</Routes>
			</BrowserRouter>
		</>
	);
};

export default Index;
