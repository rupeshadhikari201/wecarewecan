import { Avatar, Grid, Typography } from "@mui/material";
import AvatarImage from "./assets/logo.jpg";
import CallIcon from "@mui/icons-material/call";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons";
import { faInstagramSquare } from "@fortawesome/free-brands-svg-icons";
import { faTwitterSquare } from "@fortawesome/free-brands-svg-icons";
import { faWhatsappSquare } from "@fortawesome/free-brands-svg-icons";
import { faAt } from "@fortawesome/free-solid-svg-icons";
import { ThemeProvider } from "@emotion/react";
import fontTheme from "./FontTheme";
import "./footer.css";

const Contact = () => {
	return (
		<>
			<ThemeProvider theme={fontTheme}>
				<div id="contact">
					<Grid
						container
						sx={{
							background: "rgb(31,37,41)",
							display: "flex",
							justifyContent: "space-around",
							flexWrap: "wrap",
							color: "white",
							paddingBottom: 3,
						}}
					>
						<Grid
							item
							sm={6}
							xs={12}
							md={6}
							lg={4}
							sx={{ textAlign: "center", marginBottom: 4, marginTop: 2 }}
						>
							<Typography
								className="title"
								variant="button"
								sx={{
									// paddingTop: 2,
									// paddingBottom: 2,
									fontSize: "1.5em",
									fontWeight: "bold",
									textShadow: "0px 4px 10px rgba(0,0,0,1)",
									paddingLeft: 5,
									paddingRight: 5,
								}}
							>
								Contact Us
							</Typography>
							<div
								className="content"
								style={{
									textAlign: "center",
									display: "flex",
									flexDirection: "column",
									justifyContent: "flex-start",
									alignItems: "center",

									marginTop: 15,
									// border: "2px solid red",
								}}
							>
								<Avatar
									component="image"
									src={AvatarImage}
									variant="square"
									// variant:"square"
									sx={{
										width: 120,
										height: 120,
										textAlign: "center",
										marginBottom: 2,
									}}
								></Avatar>
								<Typography>WE CARE WE CAN </Typography>
								<Typography sx={{ textAlign: "center" }}>
									Malangawa,Sarlahi <br />
									Nepal
								</Typography>
								<div style={{ display: "flex", alignItems: "center" }}>
									<CallIcon /> <span>+977 9817837421</span>
								</div>
								<div style={{ display: "flex", alignItems: "center" }}>
									<CallIcon /> <span>+977 9817837421</span>
								</div>
							</div>
						</Grid>

						<Grid
							item
							sm={6}
							xs={12}
							md={6}
							lg={4}
							sx={{
								textAlign: "center",
								marginBottom: 4,
								marginTop: 2,
							}}
						>
							<Typography
								className="title"
								variant="button"
								sx={{
									fontSize: "1.5em",
									fontWeight: "bold",
									textShadow: "0px 4px 10px rgba(0,0,0,1)",
									paddingLeft: 5,
									paddingRight: 5,
								}}
							>
								Social Handles
							</Typography>
							<div
								style={{
									// marginTop: 20,
									display: "flex",
									flexDirection: "column",
									justifyContent: "center",
									alignItems: "center",
									marginTop: 15,
									paddingTop: 5,
									// border: "2px solid red",
								}}
							>
								<div
									className="social-container"
									style={{
										width: "30%",
									}}
								>
									<div
										className="container"
										style={{ padding: 10, paddingTop: 0 }}
									>
										<a
											href="https://www.facebook.com/wecarewecanngo"
											style={{
												display: "flex",
												flexDirection: "row",
												alignItems: "center",
												fontWeight: "bold",
												textDecoration: "none",
												color: "white",
											}}
										>
											<FontAwesomeIcon
												icon={faFacebookSquare}
												size="2xl"
												style={{
													color: "#ffffff",
													backgroundColor: "transparent",
													transition: "background-color 0.3s ease",
												}}
											/>
											<span
												style={{
													marginLeft: "5px",
													fontSize: "20px",
													transition: "color 0.3s ease",
												}}
											>
												Facebook
											</span>
										</a>
									</div>
									<div style={{ padding: 10 }}>
										<a
											href="https://facebook.com"
											style={{
												display: "flex",
												flexDirection: "row",
												alignItems: "center",
												fontWeight: "bold",
												textDecoration: "none",
												color: "white",
											}}
										>
											<FontAwesomeIcon
												icon={faInstagramSquare}
												size="2xl"
												style={{ color: "#ffffff" }}
											/>
											<span
												style={{
													marginLeft: "5px",
													fontSize: "20px",
													// color: "lightgreen",
												}}
											>
												Instagram
											</span>
										</a>
									</div>
									<div style={{ padding: 10 }}>
										<a
											href="https://www.facebook.com/wecarewecanngo"
											style={{
												display: "flex",
												flexDirection: "row",
												alignItems: "center",
												fontWeight: "bold",
												textDecoration: "none",
												color: "white",
											}}
										>
											<FontAwesomeIcon
												icon={faTwitterSquare}
												size="2xl"
												style={{ color: "#ffffff" }}
											/>
											<span
												style={{
													marginLeft: "5px",
													fontSize: "20px",
													// color: "lightgreen",
												}}
											>
												Twitter
											</span>
										</a>
									</div>
									<div style={{ padding: 10 }}>
										<a
											href="https://api.whatsapp.com/send?phone=977981-2019263"
											style={{
												display: "flex",
												flexDirection: "row",
												alignItems: "center",
												fontWeight: "bold",
												textDecoration: "none",
												color: "white",
											}}
										>
											<FontAwesomeIcon
												icon={faWhatsappSquare}
												size="2xl"
												style={{ color: "#ffffff" }}
											/>
											<span
												style={{
													marginLeft: "5px",
													fontSize: "20px",
													// color: "lightgreen",
												}}
											>
												WhatsApp
											</span>
										</a>
									</div>
									<div style={{ padding: 10 }}>
										<a
											href="https://facebook.com"
											style={{
												display: "flex",
												flexDirection: "row",
												alignItems: "center",
												fontWeight: "bold",
												textDecoration: "none",
												color: "white",
											}}
										>
											<FontAwesomeIcon
												icon={faAt}
												size="2xl"
												style={{ color: "#ffffff" }}
											/>
											{/* <FontAwesomeIcon icon="fa-solid fa-at" /> */}
											<span
												style={{
													marginLeft: "5px",
													fontSize: "20px",
													// color: "lightgreen",
												}}
											>
												Gmail
											</span>
										</a>
									</div>
								</div>
							</div>
						</Grid>
						<Grid
							item
							sm={6}
							xs={12}
							md={6}
							lg={4}
							sx={{ textAlign: "center", marginTop: 2 }}
						>
							<Typography
								variant="button"
								sx={{
									fontSize: "1.5em",
									fontWeight: "bold",
									textAlign: "center",
									textShadow: "0px 4px 10px rgba(0,0,0,1)",
									paddingLeft: 5,
									paddingRight: 5,
								}}
							>
								Location
							</Typography>
							<div
								className="content"
								style={{
									display: "flex",
									justifyContent: "center",
									marginTop: 15,
									// border: "2px solid red",
								}}
							>
								<iframe
									src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.478771350793!2d85.56024567531583!3d26.85652587668072!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ec8912d14495fb%3A0x3d0b773cdb1b1752!2sWe%20Care%20We%20Can!5e0!3m2!1sen!2sin!4v1688034374466!5m2!1sen!2sin"
									width="350"
									height="250"
									// style="border:0;"
									style={{ border: "10px solid lightgreen" }}
									allowfullscreen=""
									loading="lazy"
									// referrerpolicy="no-referrer-when-downgrade"
								></iframe>
							</div>
						</Grid>
					</Grid>
					<div
						style={{
							height: "30px",
							color: `rgb(${31},${37}, ${41})`,
							backgroundColor: "#eee",
						}}
					>
						<Typography
							sx={{
								// display: "flex",
								// justifyContent: "center",
								// alignItems: "center",
								textAlign: "center",
								fontWeight: "bold",
							}}
						>
							@All Rights Reserved WE CARE WE CAN 2023
						</Typography>
					</div>
				</div>
			</ThemeProvider>
		</>
	);
};

export default Contact;
