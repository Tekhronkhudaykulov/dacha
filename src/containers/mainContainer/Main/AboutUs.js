import React from "react";
import { Title } from "../../../components/Title/Title";
import "./Main.scss";
import HeaderNavbarTop from "../../../components/Navbar/HeaderNavbarTop/HeaderNavbarTop";
import Footer from "../../../components/Footer/Footer";
import "../../../containers/container.scss";
import HelmetReact from "../../../components/Helmet";
const AboutUs = () => {
  return (
    <>
      <HelmetReact name="Dacha Rent.uz" description="Biz haqimizda" />
      <HeaderNavbarTop />
      <div className="main">
        <div className="main-content">
          <div className="about">
            <Title title="Biz haqimizda" showButton={true} margin="0" />
            <p className="about-text">
              DachaTravel.uz – это портал, который представляет собой площадку
              онлайн бронирования гостиниц, санаториев, зон отдыха, коттеджей и
              дач в Узбекистане, а также выбор туров за рубежом и бронирование
              услуг гидов. Наш портал помогает путешественникам и отдыхающим
              найти лучшие номера по выгодной цене. <br /> <br /> На нашем сайте
              Вы найдете место отдыха для себя и своей семьи, гостиницу или
              отель​ для командировок, сможете забронировать номер, в любое
              время из любой точки Узбекистана. Оплатить бронь можно не выходя
              из дома, используя свою кредитную карту. <br />
              <br />
              Damda.Uz позволяет получать информацию о наличии номеров и
              стоимости kпроживания, а также сравнивать цены и выбирать наиболее
              подходящие варианты. Отзывы посетителей помогут Вам определиться с
              выбором оптимального варианта. Информация о ценах и количестве
              номеров доступных для брони через сайт выставляется администрацией
              гостиниц, зон отдыха или санаториев и соответствуют прейскуранту
              объектов. <br /> <br /> Мы также предлагаем Вам воспользоваться
              нашей электронной площадкой для записи на прием к врачу -
              MedPlaza.Uz и посетить интернет-магазин продуктов питания и
              товаров для дома GoMart.uz.
            </p>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default AboutUs;
