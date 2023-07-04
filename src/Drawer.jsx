import {
	Drawer,
	Box,
	IconButton,
	Stack,
	Typography,
	Link,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import "./index.css";

function MuiDrawer() {
	const [isOpen, setIsOpen] = useState(false);

	const handleClick = () => {
		setIsOpen(!isOpen);
	};

	return (
		<>
			<Box>
				<IconButton
					size="large"
					varient="contained"
					onClick={handleClick}
					sx={{
						color: "black",
						fontSize: "2.5rem",

						"&:focus": {
							outline: "none",
							// border: "2px solid black",
							// background: "pink",
						},
					}}
				>
					<MenuIcon fontSize="large" />
				</IconButton>
				<Drawer
					anchor="top"
					aria-label="Navigation Menu"
					open={isOpen}
					onClose={() => setIsOpen(false)}
					sx={{
						zIndex: 1,
					}}
				>
					<Stack
						// spacing={2}
						sx={{
							marginTop: "92px",
							alignItems: "center",
							textDecoration: "none",
							color: "black",

							"& Link": {
								textDecoration: "underline",
								cursor: "pointer",
							},
							"& a:hover": {
								backgroundColor: "lightgreen",

								width: "100%",
								textAlign: "center",
							},
							"& a": {
								textDecoration: "none",
								padding: 2,
								color: "black",

								width: "100%",
								textAlign: "center",
							},
						}}
					>
						<Link href="#about">
							<Typography varient="h6">ABOUT US</Typography>
						</Link>
						<Link href="#missionandvision">
							<Typography varient="h6">MISSION AND VISION</Typography>
						</Link>
						<Link href="#programs">
							<Typography varient="h6">PROGRAMS</Typography>
						</Link>
						<Link href="#impact">
							<Typography varient="h6">IMPACT</Typography>
						</Link>
						<Link href="#contact">
							<Typography varient="h6">CONTACT US</Typography>
						</Link>
					</Stack>
				</Drawer>
			</Box>
		</>
	);
}

export default MuiDrawer;
