import React, { useState, useEffect } from "react";
import HeaderNavbarTop from "../../Navbar/HeaderNavbarTop/HeaderNavbarTop";
import { Title } from "../../Title/Title";
import { Input } from "../../Input/FormInput/Input";
import "./Profile.scss";
import { SearchChecbox } from "../../Input/SearchInput/SearchInput";
import "./Profile.scss";
import { Button } from "../../Buttons/Header/Buttons";
import { Modal } from "../../Modal/Modal";
import ImgInput from "../../Input/ImgInput/ImgInput";
import { userUpdate } from "../../../redux/actions/user/UserUpdateAction";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import ProfileImg from "../../../assets/img/profilImg.jpeg";

import { baseUrl } from "../../../helpers/requests";
import { useNavigate } from "react-router-dom";
const Profile = () => {
  const userInfor = useSelector((state) => state.user.userSite);
  console.log(userInfor);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (userInfor) {
      Object.entries(userInfor).map((item) => ({
        [item[0]]: item[1],
      }));
      reset(userInfor);
    }
  }, [userInfor]);

  const onSubmit = (data) => {
    dispatch(
      userUpdate({
        ...data,
        image: photo,
        isIntermediary,
        _method: "PUT",
      }),
      navigate("/user")
    );
  };

  const [modal, setModal] = useState(false);
  // const [image, setImages] = useState([]);

  const dispatch = useDispatch();

  const { loading } = useSelector((state) => state.userUpdate);

  const convertBase64 = (file, element) => {
    const fileReader = new FileReader();

    fileReader.addEventListener("load", function (e) {
      element.src = e.target.result;
    });

    fileReader.readAsDataURL(file);
  };

  const [value, setValue] = useState([]);
  const [photo, setPhoto] = useState("");
  const [isIntermediary, setIsIntermediary] = useState(0);

  return (
    <div>
      <HeaderNavbarTop />
      <div className="main">
        <div className="main-content media-style">
          <Title showButton={true} title="Profilni tahrirlash" margin="0" />
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="profile-input">
              <Input
                showButton={true}
                inputName="Ism-familiya"
                margin="0"
                formProps={register("name")}
                addCLass="profile-input-child"
              />
              <Input
                showButton={true}
                inputName="Foydalanuvchining tel raqami"
                margin="0 100px"
                inputType="number"
                formProps={register("phone")}
                addCLass="profile-input-child"
              />
            </div>
            {/* <ImgInput setImages={setImages} images={image} /> */}
            <div
            className="media-style-div"
              style={{
                display: "flex",
                alignItems: "center",
                marginTop: "30px",
              }}
            >
              <div className="factory-item-img">
                <label
                className="media-label"
                  style={{
                    color: "#727272",
                    fontSize: "20px",
                    fontWeight: "bold",
                  }}
                  for="file-input"
                >
                  Rasmni yuklash uchun ustiga bosing!
                </label>
                <input
                  multiple
                  name="Ads[imageFiles][]"
                  onchange="loadImage(event)"
                  type="file"
                  id="file-input"
                  className="img-input"
                  style={{ display: "none" }}
                  onChange={(e) => {
                    convertBase64(
                      e.target.files[0],
                      document.querySelectorAll("#img_file")[0]
                    );
                    setPhoto(e.target.files[0]);
                    setValue(e.target.files[0]);
                  }}
                />
              </div>
              {userInfor.image === null ? (
                <img
                  style={{
                    width: "150px",
                    height: "150px",
                    objectFit: "contain",
                    // border: "1px solid black",
                    marginLeft: "30px",
                  }}
                  src={ProfileImg}
                  id="img_file"
                  alt="img "
                />
              ) : (
                <img
                  style={{
                    width: "150px",
                    height: "150px",
                    objectFit: "contain",
                    // border: "1px solid black",
                    marginLeft: "30px",
                  }}
                  src={`${baseUrl}/${userInfor.image}`}
                  id="img_file"
                  alt="img "
                />
              )}
            </div>
            <div className="checkbox-all" style={{ marginTop: "50px" }}>
              <SearchChecbox
                label="use"
                id="use"
                title="Vositachi"
                onChange={() => setIsIntermediary(1)}
              />
              <SearchChecbox
                label="notuse"
                id="notuse"
                title="Vositachi emas"
                width="300px"
                onChange={() => setIsIntermediary(0)}
              />
              <p
                onClick={() => setModal(true)}
                style={{ margin: "0" }}
                className="verifation"
              >
                Verifikatsiya nima?
              </p>
            </div>
            <div className="profile-button">
              <Button
                showButton={true}
                title="Saqlash"
                width="220px"
                height="50px"
                cursor="pointer"
                loading={loading}
              />
            </div>
          </form>
        </div>
      </div>
      {modal ? <Modal setOpenModal={setModal} /> : null}
    </div>
  );
};

export default Profile;
