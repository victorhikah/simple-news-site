import React from "react";

const NewsCard = ({ urlToImage, title, description, link }) => {
  return (
    <>
      <div className="col-sm-12 col-md-6 col-xl-4 news-card">
        <div className="card mb-3 d-inline-block my-3">
          <img src={urlToImage} className="card-img-top" alt="NewsCard" />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a href={link} className="btn btn-outline-dark">
              Read More
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsCard;
