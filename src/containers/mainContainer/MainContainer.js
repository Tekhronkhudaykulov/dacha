import React, { useEffect, useState } from "react";
import "../container.scss";
import { Input } from "../../components/Input/SearchInput/SearchInput";
import Premium from "../../components/Cards/Premium/Premium";
import Categories from "../../components/Cards/Categories/Categories";
import Top from "../../components/Cards/TopCards/Top";
import Footer from "../../components/Footer/Footer";
import { useDispatch } from "react-redux";
import { searchDacha } from "../../redux/actions/Dacha/SearchDachaAction";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/Buttons/Header/Buttons";
const MainContainer = () => {
  const [courerFilter, setCourerFilter] = useState({
    name: 689,
    category_id: 28,
    top_rated: 1,
    capacity: 5,
    cost_from: 10000,
    cost_to: 80000000,
    comfort_id: 1,
    comfort_id: 2,
  });
  const navigate = useNavigate();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(searchDacha(courerFilter));
  }, []);

  return (
    <div className="main">
      <div className="main-content">
        <Input
          onKeyDown={({ keyCode }) => {
            if (keyCode === 13) {
              navigate("/searchHome");
            }
          }}
          onClick={() => {
            navigate("/searchHome");
          }}
        />
        <Categories />
        <Premium />
        <Top />
        <div
          className="all-elon"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <Button
            showButton={true}
            title="Barcha e`lonlarni ko`rish"
            width={"350px"}
            height="55px"
            onClickButton={() => navigate("/searchHome")}
          />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default MainContainer;
