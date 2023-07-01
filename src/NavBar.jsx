import { AppBar, Avatar, Toolbar, Button, Tabs, Tab, Box } from "@mui/material";
import { useState } from "react";
import { useTheme } from "@mui/material";
import { useMediaQuery } from "@mui/material";
import MuiDrawer from "./Drawer";
import AvatarImage from "./assets/logo.jpg";

export default function Header() {
	//? UseState
	const [value, setValue] = useState();

	const AppBarStyle = {
		backgroundColor: "white",
		height: "90px",
	};

	const StyleAvatar = {
		// border: "1px solid blue",
	};

	const StyleToolBar = {
		// display: "flex",
		justifyContent: "space-between",
		flex: "1 !important",
	};

	//* use media query
	const theme = useTheme();
	const isMatched = useMediaQuery(theme.breakpoints.down("md"));

	const handleTabClick = (event, sectionId) => {
		event.preventDefault();

		const section = document.getElementById(sectionId);
		section.scrollIntoView({ behavior: "smooth" });

		setTimeout(() => {
			window.scrollBy(0, -90);
		}, 500);
	};

	return (
		<AppBar style={AppBarStyle}>
			<Toolbar sx={StyleToolBar}>
				<Avatar
					style={StyleAvatar}
					src={AvatarImage}
					alt="Logo of We Care We Can"
					sx={{ marginTop: "5px", width: 80, height: 80 }}
				></Avatar>

				{isMatched ? (
					<MuiDrawer />
				) : (
					<Box>
						<Tabs
							textColor="secondary"
							value={value}
							onChange={(e, value) => setValue(value)}
							onClick={handleTabClick}
							indicatorColor="primary"
							sx={{
								"& .MuiTabs-indicator": {
									backgroundColor: "secondary",
								},

								"& .MuiTab-root": {
									"&:hover": {
										// color: "secondary.main",
										opacity: 1,
										outline: "none",
										color: "black",
										// backgroundColor: "lightgreen",
										fontFamily: "poppins",
									},

									"&.Mui-selected": {
										outline: "none",
										// border: "2px solid blue",
										backgroundColor: "#eff",
									},
								},
							}}
						>
							<Tab
								label="About Us"
								onClick={event => handleTabClick(event, "about")}
							/>
							<Tab
								label="Mission and Vision"
								onClick={event => handleTabClick(event, "missionandvision")}
							/>
							<Tab
								label="Programs"
								onClick={event => handleTabClick(event, "programs")}
							></Tab>
							<Tab
								label="Impact"
								onClick={event => handleTabClick(event, "impact")}
							></Tab>
							<Tab
								label="Contact Us"
								onClick={event => handleTabClick(event, "contact")}
							></Tab>
						</Tabs>
					</Box>
				)}

				<Button
					variant="contained"
					color="success"
					sx={{
						"&:focus": {
							outline: "none",
						},
					}}
				>
					Donate
				</Button>
			</Toolbar>
		</AppBar>
	);
}
