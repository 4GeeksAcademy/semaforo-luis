import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import Card from "./Card";
import Footer from "./Footer";

const cards = [
	{
		image: "https://picsum.photos/id/1077/900/900",
		title: "sport",
		description: "Sit et id aliqua in velit sint anim irure minim qui consequat. Voluptate aliquip amet.",
	},
	{
		image: "https://picsum.photos/id/857/800/800",
		title: "City",
		description: "Sit et id aliqua in velit sint anim irure minim qui consequat. Voluptate aliquip amet.",
	},
	{
		image: "https://picsum.photos/id/237/800/800",
		title: "Puppy",
		description: "Sit et id aliqua in velit sint anim irure minim qui consequat. Voluptate aliquip amet.",
	},
	{
		image: "https://picsum.photos/id/822/800/800",
		title: "Mother",
		description: "Sit et id aliqua in velit sint anim irure minim qui consequat. Voluptate aliquip amet.",
	}
];

const Home = () => {
	return (
		<>
			<Navbar />
			<Jumbotron />

			<div className="container my-5">
				<div className="row">
					{cards.map((item, index) => (
						<div
							key={index}
							className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4"
						>
							<Card
								image={item.image}
								title={item.title}
								description={item.description}
							/>
						</div>
					))}
				</div>
			</div>

			<Footer />
		</>
	);
};

export default Home;
