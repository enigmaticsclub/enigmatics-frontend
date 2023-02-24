import React from "react";
import CategoryComponent from "./Category/Category";

import category from "./../../database/index";
import "./Body.scss";

const Body = () => {
  return (
    <div className="body">
      {category.map((item, index) => {
        return index % 2 === 0 ? (
          <CategoryComponent
            key={index}
            name={item.name}
            description={item.description}
            image={item.image}
            position="left"
          />
        ) : (
          <CategoryComponent
            key={index}
            name={item.name}
            description={item.description}
            image={item.image}
            position="right"
          />
        );
      })}
    </div>
  );
};

export default Body;
