import React from "react";
import HeaderNavbarTop from "../../Navbar/HeaderNavbarTop/HeaderNavbarTop";
import { Title } from "../../Title/Title";
import { InputValue } from "../../Input/FormInput/Input";
import Footer from "../../Footer/Footer";
import "../../../containers/container.scss";
import "./Rules.scss";
const Rules = () => {
  return (
    <div>
      <HeaderNavbarTop />
      <div className="main">
        <div className="main-content">
          <Title showButton={true} title="Qonun qoidalar" margin="0" />
          <p className="about-text">
            Daсhaonline.uz – это портал, который представляет собой площадку
            онлайн бронирования гостиниц, санаториев, зон отдыха, коттеджей и
            дач в Узбекистане, а также выбор туров за рубежом и бронирование
            услуг гидов. Наш портал помогает путешественникам и отдыхающим найти
            лучшие номера по выгодной цене. <br /> <br /> На нашем сайте Вы
            найдете место отдыха для себя и своей семьи, гостиницу или отель​
            для командировок, сможете забронировать номер, в любое время из
            любой точки Узбекистана. Оплатить бронь можно не выходя из дома,
            используя свою кредитную карту. <br />
            <br />
            Damda.Uz позволяет получать информацию о наличии номеров и стоимости
            kпроживания, а также сравнивать цены и выбирать наиболее подходящие
            варианты. Отзывы посетителей помогут Вам определиться с выбором
            оптимального варианта. Информация о ценах и количестве номеров
            доступных для брони через сайт выставляется администрацией гостиниц,
            зон отдыха или санаториев и соответствуют прейскуранту объектов.{" "}
            <br /> <br /> Мы также предлагаем Вам воспользоваться нашей
            электронной площадкой для записи на прием к врачу - MedPlaza.Uz и
            посетить интернет-магазин продуктов питания и товаров для дома
            GoMart.uz.
          </p>
          <Title showButton={true} title="Qo`shimcha xizmatlar" />
          <p className="about-text">
            Daсhaonline.uz – это портал, который представляет собой площадку
            онлайн бронирования гостиниц, санаториев, зон отдыха, коттеджей и
            дач в Узбекистане, а также выбор туров за рубежом и бронирование
            услуг гидов. Наш портал помогает путешественникам и отдыхающим найти
            лучшие номера по выгодной цене.
          </p>
          <p className="admin">Admin bilan aloqa</p>
          <div className="admin-item">
            <InputValue
              margin="30px 0"
              width="400px"
              inputValue="Tel nomer"
              type="number"
            />
            <InputValue
              margin="0"
              width="400px"
              height="150px"
              inputValue="Izoh"
            />
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Rules;
