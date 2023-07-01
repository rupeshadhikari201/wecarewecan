import {
	CardContent,
	Grid,
	Card,
	Avatar,
	Typography,
	CardMedia,
} from "@mui/material";
import "./board.css";
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
function Board() {
	return (
		<>
			<div>
				<div style={boardStyle}>
					<h2>
						Our Board <span style={spanStyle}> Members</span>
					</h2>
				</div>
				<div className="board">
					<Grid
						container
						// xs={12}
						// sm={6}
						// md={6}
						// lg={3}s
						// xxl={3}
						// direction="row"
						// sx={{
						// 	display: "flex",
						// 	justifyContent: "center",
						// 	alignItems: "center",
						// 	// flexDirection: "row",
						// }}
					>
						<Grid
							item
							flexGrow={1}
							sx={{
								display: "flex",
								justifyContent: "center",
								alignItems: "center",
							}}
						>
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
										src="src\assets\one.jpeg"
										sx={{ width: 120, height: 120 }}
										// sx={{ width: 24, height: 24 }}
									/>
								</CardMedia>
								<CardContent>
									<Typography>Name</Typography>
									<Typography>Designation</Typography>
								</CardContent>
							</Card>
						</Grid>
						<Grid
							item
							flexGrow={1}
							sx={{
								display: "flex",
								justifyContent: "center",
								alignItems: "center",
							}}
						>
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
										src="src\assets\one.jpeg"
										sx={{ width: 120, height: 120 }}
										// sx={{ width: 24, height: 24 }}
									/>
								</CardMedia>
								<CardContent>
									<Typography>Name</Typography>
									<Typography>Designation</Typography>
								</CardContent>
							</Card>
						</Grid>
						<Grid
							item
							flexGrow={1}
							sx={{
								display: "flex",
								justifyContent: "center",
								alignItems: "center",
							}}
						>
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
										src="src\assets\one.jpeg"
										sx={{ width: 120, height: 120 }}
										// sx={{ width: 24, height: 24 }}
									/>
								</CardMedia>
								<CardContent>
									<Typography>Name</Typography>
									<Typography>Designation</Typography>
								</CardContent>
							</Card>
						</Grid>
						<Grid
							item
							flexGrow={1}
							sx={{
								display: "flex",
								justifyContent: "center",
								alignItems: "center",
							}}
						>
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
										src="src\assets\one.jpeg"
										sx={{ width: 120, height: 120 }}
										// sx={{ width: 24, height: 24 }}
									/>
								</CardMedia>
								<CardContent>
									<Typography>Name</Typography>
									<Typography>Designation</Typography>
								</CardContent>
							</Card>
						</Grid>
					</Grid>
				</div>
			</div>
		</>
	);
}

export default Board;
