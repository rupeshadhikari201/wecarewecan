import {
	Container,
	Box,
	Typography,
	Grid,
	Card,
	CardContent,
} from "@mui/material";

export default function ObjectiveAndStrategy() {
	const olStyled = {
		color: "green",
		paddingLeft: 20,
	};
	return (
		<>
			<Container
				sx={{
					fontFamily: "poppins",
				}}
				maxWidth={false}
				disableGutters={true}
			>
				<Box sx={{ bgcolor: "lightgreen", pb: 4 }}>
					<Typography
						sx={{
							fontFamily: "poppins",
							fontWeight: "bold",
							fontSize: "2rem",
							textAlign: "center",
							paddingTop: 3,
						}}
					>
						Objective and Strategy
					</Typography>
					<Grid
						container
						spacing={2}
						direction={{ sm: "row" }}
					>
						<Grid
							item
							xs={12}
							sm={12}
							md={6}
							lg={9}
						>
							<Card sx={{ margin: 2 }}>
								<CardContent>
									<Typography
										variant="title"
										component="div"
										sx={{
											textAlign: "center",
											textTransform: "uppercase",
											fontSize: "1.2rem",
											paddingBottom: "3px",
										}}
									>
										Objective
									</Typography>
									<ol style={olStyled}>
										<li>
											To provide quality Education through organising different
											coching center and school at different Places.
										</li>
										<li>
											To create a Skillfull Person by organising different
											Training and season Program.
										</li>
										<li>
											To create of Database of Blood Grouping of people to get
											Emergency needs of blood at the time critical condition of
											patients in hospital.
										</li>
										<li>
											To do arrangements of foods to needy families in
											collaboration with Donner&lsquo;s and sponsor.
										</li>
									</ol>
								</CardContent>
							</Card>
						</Grid>
						<Grid
							item
							xs={12}
							sm={12}
							md={6}
							lg={3}
						>
							<Card sx={{ margin: 2 }}>
								<CardContent>
									<Typography
										variant="title"
										component="div"
										sx={{
											textAlign: "center",
											textTransform: "uppercase",
											fontSize: "1.2rem",
											paddingBottom: "3px",
										}}
									>
										Strategy
									</Typography>
									<Typography>
										WCWC works with governments, NGOs,INGOs research
										institutions,Private Institution under Corporate Social
										Responsiblty and local bodies
									</Typography>
								</CardContent>
							</Card>
						</Grid>
					</Grid>
				</Box>
			</Container>
		</>
	);
}
