import React, { useEffect, useState } from "react";
import { Title } from "../../Title/Title";
import "../cards.scss";
import { useDispatch, useSelector } from "react-redux";
import { topCard } from "../../../redux/actions/Card/TopCardActions";
import { Link } from "react-router-dom";
import CardTop from "./TopCardComponent";
import LoadingCard from "../../../element/loadingCard";
import { Button } from "../../Buttons/Header/Buttons";
import { useTranslation } from "react-i18next";

const Top = () => {
  const dispatch = useDispatch();
  const { t, i18n } = useTranslation();

  const [slice, setSlice] = useState(6);

  useEffect(() => {
    dispatch(topCard());
  }, []);
  const topCardList = useSelector((state) => state.topCard.topList);
  const { loading } = useSelector((state) => state.topCard);

  return (
    <div>
      <Title title={t("top")} showButton={true} />
      {loading ? (
        <LoadingCard />
      ) : (
        <>
          {topCardList.length == 0 && (
            <h3 style={{ textAlign: "center" }}>{t("topLoadingTitle")}</h3>
          )}
          <div className="allTopCard">
            {topCardList.length > 0 &&
              topCardList.slice(0, slice).map((product, index) => (
                <Link
                  to={`/aboutHome/` + product.id}
                  key={index}
                  style={{ color: "black" }}
                >
                  <CardTop product={product} />
                </Link>
              ))}
          </div>
        </>
      )}
      {topCardList.length !== slice ? (
        <div
          className="all-elon"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <Button
            showButton={true}
            title={t("BarchaElonlarnikKorish")}
            width={"350px"}
            height="55px"
            onClickButton={() => setSlice(topCardList.length)}
          />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Top;
