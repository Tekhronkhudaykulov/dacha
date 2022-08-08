import React from "react";
import ReactStars from "react-rating-stars-component";
import Location from "./../../assets/icon/Solid/Navigation/Location.png";
import Sleep from "./../../assets/icon/sleep.png";
import Camera from "./../../assets/icon/photo_camera.png";
import Room from "./../../assets/icon/sensor_door.png";
import See from "./../../assets/icon/glaz.png";
import { baseUrl } from "../../helpers/requests";
import "./cards.scss";

const Card = ({ onclick, product }) => {
  const ratingChanged = (newRating) => {
    console.log(newRating);
  };

  return (
    <>
      <div className="card" onClick={onclick}>
        <div className="card-see">
          {product.premium === 1 && <p className="pre">Premium</p>}
          {
          product.views.length > 0 &&
          <div className="card-icon-see">
          <img src={See} alt="" />
           <p>{product.views}</p>
        </div>
          }
         
        </div>
        <div className="card-image">
          <img  className="active-img" src={`${baseUrl}/${product.images[0].image_path}`} alt="" />
        </div>
        <div className="card-all-item">
          <div className="card-description">
            <p className="card-title">{product.name}</p>
            <p className="card-price">
              {product.cost} {product.currency}
            </p>
          </div>
          <div
            className="all-card-user"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div className="card-location">
              <img src={Location} alt="" />
              <p className="location-name">{product.category.name_uz}</p>
            </div>
          </div>

          <div className="card-status">
            <ReactStars
              count={5}
              value={product.avg_rating}
              size={24}
              activeColor="green"
            />
            <p className="card-reyting">({product.avg_rating === null ? 0 : product.avg_rating})</p>
          </div>
          <div className="card-bottom">
            <div className="card-item">
              <img src={Sleep} alt="" />
              <p>{product.bathroom_count}</p>
            </div>
            <div className="card-item">
              <img src={Camera} alt="" />
              <p>{product.images.length}</p>
            </div>
            <div className="card-item">
              <img src={Room} alt="" />
              <p>{product.room_count}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
