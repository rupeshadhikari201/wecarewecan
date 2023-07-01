import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import MainCarousel from "./FinalCarousel.jsx";
import MisssionVision from "./Mission&Vision.jsx";
import Programs from "./OurPrograms.jsx";
import Storie from "./newStories.jsx";
import breakpointsTheme from "./breakpointTheme.jsx";
import Green from "./GreenSection.jsx";
import CardCarousel from "./CardCarousel.jsx";
import ObjectiveAndStrategy from "./ObjectiveAndStrategy.jsx";
import Contact from "./Contact.jsx";
import Header from "./NavBar.jsx";
function App() {
	return (
		<>
			<CssBaseline />
			<Header />
			<MainCarousel />
			<MisssionVision />
			<ObjectiveAndStrategy />
			<Programs />
			<ThemeProvider theme={breakpointsTheme}>
				<Storie />
			</ThemeProvider>
			<Green />
			<CardCarousel />
			<Contact />
		</>
	);
}
export default App;
