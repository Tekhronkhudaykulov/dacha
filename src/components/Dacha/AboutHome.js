import React, { useEffect } from "react";
import ReactStars from "react-rating-stars-component";
import HeaderNavbarTop from "../Navbar/HeaderNavbarTop/HeaderNavbarTop";
import { Title } from "../Title/Title";
import "./Search.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper";
import UserImg from "../../assets/img/Ellipse 4.png";
import Place from "../../assets/img/place.png";
import Sleep from "../../assets/img/sleep.png";
import Room from "../../assets/img/people.png";
import People from "../../assets/img/peple.png";
import { Button } from "../Buttons/Header/Buttons";
import Premium from "../Cards/Premium/Premium";
import Footer from "../Footer/Footer";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchIdUser } from "../../redux/actions/user/HomeIdAction";
import requests from "../../helpers/requests";
import { baseUrl } from "../../helpers/requests";
import { MdFavoriteBorder } from "react-icons/md";
import {
  getFavourite,
  postFavourite,
} from "../../redux/actions/Card/FavouriteAction";
import { useState } from "react";
import { ratingDacha } from "../../redux/actions/Dacha/RatingDachaAction";

const AboutHome = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchIdUser(id));
    dispatch(getFavourite());
    requests.viewDacha(id);
  }, []);

  const [rating, setRating] = useState(0);

  const ratingChanged = (newRating) => {
    setRating(newRating);
  };

  const payload = {
    id,
    rating,
  };

  const userIdHome = useSelector((state) => state.userId.userId);
  console.log(userIdHome)

  return (
    <div>
      <HeaderNavbarTop />
      <div className="main">
        <div className="main-content">
          <div className="about-home-title">
            <Title title={userIdHome.name} showButton={true} />
            <div className="swiper about-swiper">
              <Swiper
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={"auto"}
                coverflowEffect={{
                  rotate: 50,
                  stretch: 0,
                  depth: 100,
                  modifier: 1,
                  slideShadows: true,
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination]}
                className="mySwiper about-home-swiper"
              >
                {userIdHome.images?.map((item, idx) => (
                  <SwiperSlide key={idx}>
                    <div className="swiper-img">
                      <img src={`${baseUrl}/${item.image_path}`} alt="" />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <div className="about-home-content">
              <div className="about-home-user-items">
                <img src={UserImg} alt="" />
                <div className="about-home-user-title">
                  <p className="name">{userIdHome.advertiser_name}</p>
                  <p className="tel">{userIdHome.phone}</p>
                </div>
              </div>
              <div className="about-home-category">
                <p className="sanatoriya">{userIdHome.type?.name_uz}</p>
                <p className="price-dacha-day">
                  Ish kunlarida:
                  <span>
                    {userIdHome.cost} {userIdHome.currency}
                  </span>
                </p>
                <p className="price-dacha-month">
                  Dam olish kunlarida:
                  <span>
                    {userIdHome.weekday_cost} {userIdHome.currency}
                  </span>
                </p>
              </div>
            </div>
            <div className="udobstva">
              <p>Qulayliklar</p>
              <div className="about-home-location">
                <img src={Place} alt="" />
                <p>{userIdHome?.category?.name_uz}</p>
              </div>
            </div>
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <MdFavoriteBorder
              size={30}
              onClick={() => dispatch(postFavourite(id))}
            />
            </div>
            <div className="about-home-sleep">
              <div className="about-home-sleep-category">
                <img src={Sleep} alt="" />
                {userIdHome.room_count} room
              </div>
              <div className="about-home-sleep-category">
                <img src={Room} alt="" />
                {userIdHome.bathroom_count} bath-rooms
              </div>
              <div className="about-home-sleep-category">
                <img src={People} alt="" />
                {userIdHome.capacity} people
              </div>
            </div>
            <div
              className="about-category"
              style={{ marginTop: "20px", marginBottom: "20px" }}
            >
              {userIdHome.comforts?.map((item) => (
                <div className="home-category-items">
                  <img src={`${baseUrl}/${item.icon}`} alt="" />
                  <p style={{ marginBottom: 0 }}>{item.name_uz}</p>
                </div>
              ))}
            </div>
            <div className="about-home-input">
              <p>Qo`shimcha ma`lumot</p>
              <div className="about-home-input-title">
                <div className="about-home-textarea">{userIdHome.comment}</div>
                <div className="about-home-reyting">
                  <p>Dachani baholash</p>
                  <ReactStars
                    count={5}
                    onChange={ratingChanged}
                    size={30}
                    activeColor="green"
                  />
                  ,
                  <Button
                    showButton={true}
                    title="Saqlash"
                    padding="5px 80px"
                    onClickButton={() => dispatch(ratingDacha(payload))}
                  />
                </div>
              </div>
            </div>
            <div className="about-premium">
              <Premium />
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default AboutHome;
