import React, { useState } from "react";

const Home = () => {

	const [selectedColor, setSelectedColor] = useState("red");

	const [lights, setLights] = useState(["red", "yellow", "green"]);

	return (
		<div className="text-center mt-5">
			<div className="traffic-top" ></div>
			<div className="traffic-body" >
				{lights.map((color, index) => (
					<div
						key={index}
						onClick={() => setSelectedColor(color)}
						className={`light ${color} ${selectedColor === color ? "glow" : ""}`}
					></div>
				))}
			</div>
			<div className="mt-3">
				<button className="btn btn-primary m-2" onClick={() => {
					if (selectedColor === "red") setSelectedColor("green");
					else if (selectedColor === "green") setSelectedColor("yellow");
					else setSelectedColor("red");
				}}>
					Alternar Color
				</button>
				<button className="btn btn-info m-2" onClick={() => setLights([...lights, "purple"])}>
					Añadir Púrpura
				</button>
			</div>
		</div>
	);
};

export default Home;