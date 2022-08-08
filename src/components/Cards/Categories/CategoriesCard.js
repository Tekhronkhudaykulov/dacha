import React from "react";
import { baseUrl } from "../../../helpers/requests";

const CategoriesCard = ({ item, onClick }) => {
  return (
    <div className="category-items" onClick={onClick}>
      <div className="category-item">
        <div className="image">
          <img src={`${baseUrl}/${item.image_path}`} alt="" />
        </div>
        <div className="category-image">
          <p>{item.name_uz}</p>
        </div>
      </div>
    </div>
  );
};

export default CategoriesCard;
