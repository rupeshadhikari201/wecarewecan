import {
	Card,
	Typography,
	CardContent,
	CardMedia,
	Avatar,
} from "@mui/material";
import "./board.css";

import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";
function CardCarousel() {
	const boardStyle = {
		textAlign: "center",
		padding: 10,
		fontWeight: "bold",
		fontSize: "1.5rem",
		fontFamily: "poppins",
	};

	const spanStyle = {
		color: "#54DE3D",
	};

	return (
		<>
			<div>
				<div style={boardStyle}>
					<h2>
						Our Board <span style={spanStyle}> Members</span>
					</h2>
				</div>
				<Carousel
					className="board"
					swipeable={true}
					draggable={true}
					responsive={{
						superLargeDesktop: {
							breakpoint: { max: 4000, min: 3000 },
							items: 5, // increase number of items to 4
						},
						desktop: {
							breakpoint: { max: 3000, min: 1024 },
							items: 4,
						},
						tablet: {
							breakpoint: { max: 1024, min: 464 },
							items: 2,
						},
						mobile: {
							breakpoint: { max: 464, min: 0 },
							items: 1,
						},
					}}
				>
					<div className="card-container">
						<Card
							className="card-background"
							sx={{
								width: "227px",
								height: "325px",
								display: "flex",
								flexDirection: "column",
								justifyContent: "center",
								alignItems: "center",
								margin: "40px 40px",
							}}
						>
							<CardMedia>
								<Avatar
									alt="Pressident"
									src="src\assets\board\1.png"
									sx={{ width: 120, height: 120 }}
									// sx={{ width: 24, height: 24 }}
								/>
							</CardMedia>
							<CardContent>
								<Typography>Saroj Yadav</Typography>
								<Typography>Designation: अध्यक्ष</Typography>
							</CardContent>
						</Card>
					</div>
					<div className="card-container">
						<Card
							className="card-background"
							sx={{
								width: "227px",
								height: "325px",
								display: "flex",
								flexDirection: "column",
								justifyContent: "center",
								alignItems: "center",
								margin: "40px 40px",
								// border: "2px solid green",
							}}
						>
							<CardMedia>
								<Avatar
									alt="secretart"
									src="src\assets\board\four Sandip Kumar Yadav.jpg"
									sx={{ width: 120, height: 120 }}
									// sx={{ width: 24, height: 24 }}
								/>
							</CardMedia>
							<CardContent>
								<Typography>Sandip Kumar Yadav</Typography>
								<Typography>Designation : सचिव</Typography>
							</CardContent>
						</Card>
					</div>
					<div className="card-container">
						<Card
							className="card-background"
							sx={{
								width: "227px",
								height: "325px",
								display: "flex",
								flexDirection: "column",
								justifyContent: "center",
								alignItems: "center",
								margin: "40px 40px",
							}}
						>
							<CardMedia>
								<Avatar
									alt="Vice-Pressident"
									src="src\assets\board\two Aarti Devi Ram.jpg"
									sx={{ width: 120, height: 120 }}
									// sx={{ width: 24, height: 24 }}
								/>
							</CardMedia>
							<CardContent>
								<Typography>Aarti Devi Ram</Typography>
								<Typography>Designation: उपाध्यक्ष</Typography>
							</CardContent>
						</Card>
					</div>
					<div className="card-container">
						<Card
							className="card-background"
							sx={{
								width: "227px",
								height: "325px",
								display: "flex",
								flexDirection: "column",
								justifyContent: "center",
								alignItems: "center",
								margin: "40px 40px",
							}}
						>
							<CardMedia>
								<Avatar
									alt="Speaker"
									src="src\assets\board\five Ranja Ray.jpg"
									sx={{ width: 120, height: 120 }}
									// sx={{ width: 24, height: 24 }}
								/>
							</CardMedia>
							<CardContent>
								<Typography>Ranjan Ray</Typography>
								<Typography>Designation : सभामुख </Typography>
							</CardContent>
						</Card>
					</div>

					<div className="card-container">
						<Card
							className="card-background"
							sx={{
								width: "227px",
								height: "325px",
								display: "flex",
								flexDirection: "column",
								justifyContent: "center",
								alignItems: "center",
								margin: "40px 40px",
							}}
						>
							<CardMedia>
								<Avatar
									alt="Treasurer"
									src="src\assets\board\three.jpg"
									sx={{ width: 120, height: 120 }}
									// sx={{ width: 24, height: 24 }}
								/>
							</CardMedia>
							<CardContent>
								<Typography>Rahul Goswami</Typography>
								<Typography>Designation : कोषाध्यक्ष</Typography>
							</CardContent>
						</Card>
					</div>
					<div className="card-container">
						<Card
							className="card-background"
							sx={{
								width: "227px",
								height: "325px",
								display: "flex",
								flexDirection: "column",
								justifyContent: "center",
								alignItems: "center",
								margin: "40px 40px",
							}}
						>
							<CardMedia>
								<Avatar
									alt="Member"
									src="src\assets\board\6 Sanjiv Sangi.png"
									sx={{ width: 120, height: 120 }}
									// sx={{ width: 24, height: 24 }}
								/>
							</CardMedia>
							<CardContent>
								<Typography>Sanjiv Sangi</Typography>
								<Typography>Designation : सदस्य</Typography>
							</CardContent>
						</Card>
					</div>
					<div className="card-container">
						<Card
							className="card-background"
							sx={{
								width: "227px",
								height: "325px",
								display: "flex",
								flexDirection: "column",
								justifyContent: "center",
								alignItems: "center",
								margin: "40px 40px",
							}}
						>
							<CardMedia>
								<Avatar
									alt="Member"
									src="src\assets\board\manisha paswan.png"
									sx={{ width: 120, height: 120 }}
									// sx={{ width: 24, height: 24 }}
								/>
							</CardMedia>
							<CardContent>
								<Typography>Manisha Paswan</Typography>
								<Typography>Designation : सदस्य</Typography>
							</CardContent>
						</Card>
					</div>
					<div className="card-container">
						<Card
							className="card-background"
							sx={{
								width: "227px",
								height: "325px",
								display: "flex",
								flexDirection: "column",
								justifyContent: "center",
								alignItems: "center",
								margin: "40px 40px",
							}}
						>
							<CardMedia>
								<Avatar
									alt="Member"
									src="src\assets\board\sabita kumari yadav.png"
									sx={{ width: 120, height: 120 }}
									// sx={{ width: 24, height: 24 }}
								/>
							</CardMedia>
							<CardContent>
								<Typography>Sabita Kumari Yadav</Typography>
								<Typography>Designation : सदस्य</Typography>
							</CardContent>
						</Card>
					</div>
					<div className="card-container">
						<Card
							className="card-background"
							sx={{
								width: "227px",
								height: "325px",
								display: "flex",
								flexDirection: "column",
								justifyContent: "center",
								alignItems: "center",
								margin: "40px 40px",
							}}
						>
							<CardMedia>
								<Avatar
									alt="Member"
									src="src\assets\board\khusfotor.png"
									sx={{
										width: 120,
										height: 120,
									}}
								/>
							</CardMedia>
							<CardContent>
								<Typography>Khusnandan Yadav</Typography>
								<Typography>Designation : सदस्य</Typography>
							</CardContent>
						</Card>
					</div>
					<div className="card-container">
						<Card
							className="card-background"
							sx={{
								width: "227px",
								height: "325px",
								display: "flex",
								flexDirection: "column",
								justifyContent: "center",
								alignItems: "center",
								margin: "40px 40px",
							}}
						>
							<CardMedia>
								<Avatar
									alt="Advisor"
									src="src\assets\board\eight Santosh Kunwar.jpg"
									sx={{ width: 120, height: 120 }}
									// sx={{ width: 24, height: 24 }}
								/>
							</CardMedia>
							<CardContent>
								<Typography>Santosh Kunwar</Typography>
								<Typography>Designation : सल्लाहकार</Typography>
							</CardContent>
						</Card>
					</div>
					<div className="card-container">
						<Card
							className="card-background"
							sx={{
								width: "227px",
								height: "325px",
								display: "flex",
								flexDirection: "column",
								justifyContent: "center",
								alignItems: "center",
								margin: "40px 40px",
							}}
						>
							<CardMedia>
								<Avatar
									alt="Advisor"
									src="src\assets\board\seven shiv sankar jaiswal.jpg"
									sx={{ width: 120, height: 120 }}
									// sx={{ width: 24, height: 24 }}
								/>
							</CardMedia>
							<CardContent>
								<Typography>Shiv Shankar Jaiswal</Typography>
								<Typography>Designation : सदस्य</Typography>
							</CardContent>
						</Card>
					</div>
				</Carousel>
			</div>
		</>
	);
}

export default CardCarousel;
