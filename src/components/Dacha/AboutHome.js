import React, { useEffect } from "react";
import ReactStars from "react-rating-stars-component";
import HeaderNavbarTop from "../Navbar/HeaderNavbarTop/HeaderNavbarTop";
import { Title } from "../Title/Title";
import "./Search.scss";
import Succes from "../../assets/img/succes.png";
// import UserImg from "../../assets/img/Ellipse 4.png";
import Place from "../../assets/img/place.png";
import Sleep from "../../assets/img/sleep.png";
import Room from "../../assets/img/people.png";
import People from "../../assets/img/peple.png";
import { Button } from "../Buttons/Header/Buttons";
import Premium from "../Cards/Premium/Premium";
import Footer from "../Footer/Footer";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchIdUser } from "../../redux/actions/user/HomeIdAction";
import requests from "../../helpers/requests";
import { baseUrl } from "../../helpers/requests";
import { MdFavoriteBorder, MdOutlineFavorite } from "react-icons/md";
import { useState } from "react";
import { ratingDacha } from "../../redux/actions/Dacha/RatingDachaAction";
import ProfileImg from "../../assets/img/profilImg.jpeg";
import { useTranslation } from "react-i18next";
import {
  deleteFavourite,
  getFavourite,
} from "../../redux/actions/Card/FavouriteAction";
import ImageGallery from "react-image-gallery";
import { Navigation, Pagination, Scrollbar, A11y, Lazy } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/lazy";
import "react-image-gallery/styles/scss/image-gallery.scss";
import HelmetReact from "../Helmet";

const AboutHome = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const { t, i18n } = useTranslation();

  const navigate = useNavigate();

  const postFavourite = (id) => (dispatch) => {
    dispatch({ type: "favourite_post_start", payload: id });
    requests
      .postFavourite(id)
      .then(({ data }) => {
        dispatch({ type: "favourite_post_success", payload: data });
        alert("Bahonlangan ro`yhatiga qo`shildi!");
      })
      .catch(({ response }) => {
        let message = (response && response.data.message) || "Login error";
        dispatch({ type: "favourite_post_error", payload: message });
        alert("Iltimos ro`yhatdan o`ting!");
        navigate("/login");
      });
  };

  const { favouriteList } = useSelector((state) => state.favourite);
  const favouriteId = favouriteList.map((item) => item.id);
  const { loading } = useSelector((state) => state.favourite);

  const [isFavourite, setIsFavourite] = useState(false);

  useEffect(() => {
    dispatch(fetchIdUser(id));
    dispatch(getFavourite());
    requests.viewDacha(id);
  }, []);

  useEffect(() => {
    if (favouriteId.includes(+id)) {
      setIsFavourite(true);
    }
  }, [favouriteId, favouriteList]);
  const [rating, setRating] = useState(0);

  const ratingChanged = (newRating) => {
    setRating(newRating);
  };

  const payload = {
    id,
    rating,
  };
  const userIdHome = useSelector((state) => state.userId.userId);
  console.log(userIdHome);

  return (
    <div>
      <HelmetReact name={userIdHome.name} description={userIdHome.comment} />
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
                modules={[Pagination]}
                className="mySwiper"
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
                {userIdHome.owner?.image === null ? (
                  <img src={ProfileImg} alt="" />
                ) : (
                  <img src={`${baseUrl}/${userIdHome.owner?.image}`} alt="" />
                )}
                <div className="about-home-user-title">
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <p className="name" style={{ marginTop: "0px" }}>
                      {userIdHome.advertiser_name}
                    </p>
                    {userIdHome.owner?.role_id === 2 && (
                      <img
                        style={{ width: "30px", height: "30px" }}
                        src={Succes}
                        alt=""
                      />
                    )}
                  </div>
                  <p className="tel">{userIdHome.phone}</p>
                </div>
              </div>
              <div className="about-home-category">
                <p className="sanatoriya">
                  {i18n.language == "uz"
                    ? userIdHome.type?.name_uz
                    : userIdHome.type?.name_ru}
                </p>
                {userIdHome.type?.id === 4 ? (
                  <p className="price-dacha-day">
                    {t("Price")}:
                    <span>
                      {userIdHome.cost} {userIdHome.currency}
                    </span>
                  </p>
                ) : (
                  <>
                    <p className="price-dacha-day">
                      {t("IshKunlarida")}:
                      <span>
                        {userIdHome.cost} {userIdHome.currency}
                      </span>
                    </p>
                    <p className="price-dacha-month">
                      {t("DamOlishKunlarida")}:
                      <span>
                        {userIdHome.weekday_cost} {userIdHome.currency}
                      </span>
                    </p>
                  </>
                )}
              </div>
            </div>
            <div className="udobstva">
              <p>{t("Qulayliklar")}</p>
              <div className="about-home-location">
                <img src={Place} alt="" />
                <p>{userIdHome?.category?.name_uz}</p>
              </div>
            </div>
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              {isFavourite === true ? (
                <MdOutlineFavorite
                  onClick={() => {
                    dispatch(deleteFavourite(id));
                    setIsFavourite(false);
                  }}
                  size={30}
                />
              ) : (
                <MdFavoriteBorder
                  size={30}
                  onClick={() => {
                    dispatch(postFavourite(id));
                    setIsFavourite(true);
                  }}
                />
              )}
            </div>
            <div className="about-home-sleep">
              <div className="about-home-sleep-category">
                <img src={Sleep} alt="" />
                <p>
                  {userIdHome.room_count} <span>{t("room")}</span>
                </p>
              </div>
              <div className="about-home-sleep-category">
                <img src={Room} alt="" />
                <p>
                  {userIdHome.bathroom_count} <span>{t("bathRooms")}</span>
                </p>
              </div>
              <div className="about-home-sleep-category">
                <img src={People} alt="" />
                <p>
                  {userIdHome.capacity} <span>{t("people")}</span>
                </p>
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
              <p>{t("QoshimchaMalumot")}</p>
              <div className="about-home-input-title">
                <div className="about-home-textarea">{userIdHome.comment}</div>
                <div className="about-home-reyting">
                  <p style={{ marginBottom: "0" }}>{t("DachaniBaholash")}</p>
                  <ReactStars
                    count={5}
                    onChange={ratingChanged}
                    size={30}
                    activeColor="green"
                    classNames="stars"
                  />
                  <Button
                    showButton={true}
                    title={t("Saqlash")}
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
