import {
	Container,
	Box,
	Typography,
	Grid,
	Card,
	CardContent,
} from "@mui/material";
import mytheme from "./themeForMission";
import { ThemeProvider } from "@mui/material";

export default function MisssionVision() {
	return (
		<>
			<div
				id="missionandvision"
				style={{}}
			>
				<ThemeProvider theme={mytheme}>
					<Container
						sx={{
							fontFamily: "poppins",
						}}
						maxWidth={false}
						disableGutters={true}
					>
						<Box sx={{ bgcolor: "#eff", pb: 0 }}>
							<Typography
								sx={{
									fontFamily: "poppins",
									fontWeight: "bold",
									fontSize: "2rem",
									textAlign: "center",
									paddingTop: 3,
								}}
							>
								We CARE WE CAN
							</Typography>
							<Grid
								container
								spacing={2}
								direction={{ sm: "row" }}
								sx={{ paddingBottom: 3 }}
							>
								<Grid
									item
									xs={12}
									sm={12}
									md={6}
									lg={6}
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
												Mission
											</Typography>
											<Typography>
												Mission is to imparting quality Education to the all the
												Backwarded and Economicall week Children and creating a
												Skillfull People Through different Training and
												Progrramm.
											</Typography>
										</CardContent>
									</Card>
								</Grid>
								<Grid
									item
									xs={12}
									sm={12}
									md={6}
									lg={6}
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
												Vision
											</Typography>
											<Typography>
												Free and Quality Education for all. We envision to have
												well educated and skillfull people in our Nation.
											</Typography>
										</CardContent>
									</Card>
								</Grid>
							</Grid>
						</Box>
					</Container>
				</ThemeProvider>
			</div>
		</>
	);
}
