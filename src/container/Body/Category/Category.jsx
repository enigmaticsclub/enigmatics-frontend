import React from "react";

import "./Category.scss";

const CategoryComponent = (props) => {
  return (
    <>
      <div className="category__body">
        {props.position === "right" ? (
          <>
            <div className="category__body-content">
              <h1 className="category__body-content-title">{props.name}</h1>
              <p className="category__body-content-description">
                {props.description}
              </p>
              <button className="category__body-content-button">Explore</button>
            </div>
            <div className="category__body-image">
              <img src={props.image} alt={props.name} />
            </div>
          </>
        ) : (
          <>
            <div className="category__body-image">
              <img src={props.image} alt={props.name} />
            </div>
            <div className="category__body-content">
              <h1 className="category__body-content-title">{props.name}</h1>
              <p className="category__body-content-description">
                {props.description}
              </p>
              <button className="category__body-content-button">Explore</button>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default CategoryComponent;
