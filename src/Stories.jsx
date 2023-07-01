import {
	Card,
	CardContent,
	Button,
	CardMedia,
	Typography,
	Box,
} from "@mui/material";

const styleCard = {
	container: {
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
	},
	media: {
		width: "100%",
		borderRadius: "50px",
		padding: "10px",
	},
	content: {
		width: "50%",
	},
};

function Stories() {
	return (
		<>
			<Card sx={{ marginTop: 3, paddingLeft: 5, paddingRight: 5 }}>
				<CardMedia
					component="img"
					image="src\assets\stories\impact2.jpg"
					height="190"
					style={{ borderRadius: 20 }}
				/>
				<CardContent>
					<Typography
						variant="h5"
						sx={{ textAlign: "center" }}
					></Typography>
					<Typography
						varient="h6"
						sx={{ textAlign: "center" }}
					>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum,
						voluptatem! Quos tempore esse, hic optio facilis commodi aut
						perferendis architecto eius, repellendus velit illo, ut doloribus
						perspiciatis soluta assumenda totam.
					</Typography>
					<Box sx={{ display: "flex", justifyContent: "center" }}>
						<Button
							variant="contained"
							color="success"
							sx={{ borderRadius: 0, marginTop: "3px", fontWeight: "" }}
						>
							Read More
						</Button>
					</Box>
				</CardContent>
			</Card>
		</>
	);
}

export default Stories;
