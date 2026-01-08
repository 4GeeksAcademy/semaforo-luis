const Card = ({ image, title, description }) => {
	return (
		<div className="card h-100">
			<img
				src={image}
				className="card-img-top"
				style={{ height: "200px", objectFit: "cover" }}
				alt={title}
			/>
			<div className="card-body text-center">
				<h5 className="card-title">{title}</h5>
				<p className="card-text">{description}</p>
				<hr />
				<button className="btn btn-primary">Find out More!</button>
			</div>
		</div>
	);
};

export default Card;
