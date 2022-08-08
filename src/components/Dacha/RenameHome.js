import React, { useEffect, useState, useMemo } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
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
import { baseUrl } from "../../helpers/requests";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { fetchIdUser } from "../../redux/actions/user/HomeIdAction";
import { AddModal } from "../Modal/Modal";
import { dachaUpdate } from "../../redux/actions/Dacha/DachaCreateAction";
import { deleteDacha } from "../../redux/actions/Dacha/DeleteDachaAction";
import { SearchChecbox } from "../Input/SearchInput/SearchInput";

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

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(dachaCategory());
    dispatch(dachaTypeList());
    dispatch(comfortItem());
    dispatch(fetchIdUser(id));
  }, []);
  const { loading } = useSelector((state) => state.userId);

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

  const [type_id, setTypeId] = useState(1);
  const [comforts, setComforts] = useState([]);
  const [images, setImages] = useState([]);
  const [currency, setCurrency] = useState("uzs");

  return (
    <div>
      <HeaderNavbarTop />
      {loading ? (
        <p></p>
      ) : (
        <div className="main">
          <div className="main-content">
            <Title showButton={true} title="Dachani tahrirlash" margin="0" />
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="home-input">
                <InputValue
                  inputValue="Sarlavhani kiriting"
                  placeholder="Masalan, Dacha sotiladi"
                  widghtInput="250px"
                  type="text"
                  margin="0"
                  formProps={register("name_uz", { required: true })}
                />
                {errors.name_uz && (
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
                      {item.name_uz}
                    </button>
                  </>
                ))}
              </div>
              <div className="all-add-input">
                <p className="filter">Filterlar</p>
                <div className="add-input">
                  <div className="add-input-item">
                    <p className="count">Hammomlar soni</p>
                    <input type="number" {...register("room_count")} />
                    {errors.room_count && (
                      <p className="validation">Malumotlarni kiriting!</p>
                    )}
                  </div>
                  <div className="add-input-item">
                    <p className="count">Odamlar soni</p>
                    <input type="number" {...register("capacity")} />
                    {errors.capacity && (
                      <p className="validation">Malumotlarni kiriting!</p>
                    )}
                  </div>
                  <div className="add-input-item">
                    <p className="count">Xonalar soni</p>
                    <input type="number" {...register("bathroom_count")} />
                    {errors.bathroom_count && (
                      <p className="validation">Malumotlarni kiriting!</p>
                    )}
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
              ></div>
              <div className="home-category">
                {comfortsList.map((item) => (
                  <div className="home-category-items">
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
                <p className="malumot">Qo`shimcha ma`lumot kiriting</p>
                <textarea
                  placeholder="E'loningiz tavsifini yozing ...."
                  className="textarea"
                  cols="30"
                  rows="10"
                  // {...register("comment")}
                ></textarea>
                {/* {errors.comment && (
                  <p className="validation">Malumotlarni kiriting!</p>
                )} */}

                <div className="about-user-dacha">
                  <InputValue
                    inputValue="Reklama beruvchi nomi"
                    width="90%"
                    height="65px"
                    type="text"
                    margin="0"
                    formProps={register("advertiser_name")}
                  />
                  {errors.advertiser_name && (
                    <p className="validation">Malumotlarni kiriting!</p>
                  )}

                  <InputValue
                    inputValue="Telefon nomer"
                    width="90%"
                    height="65px"
                    type="number"
                    margin="0 70px"
                    // formProps={register("phone")}
                  />
                  {/* {errors.phone && (
                    <p className="validation">Malumotlarni kiriting!</p>
                  )} */}
                </div>
                <div className="all-price">
                  <div className="about-data">
                    <InputValue
                      inputValue="Narxi (ish kunlarida)"
                      height="65px"
                      widght="300px"
                      type="number"
                      width="350px"
                      formProps={register("cost")}
                    />
                    {errors.cost && (
                      <p className="validation">Malumotlarni kiriting!</p>
                    )}

                    <div className="about-data1">
                      <InputValue
                        inputValue="Narxi (dam olish kunlarida)"
                        height="65px"
                        width="350px"
                        type="number"
                        // formProps={register("weekday_cost")}
                      />
                      {/* {errors.weekday_cost && (
                        <p className="validation">Malumotlarni kiriting!</p>
                      )} */}
                    </div>
                    <div className="dacha-valuta">
                      <p>Vayuta</p>
                      <div className="dollar">
                        <button
                          onClick={() => setCurrency("uzs")}
                          className={currency === "uzs" ? "active" : null}
                          type="button"
                        >
                          y.e
                        </button>
                        <button
                          onClick={() => setCurrency("y.e")}
                          className={currency === "y.e" ? "active" : null}
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
                  title="O`chirish"
                  showButton={true}
                  padding="10px 70px"
                  background="none"
                  color="green"
                  border="1px solid green"
                  margin="20px"
                  type="button"
                  onClickButton={() => setModalDelete(true)}
                />
                <Button
                  title="Saqlash"
                  showButton={true}
                  padding="10px 70px"
                  // onClickButton={() => setModal(true)}
                />
              </div>
            </form>
            <Footer />
          </div>
        </div>
      )}

      {/* {modal ? <ModalAddHomePage modalClose={setModal} /> : null} */}
      {modalDelete ? (
        <AddModal
          closeModal={setModalDelete}
          onClick={() => {
            dispatch(deleteDacha(id));
            navigate("/user");
          }}
        />
      ) : null}
    </div>
  );
};

export default AddHome;
