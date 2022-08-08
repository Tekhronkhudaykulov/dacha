import React, { useEffect } from "react";
import { Title } from "../../Title/Title";
import CategoriesCard from "./CategoriesCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useDispatch, useSelector } from "react-redux";
import { dachaTypeList } from "../../../redux/actions/Dacha/DachaTypeListAction";
import { useNavigate } from "react-router-dom";
import LoadingCard from "../../../element/loadingCard";
const Categories = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(dachaTypeList());
  }, []);

  const type = useSelector((state) => state.typeList.dachaTypeList);
  const { loading } = useSelector((state) => state.typeList);

  const navigate = useNavigate();

  const navigateSearch = (id) => {
    navigate(`/searchHome?type_id=${id}`);
  };

  return (
    <div>
      <Title showButton={true} />
      {loading ? (
        <LoadingCard />
      ) : (
        <Swiper
          slidesPerView={3}
          breakpoints={{
            769:
            {slidesPerView : 3},
            700:
            {slidesPerView : 2},
            0:
            {slidesPerView : 1}
          }}
          loopFillGroupWithBlank={true}
          loop={true}
          // autoplay={{
          //   delay: 1000,
          //   disableOnInteraction: false,
          // }}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {type.map((item, key) => (
            <SwiperSlide key={key}>
              <CategoriesCard
                item={item}
                onClick={() => navigateSearch(item.id)}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  );
};

export default Categories;
