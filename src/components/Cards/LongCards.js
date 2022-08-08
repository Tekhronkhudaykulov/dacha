import React from "react";
import ReactStars from "react-rating-stars-component";
import Location from "./../../assets/icon/Solid/Navigation/Location.png";
import Sleep from "./../../assets/icon/sleep.png";
import Camera from "./../../assets/icon/photo_camera.png";
import Room from "./../../assets/icon/sensor_door.png";
import See from "./../../assets/icon/glaz.png";
import { baseUrl } from "../../helpers/requests";
import NoPhoto from "../../assets/img/nophoto.png"
import "../../assets/longCards.scss";

const LongCards = ({ background, border, product }) => {
  const ratingChanged = (newRating) => {
    console.log(newRating);
  };
  return (
    <div
      className="long-card"
      style={{ background: background, border: border }}
    >
      <div className="logn-card-img">
        <div className="card-image long-image">
        {product.images.length > 0 ? product.images?.map((item) => (
          <img className="active-img" src={`${baseUrl}/${item?.image_path}`} alt="" />
        )) : <img className="active-img" src={NoPhoto} alt="no-photo"/>}
        </div>
        <div className="card-see">
        {product.top_rated == 1 && 
          <p className="pre">TOP</p>
          }
          {product.views > 0 &&  <div className="card-icon-see">
            <img src={See} alt="" />
              <p style={{marginLeft: "5px"}}>{product.views}</p>
          </div>}
        </div>
      </div>
      <div className="card-title-logn">
        <p className="title-long">{product.name}</p>
        <div className="location-title">
          <img src={Location} alt="" />
          <p className="location-long">{product.category.name_uz}</p>
        </div>
        <div className="long-card-category">
          <div className="all-category">
            <img src={Sleep} alt="" />
            <p>{product.bathroom_count}</p>
          </div>
          <div className="all-category">
            <img src={Camera} alt="" />
            <p>{product.images.length} photo</p>
          </div>
          <div className="all-category">
            <img src={Room} alt="" />
            <p>{product.room_count} rooms</p>
          </div>
        </div>
        <div className="long-card-description">
          {product.category.description_uz}
        </div>
        <div className="long-card-reytin">
          <ReactStars
            count={5}
            value={product.avg_rating}
            size={24}
            activeColor="green"
          />
        <p className="card-reyting">({product.avg_rating === null ? 0 : product.avg_rating})</p>
        </div>
      </div>
      <div className="card-logn-price">
        <p>{product.cost}</p>
        <p>{product.currency}</p>
      </div>
    </div>
  );
};

export default LongCards;
