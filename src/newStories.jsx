import Slider from "react-slick";
import "./Slider.css";
import {
	Card,
	CardContent,
	Button,
	CardMedia,
	Typography,
	Box,
} from "@mui/material";

function Storie() {
	const settings = {
		// dots: true,
		infinite: true,
		speed: 1000,
		slidesToShow: 1,
		slidesToScroll: 1,
		button: false,
		dragable: true,
		accessibility: true,
		arrows: true,
		autoplay: true,
		autoplaySpeed: 3000,
		mobileFirst: true,
		// fade: true,
		// beforeChange: (current, next) => setCurrentSlide(next),
	};

	const cards = [
		{
			image: "src/assets/stories/impact1.jpg",
			title: "Card 1",
			description:
				"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum, voluptatem! Quos tempore esse, hic optio facilis commodi aut perferendis architecto eius, repellendus velit illo, ut doloribus perspiciatis soluta assumenda totam.",
		},
		{
			image: "src/assets/stories/impact2.jpg",
			title: "Card 2",
			description:
				"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum, voluptatem! Quos tempore esse, hic optio facilis commodi aut perferendis architecto eius, repellendus velit illo, ut doloribus perspiciatis soluta assumenda totam.",
		},
		{
			image: "src/assets/stories/impact1.jpg",
			title: "Card 3",
			description:
				"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum, voluptatem! Quos tempore esse, hic optio facilis commodi aut perferendis architecto eius, repellendus velit illo, ut doloribus perspiciatis soluta assumenda totam.",
		},
	];

	return (
		<div
			id="impact"
			style={{
				backgroundColor: "lightgreen",

				paddingBottom: 15,
			}}
		>
			<Box
				sx={{
					overflowX: "hidden",
					overflowY: "hidden",
					// backgroundColor: "lightgreen",
				}}
			>
				<Typography
					variant="h4"
					sx={{
						fontFamily: "monospace",
						fontWeight: "bold",
						textAlign: "center",
						marginTop: 4,
						marginBottom: 2,
					}}
				>
					Impact
					<span style={{ color: "green", fontWeight: "bolder" }}> Stories</span>
				</Typography>

				<div>
					<Slider
						className="center-slider"
						{...settings}
					>
						{cards.map((card, index) => (
							<Card
								key={index}
								height={400}
								sx={{
									// border: "3px solid green",
									height: "420",
									maxWidth: "700",
									minWidth: "365",
								}}
							>
								<CardMedia
									component="img"
									image={card.image}
									height="190"
									sx={{
										marginTop: 3,
										paddingLeft: 3,
										paddingRight: 3,
									}}
								/>
								<CardContent sx={{ paddingLeft: 3, paddingRight: 3 }}>
									<Typography
										variant="h5"
										sx={{ textAlign: "center" }}
									>
										{card.title}
									</Typography>
									<Typography
										variant="title"
										sx={{ textAlign: "center" }}
									>
										{card.description}
									</Typography>
									<Box sx={{ display: "flex", justifyContent: "center" }}>
										<Button
											variant="contained"
											color="success"
											sx={{ borderRadius: 0, marginTop: 3 }}
										>
											Read More
										</Button>
									</Box>
								</CardContent>
							</Card>
						))}
					</Slider>
				</div>
			</Box>
		</div>
	);
}

export default Storie;
