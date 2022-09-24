import React, { useEffect, useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import requests from "../../helpers/requests";
import * as yup from "yup";
import HeaderNavbarTop from "../../components/Navbar/HeaderNavbarTop/HeaderNavbarTop";
import { Title } from "../Title/Title";
import { InputValue } from "../Input/FormInput/Input";
import Select from "./Select";
import "./Search.scss";
import Footer from "../Footer/Footer";
import { Button } from "../Buttons/Header/Buttons";
import ImgInput from "../Input/ImgInput/ImgInput";
import { useDispatch, useSelector } from "react-redux";
import { dachaCategory } from "../../redux/actions/Dacha/DachaCategoryAction";
import { dachaTypeList } from "../../redux/actions/Dacha/DachaTypeListAction";
import { comfortItem } from "../../redux/actions/Dacha/CompoftsAction";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { fetchIdUser } from "../../redux/actions/user/HomeIdAction";
import { AddModal } from "../Modal/Modal";
import { dachaUpdate } from "../../redux/actions/Dacha/DachaCreateAction";
import { SearchChecbox } from "../Input/SearchInput/SearchInput";
import { useTranslation } from "react-i18next";

const schema = yup
  .object({
    name: yup.string().required(),
    category_id: yup.number().positive().integer().required(),
    room_count: yup.number().required(),
    capacity: yup.number().required(),
    bathroom_count: yup.number().required(),
    comment: yup.string().required(),
    advertiser_name: yup.string().required(),
    phone: yup.number().required(),
    cost: yup.number().required(),
    weekday_cost: yup.number().required(),
  })
  .required();

const AddHome = () => {
  const [active, setActive] = useState("");
  const [hover, setHover] = useState(null);

  const [modalDelete, setModalDelete] = useState(false);

  const [activeButton, setActiveButton] = useState("");
  const { id } = useParams();

  const { t, i18n } = useTranslation();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(dachaCategory());
    dispatch(dachaTypeList());
    dispatch(comfortItem());
    dispatch(fetchIdUser(id));
  }, []);
  const { loading } = useSelector((state) => state.addHome);

  const data = useSelector((state) => state.userId.userId);

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    if (data) {
      Object.entries(data).map((item) => ({
        [item[0]]: item[1],
      }));
      reset(data);
      console.log(data);
    }
  }, [data]);

  const navigate = useNavigate();

  const category = useSelector((state) => state.categoryDacha.dachaCategory);
  const type = useSelector((state) => state.typeList.dachaTypeList);
  const { comfortsList } = useSelector((state) => state.comforts);

  const onSubmit = (data) => {
    const payload = {
      ...data,
      type_id,
      comforts,
      image_path: images.map((item) => item.originFileObj),
      currency,
    };
    dispatch(dachaUpdate({ ...payload, _method: "PUT" }));
  };

  const dachaUpdate = (params) => (dispatch) => {
    dispatch({ type: "dacha_update_start", payload: params });
    requests
      .dachaUpdate(params)
      .then(({ data }) => {
        dispatch({
          type: "dacha_update_success",
          payload: data,
          _method: "PUT",
        });
        navigate("/user");
        alert("Dacha o`zgartirildi !");
      })
      .catch(({ response }) => {
        let message = (response && response.data.message) || "Login error";
        dispatch({ type: "dacha_update_error", payload: message });
        navigate("/renameHome");
        alert("Dacha o`zgartirishda hatolik bor!");
      });
  };

  const [type_id, setTypeId] = useState(1);
  const [comforts, setComforts] = useState([]);
  const [images, setImages] = useState([]);
  const [currency, setCurrency] = useState("uzs");

  return (
    <div>
      <HeaderNavbarTop />
      <div className="main">
        <div className="main-content">
          <Title showButton={true} title={t("DachaniOzgartirish")} margin="0" />
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="home-input">
              <InputValue
                inputValue={t("SarlavhaniKiriting")}
                placeholder="Masalan, Dacha sotiladi"
                widghtInput="250px"
                type="text"
                margin="0"
                formProps={register("name", { required: true })}
                plusClass={`${errors.name && "validation"}`}
              />
              <Select
                category={category}
                formProps={register("category_id", {
                  required: true,
                })}
                plusClass={`${errors.category_id && "validation"}`}
              />
            </div>
            <div className="add-home-button">
              {type.map((item, key) => (
                <>
                  <button
                    key={key}
                    onClick={() => setTypeId(item.id)}
                    className={data.type.id == item.id && "active-button"}
                    type="button"
                  >
                    {i18n.language == "uz" ? item.name_uz : item.name_ru}
                  </button>
                </>
              ))}
            </div>
            <div className="all-add-input">
              <p className="filter">{t("Filterlar")}</p>
              <div className="add-input">
                <div className="add-input-item">
                  <p className="count">{t("bathRooms")}</p>
                  <input
                    type="number"
                    {...register("room_count")}
                    className={`${errors.room_count && "validation"}`}
                  />
                </div>

                <div className="add-input-item">
                  <p className="count">{t("people")}</p>
                  <input
                    type="number"
                    {...register("capacity")}
                    className={`${errors.capacity && "validation"}`}
                  />
                </div>
                <div className="add-input-item">
                  <p className="count">{t("room")}</p>
                  <input
                    type="number"
                    {...register("bathroom_count")}
                    className={`${errors.bathroom_count && "validation"}`}
                  />
                </div>
              </div>
            </div>
            <div
              className="all-category"
              style={{
                display: "flex",
                marginLeft: "80px",
                justifyContent: "space-around",
              }}
            >
              {/* {category.map((item) => (
            <p>{item.name_uz}</p>
          ))} */}
            </div>
            <div className="home-category">
              {comfortsList.map((item) => (
                <div className="home-category-items">
                  {/* <img src={`${baseUrl}/${item.icon}`} alt="" />
                <p
                  onClick={() => {
                    if (comforts.includes(item.id)) {
                      setComforts((prevState) =>
                        prevState.filter((id) => id != item.id)
                      );
                    } else {
                      setComforts([...comforts, item.id]);
                    }
                  }}
                >
                  {item.name_uz}
                </p> */}
                  <SearchChecbox
                    label={item.id}
                    id={item.id}
                    title={item.name_uz}
                    onChange={(isChecked) => {
                      if (comforts.includes(item.id)) {
                        setComforts((prevState) =>
                          prevState.filter((id) => id != item.id)
                        );
                      } else {
                        setComforts([...comforts, item.id]);
                      }
                    }}
                  />
                </div>
              ))}
            </div>
            <ImgInput setImages={setImages} images={images} />
            <div className="obshi" style={{ marginTop: "50px" }}>
              <p className="malumot">{t("QoshimchaMalumotKiriting")}</p>
              <textarea
                placeholder={`${t("EloningizTavsifiniYozing")}...`}
                cols="30"
                rows="10"
                {...register("comment")}
                className={`${errors.bathroom_count && "validation"} textarea`}
              ></textarea>
              <div className="about-user-dacha">
                <InputValue
                  inputValue={t("ReklamaBeruvchiNomi")}
                  width="90%"
                  height="65px"
                  type="text"
                  margin="0"
                  formProps={register("advertiser_name")}
                  plusClass={errors.advertiser_name && "validation"}
                />
                <InputValue
                  inputValue={t("Tel")}
                  width="90%"
                  height="65px"
                  type="number"
                  margin="0 70px"
                  formProps={register("phone")}
                  plusClass={errors.phone && "validation"}
                />
              </div>
              <div className="all-price">
                <div className="about-data">
                  <InputValue
                    inputValue={t("IshKunlarida1")}
                    height="65px"
                    widght="300px"
                    type="number"
                    width="350px"
                    formProps={register("cost")}
                    plusClass={`${
                      errors.cost && "validation"
                    } home-input-style`}
                  />
                  <div className="about-data1">
                    <InputValue
                      inputValue={t("DamOlishKunlarida1")}
                      height="65px"
                      width="350px"
                      type="number"
                      formProps={register("weekday_cost")}
                      plusClass={`${
                        errors.weekday_cost && "validation"
                      } home-input-style`}
                    />
                  </div>
                  <div className="dacha-valuta">
                    <p style={{ marginBottom: "5px" }}>{t("Valyuta")}</p>
                    <div className="dollar">
                      <button
                        onClick={() => setCurrency("y.e")}
                        className={currency === "y.e" ? "active" : null}
                        type="button"
                      >
                        y.e
                      </button>
                      <button
                        onClick={() => setCurrency("uzs")}
                        className={currency === "uzs" ? "active" : null}
                        type="button"
                      >
                        uzs
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="dacha-button">
              <Button
                title={t("Ochirish")}
                showButton={true}
                width="170px"
                height="50px"
                background="none"
                color="green"
                border="1px solid green"
                margin="30px"
                type="button"
                onClickButton={() => setModalDelete(true)}
              />
              <Button
                title={t("Qoshish")}
                showButton={true}
                width="170px"
                height="50px"
                loading={loading}
                type="submit"
              />
            </div>
          </form>
          <Footer />
        </div>
      </div>
      {modalDelete ? <AddModal modalClose={setModalDelete} id={id} /> : null}
    </div>
  );
};

export default AddHome;
