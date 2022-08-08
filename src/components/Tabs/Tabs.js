import React, { useState, useEffect } from "react";
import axios from "axios";
import ReactPaginate from "react-paginate";
import TabButton from "../Buttons/TabButton/TabButton";
import LongCards from "../Cards/LongCards";
import { useSelector } from "react-redux";
import CardTop from "../Cards/TopCards/TopCardComponent";
import "./Tabs.scss";
import LoadingCard from "../../element/loadingCard";
import { Link } from "react-router-dom";

const Tabs = ({ type_id, typeId }) => {
  const typeList = useSelector((state) => state.typeList.dachaTypeList);

  const [active, setActiveButton] = useState("button");

  const search = useSelector((state) => state.search.searchList);
  const searchListAll = useSelector((state) => state.search.searchListAll);
  const pageCount = Math.ceil(searchListAll.total / searchListAll.per_page);

  const { loading } = useSelector((state) => state.search);

  // const pageCount = search.total / search.per_page;
  return (
    <>
      <div className="tab-content">
        <p className="search-result">Qidiruv natijasi ({search.length})</p>
        <div className="tabs-div">
        {typeList.map((item) => (
          <TabButton
            isActive={type_id == item.id}
            title={item.name_ru}
            onClick={() => typeId(item.id)}
          />
        ))}
        </div>
        <div className="tabs-icon">
          <div
            className={active === "button" ? " active_button" : ""}
            onClick={() => setActiveButton("button")}
          >
            <i className="_icon-two-lines"></i>
          </div>
          <div
            className={active === "button1" ? "  active_button" : ""}
            onClick={() => setActiveButton("button1")}
          >
            <i className="_icon-kubik"></i>
          </div>
        </div>
      </div>
      {loading ? (
        <LoadingCard />
      ) : (
        <div className={active === "button1" ? "allTopCard" : "active-tab"}>
          {search.length == 0 ? (
            <p className="tab-error">Hech narsa topilmadi!</p>
          ) : (
            search.map((item, key) =>
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
      {pageCount.length === 1 ? (
        <ReactPaginate
          nextLabel=">"
          previousLabel="<"
          previousLinkClassName="exit"
          // onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          pageCount={pageCount}
          renderOnZeroPageCount={null}
          containerClassName="pagination"
          pageLinkClassName="page-num"
          nextLinkClassName="page-num"
          activeLinkClassName="active"
        />
      ) : (
        <ReactPaginate
          // onPageChange={handlePageClick}
          nextLabel=""
          previousLabel=""
          pageRangeDisplayed={3}
          pageCount={pageCount}
          containerClassName="pagination"
          pageLinkClassName="page-num"
          nextLinkClassName="page-num"
          activeLinkClassName="active"
        />
      )}
    </>
  );
};

export default Tabs;
