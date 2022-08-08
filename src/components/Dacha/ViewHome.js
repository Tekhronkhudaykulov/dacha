import React from "react";
import HeaderNavbarTop from "../Navbar/HeaderNavbarTop/HeaderNavbarTop";
import { Title } from "../Title/Title";
import ViewHomeImg from "../../assets/img/aboutDachaImg.png";
import Card from "../Cards/Cards";
import Footer from "../Footer/Footer";
const ViewHome = () => {
  return (
    <div>
      <HeaderNavbarTop />
      <div className="main">
        <div className="main-content">
          <div className="view-home-content">
            <Title showButton={true} title="Bildirsoy" />
            <div className="view-home-item">
              <img src={ViewHomeImg} alt="" />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc,
                faucibus accumsan pulvinar ultrices eget. Lectus eu pellentesque
                sed et, praesent amet arcu nisi dignissim. Id gravida viverra
                ultrices ornare pretium sapien, tempus eget. Consectetur neque
                sit pulvinar elit risus, sed. Elementum cursus cras orci et.
                Odio feugiat eu ac sed amet fames integer.Proin elit leo
                et lacinia gravida nec. Tortor tellus pulvinar interdum mauris
                nec amet, sapien sollicitudin. Est ac faucibus in non quis
                sapien facilisis proina.
              </p>
            </div>
            <Title showButton={true} title="E`lonlar" />
            <div className="allTopCard">
              <Card
                showButton={true}
                border="2px solid white"
                background="#E5E5E5"
                pre="TOP"
              />
              <Card
                showButton={true}
                border="2px solid white"
                background="#E5E5E5"
                pre="TOP"
              />
              <Card
                showButton={true}
                border="2px solid white"
                background="#E5E5E5"
                pre="TOP"
              />
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default ViewHome;
