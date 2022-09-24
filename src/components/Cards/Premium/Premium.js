import React, { useEffect } from "react";
import { Title } from "../../Title/Title";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Card from "../Cards";
import PremiumImg from "../../../assets/img/premiumImg.png";
import PremiumImg2 from "../../../assets/img/premiumimg2.png";
import PremiumImg1 from "../../../assets/img/premiumImage.png";
import { premiumDacha } from "../../../redux/actions/Dacha/PreimumDachaAction";
import { useDispatch, useSelector } from "react-redux";
import LoadingCard from "../../../element/loadingCard";
import { Link, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Premium = () => {
  const dispatch = useDispatch();
  const { t, i18n } = useTranslation();

  useEffect(() => {
    dispatch(premiumDacha());
  }, []);

  const { premiumList } = useSelector((state) => state.premium);
  const { loading } = useSelector((state) => state.premium);
  return (
    <>
      <Title title={t("premium")} showButton={true} />
      {loading ? (
        <LoadingCard />
      ) : (
        <div style={{ marginBottom: "30px" }}>
          <Swiper
            slidesPerView={3}
            loopFillGroupWithBlank={true}
            loop={true}
            spaceBetween={30}
            breakpoints={{
              769: { slidesPerView: 3 },
              700: { slidesPerView: 2 },
              0: { slidesPerView: 1 },
            }}
            // autoplay={{
            //   delay: 1000,
            //   disableOnInteraction: false,
            // }}
            modules={[Autoplay, Pagination, Navigation]}
            style={{ padding: "30px" }}
            className="mySwiper premium-swiper"
          >
            {premiumList.length > 0 ? (
              premiumList.map((item, ind) => (
                <>
                  <SwiperSlide key={ind}>
                    <Link
                      to={`/aboutHome/` + item.id}
                      key={ind}
                      style={{ color: "black" }}
                    >
                      <Card
                        boxShadow="none"
                        showButton={true}
                        img={PremiumImg1}
                        product={item}
                      />
                    </Link>
                  </SwiperSlide>
                </>
              ))
            ) : (
              <h3 className="h3" style={{ textAlign: "center" }}>
                {t("premiumLoadingTitle")}
              </h3>
            )}
          </Swiper>
        </div>
      )}
    </>
  );
};

export default Premium;
