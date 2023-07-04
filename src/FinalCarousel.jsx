import { Carousel } from "react-carousel-minimal";
import "./Slider.css";

function MainCarousel() {
	const data = [
		{
			image: "src/assets/slider/first.png",
		},
		{
			image: "src/assets/slider/second.png",
		},
		{
			image: "src/assets/slider/three.png",
		},
	];

	const captionStyle = {
		fontSize: "2em",
		fontWeight: "bold",
	};
	const slideNumberStyle = {
		fontSize: "20px",
		fontWeight: "bold",
	};
	return (
		<div
			className="App"
			id="about"
			style={{}}
		>
			<div style={{ paddingTop: "90px" }}>
				<div
					style={
						{
							// padding: "0px 0px",
							// border: "5px solid white",
							// margin: "-200px auto",
						}
					}
				>
					<Carousel
						data={data}
						time={90000000}
						width="100%"
						height="500px"
						captionStyle={captionStyle}
						// radius="10px"
						slideNumber={true}
						slideNumberStyle={slideNumberStyle}
						captionPosition="bottom"
						automatic={true}
						dots={true}
						pauseIconColor="white"
						pauseIconSize="40px"
						slideBackgroundColor="darkgrey"
						slideImageFit="cover"
						style={{
							textAlign: "center",
							maxHeight: "500px",
						}}
					/>
				</div>
			</div>
		</div>
	);
}

export default MainCarousel;
