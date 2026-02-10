import React from "react";

const Card = (props) => {
    const { image, title, description } = props;
    return (

        <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
            <div className="card h-100">
                <img src={image} className="img-fluid w-100 mb-3" alt={title} style={{ height: "200px", objectFit: "cover" }} />
                <div className="card-body text-center">
                    <h2 className="card-title">{title}</h2>
                    <p className="card-text">{description}</p>
                </div>  {/*este div cierra h-100*/}
                <div className="card-footer text-center bg-light border-top-0">
                    <a href="#" className="btn btn-primary"> Find Out More!! </a>
                </div>
            </div>
        </div>
    );
};

export default Card;
