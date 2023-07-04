import {
	Card,
	Grid,
	CardActionArea,
	CardMedia,
	CardContent,
	Typography,
} from "@mui/material";
import { Container } from "@mui/system";

const stylespan = {
	fontWeight: "bold",
};

function Programs() {
	return (
		<>
			<Container
				id="programs"
				sx={{
					backgroundColor: "#eff",
					textAlign: "center",
					paddingTop: 5,
					paddingBottom: 5,
					fontFamily: "poppins",
				}}
				maxWidth={false}
			>
				<h1> Our Programs </h1>
				<Typography sx={{ margin: "10px 0px 10px 0px" }}>
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae
					at rerum quibusdam. Impedit voluptate magnam, obcaecati ipsam iusto
					quasi quas totam blanditiis laboriosam iste iure molestiae! Ab
					reiciendis corrupti officiis?
				</Typography>
				<Grid
					container
					spacing={2}
					direction="row"
					justifyContent="center"
					sx={{ alignItems: "center" }}
				>
					<Grid item>
						<Card
							sx={{ maxWidth: 300 }}
							xs={3}
						>
							<CardActionArea>
								<CardMedia
									component="img"
									height="150"
									image="src\assets\programs\2.jpeg"
									alt="programOne"
								/>

								<CardContent>
									<Typography sx={{ textAlign: "left" }}>
										<span style={stylespan}>Program Name:</span> Program One
									</Typography>
									<Typography sx={{ textAlign: "left" }}>
										<span style={stylespan}>Program Description :</span>
										<p>
											Lorem ipsum dolor sit amet consectetur adipisicing elit.
											Voluptatibus sed, dolore iste incidunt pariatur soluta
											quisquam explicabo tempora et voluptatum labore sunt
											molestiae deleniti, porro, sequi alias libero asperiores
											nulla?
										</p>
									</Typography>
								</CardContent>
							</CardActionArea>
						</Card>
					</Grid>
					<Grid item>
						<Card sx={{ maxWidth: 300 }}>
							<CardActionArea>
								<CardMedia
									component="img"
									height="150"
									image="src\assets\programs\2.jpeg"
									alt="programOne"
									sx={{}}
								/>

								<CardContent>
									<Typography sx={{ textAlign: "left" }}>
										<span style={stylespan}>Program Name:</span> Program One
									</Typography>
									<Typography sx={{ textAlign: "left" }}>
										<span style={stylespan}>Program Description :</span>
										<p>
											Lorem ipsum dolor sit amet consectetur adipisicing elit.
											Voluptatibus sed, dolore iste incidunt pariatur soluta
											quisquam explicabo tempora et voluptatum labore sunt
											molestiae deleniti, porro, sequi alias libero asperiores
											nulla?
										</p>
									</Typography>
								</CardContent>
							</CardActionArea>
						</Card>
					</Grid>
					<Grid item>
						<Card
							sx={{ maxWidth: 300 }}
							xs={3}
						>
							<CardActionArea>
								<CardMedia
									component="img"
									height="150"
									image="src\assets\programs\2.jpeg"
									alt="programOne"
								/>

								<CardContent>
									<Typography sx={{ textAlign: "left" }}>
										<span style={stylespan}>Program Name:</span> Program One
									</Typography>
									<Typography sx={{ textAlign: "left" }}>
										<span style={stylespan}>Program Description :</span>
										<p>
											Lorem ipsum dolor sit amet consectetur adipisicing elit.
											Voluptatibus sed, dolore iste incidunt pariatur soluta
											quisquam explicabo tempora et voluptatum labore sunt
											molestiae deleniti, porro, sequi alias libero asperiores
											nulla?
										</p>
									</Typography>
								</CardContent>
							</CardActionArea>
						</Card>
					</Grid>
					<Grid item>
						<Card sx={{ maxWidth: 300, marginBottom: 3 }}>
							<CardActionArea>
								<CardMedia
									component="img"
									height="150"
									image="src\assets\programs\2.jpeg"
									alt="programOne"
								/>

								<CardContent>
									<Typography sx={{ textAlign: "left" }}>
										<span style={stylespan}>Program Name:</span> Program One
									</Typography>
									<Typography sx={{ textAlign: "left" }}>
										<span style={stylespan}>Program Description :</span>
										<p>
											Lorem ipsum dolor sit amet consectetur adipisicing elit.
											Voluptatibus sed, dolore iste incidunt pariatur soluta
											quisquam explicabo tempora et voluptatum labore sunt
											molestiae deleniti, porro, sequi alias libero asperiores
											nulla?
										</p>
									</Typography>
								</CardContent>
							</CardActionArea>
						</Card>
					</Grid>
				</Grid>
			</Container>
		</>
	);
}

export default Programs;
