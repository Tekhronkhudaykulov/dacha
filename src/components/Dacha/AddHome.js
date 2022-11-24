import React, { useEffect, useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import requests from "../../helpers/requests";
import * as yup from "yup";
import HeaderNavbarTop from "../../components/Navbar/HeaderNavbarTop/HeaderNavbarTop";
import { Title } from "../Title/Title";
import { InputValue, InputValue2 } from "../Input/FormInput/Input";
import PhoneInput from "react-phone-input-2";
import Select from "./Select";
import "./Search.scss";
import Footer from "../Footer/Footer";
import { Button } from "../Buttons/Header/Buttons";
import ImgInput from "../Input/ImgInput/ImgInput";
import { useDispatch, useSelector } from "react-redux";
import { dachaCategory } from "../../redux/actions/Dacha/DachaCategoryAction";
import { dachaTypeList } from "../../redux/actions/Dacha/DachaTypeListAction";
import { comfortItem } from "../../redux/actions/Dacha/CompoftsAction";
import { useForm, Controller } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { SearchChecbox } from "../Input/SearchInput/SearchInput";
import { useTranslation } from "react-i18next";
import HelmetReact from "../Helmet";

const schema = yup.object({
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
});

const AddHome = () => {
  const [active, setActive] = useState("");

  const { t, i18n } = useTranslation();

  const [modal, setModal] = useState(false);

  const [activeButton, setActiveButton] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(dachaCategory());
    dispatch(dachaTypeList());
    dispatch(comfortItem());
  }, []);

  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const navigate = useNavigate();

  const category = useSelector((state) => state.categoryDacha.dachaCategory);
  const type = useSelector((state) => state.typeList.dachaTypeList);
  const { comfortsList } = useSelector((state) => state.comforts);

  const addHome = (payload) => (dispatch) => {
    dispatch({ type: "add_home_start", payload });
    requests
      .addHome(payload)
      .then(({ data }) => {
        dispatch({ type: "add_home_success", payload: data });
        alert("Dacha qo`shildi !");
        navigate("/user");
      })
      .catch(({ response }) => {
        let message = (response && response.data.message) || "Login error";
        dispatch({ type: "add_home_error", payload: message });
        alert(t("addHomeVerification"));
        navigate("/payment");
      });
  };

  const [type_id, setTypeId] = useState();

  const [comforts, setComforts] = useState([]);
  const [images, setImages] = useState([]);
  const [currency, setCurrency] = useState("so`m");

  const onSubmit = (data) => {
    const payload = {
      ...data,
      type_id,
      comforts,
      image_path: images.map((item) => item.originFileObj),
      currency,
    };
    dispatch(addHome(payload));
    // console.log({
    //   ...data,
    //   type_id,
    // });
  };

  const { loading } = useSelector((state) => state.addHome);

  useEffect(() => {
    if (type.length != 0) {
      setTypeId(type[0].id);
    }
  }, [type]);

  return (
    <div>
      <HelmetReact name="Dacha Rent.uz" description={t("DachaQoshish")} />
      <HeaderNavbarTop />
      <div className="main">
        <div className="main-content">
          <Title showButton={true} title={t("DachaQoshish")} margin="0" />
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="home-input">
              <InputValue
                inputValue={t("SarlavhaniKiriting")}
                placeholder="Masalan, Dacha sotiladi"
                widghtInput="250px"
                type="text"
                margin="0"
                formProps={register("name", { required: true })}
              />
              {errors.name && (
                <p className="validation">Malumotlarni kiriting!</p>
              )}
              <Select
                category={category}
                formProps={register("category_id", {
                  required: true,
                })}
              />
              {errors.category_id && (
                <p className="validation">Malumotlarni kiriting!</p>
              )}
            </div>
            <div className="add-home-button">
              {type.map((item, key) => (
                <>
                  <button
                    key={key}
                    onClick={() => setTypeId(item.id)}
                    className={type_id == item.id && "active-button"}
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
                    placeholder="10"
                    type="number"
                    {...register("room_count")}
                  />
                </div>
                {errors.room_count && (
                  <p className="validation">Malumotlarni kiriting!</p>
                )}
                <div className="add-input-item">
                  <p className="count">{t("people")}</p>
                  <input
                    placeholder="10"
                    type="number"
                    {...register("capacity")}
                  />
                </div>
                {errors.room_count && (
                  <p className="validation">Malumotlarni kiriting!</p>
                )}
                <div className="add-input-item">
                  <p className="count">{t("room")}</p>
                  <input
                    placeholder="10"
                    type="number"
                    {...register("bathroom_count")}
                  />
                </div>
                {errors.room_count && (
                  <p className="validation">Malumotlarni kiriting!</p>
                )}
              </div>
            </div>
            <div
              className="all-category"
              style={{
                display: "flex",
                marginLeft: "80px",
                justifyContent: "space-around",
              }}
            ></div>
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
                className="textarea"
                cols="30"
                rows="10"
                {...register("comment")}
              ></textarea>
              {errors.room_count && (
                <p className="validation">Malumotlarni kiriting!</p>
              )}

              <div className="about-user-dacha">
                <InputValue
                  inputValue={t("ReklamaBeruvchiNomi")}
                  placeholder="Ism"
                  width="90%"
                  height="65px"
                  type="text"
                  margin="0"
                  formProps={register("advertiser_name")}
                />
                {errors.advertiser_name && (
                  <p className="validation">Malumotlarni kiriting!</p>
                )}
                <div className="login-input">
                  <p>{t("Tel")}</p>
                  <div className="user-name">
                    <Controller
                      control={control}
                      name="phone"
                      rules={{ required: true }}
                      render={({ field: { ref, ...field } }) => (
                        <PhoneInput
                          {...field}
                          country={"uz"}
                          defaultMask={"(..) ...-..-.."}
                          placeholder="+998"
                          alwaysDefaultMask={true}
                          name="phone"
                          inputExtraProps={{
                            ref,
                            required: true,
                            autoFocus: true,
                          }}
                        />
                      )}
                    />
                  </div>
                  {errors.phone && (
                    <p className="validation">
                      Telefon raqam 12ta harfdan iborat bolishi kerak!
                    </p>
                  )}
                </div>
              </div>
              <div className="all-price">
                <div className="about-data">
                  {type_id === 4 ? (
                    <>
                      <InputValue2
                        inputValue={t("Price")}
                        placeholder={currency === "y.e" ? "1000 $" : "1000 uzs"}
                        height="65px"
                        widght="300px"
                        type="number"
                        width="350px"
                        plusClass="home-input-style"
                        formProps={register("cost")}
                      />
                      <div className="about-data1">
                        <InputValue
                          inputValue={t("Price")}
                          value="0"
                          placeholder={
                            currency === "y.e" ? "1000 $" : "1000 uzs"
                          }
                          height="65px"
                          width="350px"
                          type="number"
                          plusClass="home-input-style"
                          formProps={register("weekday_cost")}
                        />
                      </div>
                    </>
                  ) : (
                    <>
                      <InputValue
                        inputValue={t("IshKunlarida1")}
                        placeholder={currency === "y.e" ? "1000 $" : "1000 uzs"}
                        height="65px"
                        widght="300px"
                        type="number"
                        width="350px"
                        plusClass="home-input-style"
                        formProps={register("cost")}
                      />
                      <div className="about-data1">
                        <InputValue
                          inputValue={t("DamOlishKunlarida1")}
                          placeholder={
                            currency === "y.e" ? "1000 $" : "1000 uzs"
                          }
                          height="65px"
                          width="350px"
                          type="number"
                          plusClass="home-input-style"
                          formProps={register("weekday_cost")}
                        />
                      </div>
                    </>
                  )}

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
                        onClick={() => setCurrency("so`m")}
                        className={currency === "so`m" ? "active" : null}
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
      {/* {modal ? <ModalAddHomePage modalClose={setModal} /> : null} */}
    </div>
  );
};

export default AddHome;
