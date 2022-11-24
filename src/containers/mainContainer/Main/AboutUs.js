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
              DachaRent.uz portali – O‘zbekistondagi eng zamonaviy dam olish
              uylari, dam olish maskanlari, kottejlar, yozgi va qishgi uylarni
              onlayn bron qilish platformasi. Portalimiz sayohatchilar va dam
              oluvchilarga eng yaxshi narxlarda eng yaxshi yozgi va qishgi dam
              olish uylarini topishda yaqindan ko’mak beradi. Sahifamizda siz
              o'zingiz va oilangiz uchun eng zamonaviy Hi-Tech uslubidagi
              zamonaviy uylardan tortib klassik uylargacha topashingiz mumkin.
              O'zbekistonning istalgan nuqtasidan istalgan vaqtda dam olish
              uylarini bron qilishingiz mumkin. Plastik kartangiz yordamida
              uydan chiqmagan holda bron qilish imkoniyati (sayt ma’muriyati
              faqat o’ziga qabul qilingan to’lovlar uchun javobgarlikni
              zimmasiga oladi!). DachaRent.uz sizga yozgi uylarning keng
              tanlovlari va yashash narxlari haqida ma'lumot olish, shuningdek
              narxlarni solishtirish va o'zingizga maqul kelgan dam olish
              uylarini tanlash imkoniyatini beradi. Mehmonlarning sharhlari
              sizga eng yaxshi dam olish uylarini tanlashga yordam beradi. Undan
              tashqari tanlov ko'pligi sababli tanlashda qiynalsangiz
              konsultantlarimiz bilan bog'laning, ular sizning hohishingizga mos
              ravishda mavsumiy dam olish uylarini tavsiya qiladi. Har bir yozgi
              uylarda maroqli hordiq chiqarishingiz uchun kerakli bo'lgan barcha
              sharoyitlar mavjud: keng va yorug' xonalar, qishki va yozgi
              basseynlar, ko'ngilochar mashg'ulotlar uchun barcha jihozlar,
              qishki va yozgi oshxona va hokazolar.
            </p>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default AboutUs;
