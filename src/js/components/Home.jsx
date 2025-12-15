import React from "react";

//include images into your bundle
import { Navbar } from "./Navbar";
import { Jumbotron } from "./Jumbotron";
import { Card } from "./Card";
import {Footer} from "./Footer";

//create your first component
const Home = () => {
	return (
		<>
			<Navbar></Navbar>
			<Jumbotron></Jumbotron>
			<Card></Card>
            <Footer></Footer>

		</>
	);
};

export default Home;