import React from "react";
import Footer from "../../../components/Footer/Footer";
import HeaderNavbarTop from "../../../components/Navbar/HeaderNavbarTop/HeaderNavbarTop";
import { Title } from "../../../components/Title/Title";
import "../../container.scss";
const Use = () => {
  return (
    <>
      <HeaderNavbarTop />
      <div className="main">
        <div className="main-content">
          <div className="about">
            <Title title="Foydalanish shartlari" showButton={true} margin="0" />
            <p className="about-text">
              DachaRent.uz veb-saytida joylashtirilgan dachalarda turar joy va
              turar joyning qoidalari!1. Mehmon tomonidan bron qilish uchun
              kerakli ma'lumotlar va joylashish uchun kerak bo'ladigan shaxsiy
              ma'lumotlar mehmon so'ragan qo'shimcha xizmatlarni taqdim etish,
              shuningdek, yozgi uylar mehmonlari ro'yxatiga kiritish uchun
              ishlatiladi. Bundan tashqari, mehmonlar ma'lumotlari marketing
              so'rovlari, so'rovnomalarni yuborish va statistik tadqiqotlar
              uchun ishlatilishi mumkin. Dacha Rent, shuningdek, keyingi
              tashriflarda xizmat ko'rsatish sifatini yaxshilash uchun
              mehmonlarning afzalliklarini qayd etishi mumkin. Saytda
              ko'rsatilgan barcha kottejlar mehmonlarning vaqtinchalik
              yashashlari uchun mo'ljallangan. Yashash tartibi dachalarning
              egasi tomonidan belgilanadi. 2. Mehmon uylari xizmatlari kechayu
              kunduz amalga oshiriladi. 3. Kirish uchun ro'yxatdan o'tish vaqti
              – 19:00. 4. Chiqish vaqti – 17:00. 5. Mehmon uylariga joylashish
              uchun pasport/tug'ilganlik haqidagi guvohnoma majburiydir (pasport
              O‘zbekiston Respublikasi fuqarosi; tug'ilganlik haqidagi guvohnoma
              (16 yoshgacha bo'lganlar uchun), fuqaroligi bo'lmagan shaxs uchun
              vaqtinchalik yashash ruxsatnomasi, fuqaroligi bo'lmagan shaxsning
              yashash joyi guvohnomasi, (chet el fuqarosi pasporti). Ushbu
              hujjatlardan boshqa hech qanday hujjat talab qilinmaydi. 6. Mehmon
              uyi egasi O‘zbekiston Respublikasiga kelgan chet el fuqarosini
              mehmon uyiga ro‘yxatdan o‘tkazishda, hududiy IIB migrasiya bo’limi
              tomonidan toqdim etilgan migratsiya varaqasi va amaldagi vizasi
              bo'lmagan taqdirda, mehmon uyiga kirishni rad etishga haqli. 7. 18
              yoshgacha bo'lgan voyaga yetmaganlar faqat kattalar hamrohligida
              (ota-onalar, vasiylar, boqib oluvchilar, yaqin qarindoshlar,
              bolalar guruhi rahbarlari kabi) mehmon uylariga joylashtirilishi
              mumkin. Ketish kuni siz mehmon uyini soat 17:00 dan oldin
              bo'shatib, ko'rsatilgan xizmatlar uchun to'liq hajmda to'lovni
              amalga oshirishingiz kerak. 8. Turar joy va boshqa xizmatlar uchun
              to‘lov narxlari dacha ro‘yxati bo‘yicha amalga oshiriladi. Mehmon
              uyi narxlari uning egalari tomonidan belgilanadi va mavsumga qarab
              o'zgarishi mumkin. 9. Bank kartasi bilan bron qilingan va to'lov
              amalga oshirilgan taqdirda mehmon bekor qilishga kech qolsa,
              to'lov bir kunlik turar joy uchun ushlab qolinadi. 10. Agar
              jarimasiz bekor qilish ma'lum bir bron qilish qoidalarida nazarda
              tutilgan bo'lsa, jarima olib qolinmaydi. Hurmatli mehmonlar,
              mehmon uylarining belgilangan tartib-qoidalariga rioya
              qilishingizni so'raymiz:• Iltimos, mehmon uylarining boshqa
              mehmonlariga xalaqit bermang; • Soat 09:00 dan oldin va 22:00 dan
              keyin televizor baland ovozli qurilmalardan past holda
              foydalaning; • Yong'in xavfsizligi qoidalariga rioya qiling; •
              Iltimos, sizga ko'rsatilgan barcha xizmatlar uchun to'lovni to'liq
              amalga oshiring; • Har bir mehmon uyida joylashgan
              qo'llanmalardagi mehmon uylari uchun xavfsizlik qoidalari bilan
              tanishib chiqing; • Mehmon uyidan chiqayotganingizda, barcha suv
              tizimlari yopilgan va elektr jihozlari o'chirilganligiga ishonch
              hosil qiling; • Mehmon uylarining mulkiga zarar yetkazilgan
              taqdirda, iltimos ushbu zararni to'liq va rasmiy ravishda qoplang;
              • Xonada evakuatsiya yo'llarini to'sib qo'yadigan katta hajmli
              narsalarni saqlamang (zararli kimyoviy, radioaktiv va yonuvchan
              moddalar); • Mehmon uylari mehmon tomonidan qoldirilgan qimmatbaho
              buyumlarning saqlanishini ta'minlash uchun javobgar emas!!!
            </p>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Use;
