import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { Navbar } from "./Navbar.jsx";
import { Footer } from "./Footer.jsx";
import { Card } from "./Card.jsx";

//create your first component
const Home = () => {
	return (
		<>
			<Navbar />
			<div class="row row-cols-4">
				<Card
					imageUrl="https://acnhapi.com/v1/images/villagers/115"
					title="Bones"
				/>
				<Card
					imageUrl="https://acnhapi.com/v1/images/villagers/56"
					title="Kitty"
				/>
				<Card
					imageUrl="https://acnhapi.com/v1/images/villagers/77"
					title="Chester"
				/>
				<Card
					imageUrl="https://acnhapi.com/v1/images/villagers/128"
					title="Joey"
				/>
			</div>
			<Footer />
		</>
	);
};

export default Home;
