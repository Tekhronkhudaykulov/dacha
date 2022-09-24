import React, { useEffect, useState } from "react";
import "../container.scss";
import requests from "../../helpers/requests";
import Premium from "../../components/Cards/Premium/Premium";
import Categories from "../../components/Cards/Categories/Categories";
import Top from "../../components/Cards/TopCards/Top";
import Footer from "../../components/Footer/Footer";
import Groups from "../../assets/icon/groups.png";
import Money from "../../assets/icon/attach_money.png";
import SearchSelect from "../../components/Input/SearchInput/SearchSelect";
import { SearchInput } from "../../components/Input/SearchInput/SearchInput";
import { useDispatch } from "react-redux";
import { AiOutlineSearch } from "react-icons/ai";
import {
  createSearchParams,
  useLocation,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
// import { Button } from "../../components/Buttons/Header/Buttons";
import Button from "react-bootstrap/Button";
import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { dachaCategory } from "../../redux/actions/Dacha/DachaCategoryAction";
import { Link } from "react-router-dom";
import CardTop from "../../components/Cards/TopCards/TopCardComponent";
import LoadingCard from "../../element/loadingCard";
import { useTranslation } from "react-i18next";

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

  const { t, i18n } = useTranslation();

  let [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    dispatch(searchDacha(courerFilter));
    dispatch(dachaCategory());
  }, []);

  const category = useSelector((state) => state.categoryDacha.dachaCategory);

  const [typeId, setTypeId] = useState(null);

  const [comfordIds, setComfordIds] = useState([]);
  const [category_id, setCategory_id] = useState([]);

  const { register, handleSubmit, watch } = useForm({
    defaultValues: searchParams,
  });

  const searchDacha = (params) => (dispatch) => {
    dispatch({ type: "search_dacha_start", payload: params });
    requests
      .searchDacha(params)
      .then(({ data }) => {
        dispatch({ type: "search_dacha_success", payload: data });
        navigate({
          pathname: "/searchHome",
          search: `?${createSearchParams(params)}`,
        });
      })
      .catch(({ response }) => {
        let message = (response && response.data.message) || "Login error";
        dispatch({ type: "search_dacha_error", payload: message });
      });
  };

  const onSubmit = (data) => {
    setSearchParams({
      ...data,
      comfort_id: comfordIds,
      category_id: category_id,
      type_id: typeId,
    });
    dispatch(
      searchDacha({
        ...data,
        comfort_id: comfordIds,
        type_id: searchParams.type_id,
        category_id: category_id,
        type_id: typeId,
      })
    );
  };

  const location = useLocation();

  return (
    <div className="main">
      <div className="main-content">
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* <Input formProps={register("name")} /> */}
          <div className="input-flex">
            <SearchSelect
              category={category}
              onChange={(e) => setCategory_id(e.target.value)}
              inputP="input-p"
            />
            <SearchInput
              inputName={t("OdamlarSoni")}
              inputTwo="newClass"
              inputP="input-p"
              inputImg={Groups}
              inputPlaceholder="12"
              inputType="number"
              width="265px"
              formValue={register("capacity")}
            />
            <SearchInput
              inputName={t("NarxKamida")}
              inputImg={Money}
              inputTwo="newClass"
              inputP="input-p"
              inputPlaceholder="1,000,000"
              inputType="number"
              width="265px"
              formValue={register("cost_from")}
            />
            <SearchInput
              inputName={t("NarxKopi")}
              inputImg={Money}
              inputTwo="newClass"
              inputP="input-p"
              inputPlaceholder="2,000,000"
              inputType="number"
              width="265px"
              formValue={register("cost_to")}
            />
            <div className="div">
              <Button
                variant="success"
                type="submit"
                style={{ marginTop: "auto", height: "55px", width: "55px" }}
              >
                <AiOutlineSearch size={30} />
              </Button>
            </div>
          </div>
        </form>
        <Categories />
        <Premium />
        <Top />
        <Footer />
      </div>
    </div>
  );
};

export default MainContainer;
