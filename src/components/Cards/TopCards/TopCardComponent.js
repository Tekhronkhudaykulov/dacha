import React from "react";
import ReactStars from "react-rating-stars-component";
import Location from "../../../assets/icon/Solid/Navigation/Location.png";
import Sleep from "../../../assets/icon/sleep.png";
import Camera from "../../../assets/icon/photo_camera.png";
import Room from "../../../assets/icon/sensor_door.png";
import See from "../../../assets/icon/glaz.png";
import { MdDriveFileRenameOutline } from "react-icons/md";
import { baseUrl } from "../../../helpers/requests";
import "../cards.scss";
import { useLocation, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import NoPhoto from "../../../assets/img/nophoto.png"

const CardTop = ({ onclick, product, margin, props }) => {
  console.log(product)
  const ratingChanged = (newRating) => {
    console.log(newRating);
  };

  const location = useLocation();

  const navigate = useNavigate();
  return (
    <>
      <div className="card" onClick={onclick} style={{ margin: margin }}>
        <div className="card-see">
          {product.top_rated == 1 && 
          <p className="pre">TOP</p>
          }
          {product.views > 0 &&  <div className="card-icon-see">
            <img src={See} alt="" />
              <p>{product.views}</p>
          </div>}
        </div>
        <div className="card-image">
          {props && 
           <Link to={`/advertiseCottage/${product.id}`}>
          <div className="card-absolute">Хотите рекламировать дачу</div>
          </Link>
          } 
            {product.images.length > 0 ? product.images?.map((item, index) => (
            <img key={index} className="active-img" src={`${baseUrl}/${item.image_path}`} alt="" />
            )) : <img className="active-img" src={NoPhoto} alt="no-photo"/>}
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
            {location.pathname !== "/" ? (
              <div className="card-delete">
                <MdDriveFileRenameOutline
                  size={25}
                  onClick={() => navigate(`/renameHome/` + product.id)}
                  style={{ marginRight: "10px" }}
                />
              </div>
            ) : null}
          </div>
          <div className="card-status">
            <ReactStars
              count={5}
              value={product.avg_rating}
              // onChange={ratingChanged}
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

export default CardTop;
