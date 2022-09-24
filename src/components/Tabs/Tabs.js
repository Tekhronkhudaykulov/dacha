import React, { useState, useEffect } from "react";
import { Button } from "../Buttons/Header/Buttons";
import TabButton from "../Buttons/TabButton/TabButton";
import LongCards from "../Cards/LongCards";
import { useDispatch, useSelector } from "react-redux";
import CardTop from "../Cards/TopCards/TopCardComponent";
import "./Tabs.scss";
import LoadingCard from "../../element/loadingCard";
import { Link, useSearchParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { searchDacha } from "../../redux/actions/Dacha/SearchDachaAction";

const Tabs = ({ type_id, typeId }) => {
  const typeList = useSelector((state) => state.typeList.dachaTypeList);

  const { t, i18n } = useTranslation();

  const [active, setActiveButton] = useState("button1");

  const search = useSelector((state) => state.search.searchList);
  const searchListAll = useSelector((state) => state.search.searchListAll);
  const pageCount = Math.ceil(searchListAll.total / searchListAll.per_page);

  const { loading } = useSelector((state) => state.search);

  const [slice, setSlice] = useState(6);

  const dispatch = useDispatch();
  let [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    dispatch(searchDacha(searchParams));
  }, []);
  // const pageCount = search.total / search.per_page;
  return (
    <>
      <div className="tab-content">
        <p className="search-result">Qidiruv natijasi ({search.length})</p>
        <div className="tabs-div">
          {typeList.map((item) => (
            <TabButton
              isActive={type_id == item.id}
              title={item}
              onClick={() => {
                dispatch(searchDacha(item.id));
                setSearchParams({
                  type_id: item.id,
                });
              }}
            />
          ))}
        </div>
        <div className="tabs-icon">
          <div
            className={active === "button1" ? "  active_button" : ""}
            onClick={() => setActiveButton("button1")}
          >
            <i className="_icon-kubik"></i>
          </div>
          <div
            className={active === "button" ? " active_button" : ""}
            onClick={() => setActiveButton("button")}
          >
            <i className="_icon-two-lines"></i>
          </div>
        </div>
      </div>
      {loading ? (
        <LoadingCard />
      ) : (
        <div className={active === "button1" ? "allTopCard" : "active-tab"}>
          {search.length == 0 ? (
            <p className="tab-error">{t("searchDachaTitle")}</p>
          ) : (
            search.slice(0, slice).map((item, key) =>
              active === "button1" ? (
                <Link
                  to={`/aboutHome/` + item.id}
                  key={key}
                  style={{ color: "black" }}
                >
                  <CardTop
                    showButton={true}
                    margin="20px 10px"
                    product={item}
                  />
                </Link>
              ) : (
                <Link
                  to={`/aboutHome/` + item.id}
                  key={key}
                  style={{ color: "black" }}
                >
                  <LongCards product={item} />
                </Link>
              )
            )
          )}
        </div>
      )}
      {search.length !== slice ? (
        <div
          className="all-elon"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <Button
            showButton={true}
            title={t("BarchaElonlarnikKorish")}
            width={"350px"}
            height="55px"
            onClickButton={() => setSlice(search.length)}
          />
        </div>
      ) : (
        ""
      )}
      {/* {pageCount.length === 1 ? ( */}
      {/* <ReactPaginate
        nextLabel=">"
        previousLabel="<"
        previousLinkClassName="exit"
        pageRangeDisplayed={3}
        pageCount={pageCount}
        renderOnZeroPageCount={null}
        containerClassName="pagination"
        pageLinkClassName="page-num"
        nextLinkClassName="page-num"
        activeLinkClassName="active"
      /> */}
      {/* ) : ( */}
      {/* <ReactPaginate
          // onPageChange={handlePageClick}
          nextLabel=""
          previousLabel=""
          pageRangeDisplayed={3}
          pageCount={pageCount}
          containerClassName="pagination"
          pageLinkClassName="page-num"
          nextLinkClassName="page-num"
          activeLinkClassName="active"
        /> */}
      {/* )} */}
    </>
  );
};

export default Tabs;
