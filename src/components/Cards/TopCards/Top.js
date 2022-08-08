import React, { useEffect } from "react";
import { Title } from "../../Title/Title";
import "../cards.scss";
import { useDispatch, useSelector } from "react-redux";
import { topCard } from "../../../redux/actions/Card/TopCardActions";
import { Link } from "react-router-dom";
import CardTop from "./TopCardComponent";
import LoadingCard from "../../../element/loadingCard";

const Top = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(topCard());
  }, []);
  const topCardList = useSelector((state) => state.topCard.topList);
  const { loading } = useSelector((state) => state.topCard);

  return (
    <div>
      <Title title="Top e`lonlar" showButton={true} />
      {loading ? (
        <LoadingCard />
      ) : (
        <div className="allTopCard">
        {topCardList.length > 0 ? 
          topCardList.slice(0, 5).map((product, index) => (
            <Link
              to={`/aboutHome/` + product.id}
              key={index}
              style={{ color: "black" }}
            >
              <CardTop product={product} />
            </Link>
          )) 
          :  
            <h2 style={{textAlign: "center"}}>Top e`lonlar yo`q!</h2>
          }
        </div>
      )}
    </div>
  );
};

export default Top;
