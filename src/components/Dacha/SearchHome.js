import React, { useEffect, useState } from "react";
import {
  Input,
  SearchInput,
  SearchChecbox,
} from "../Input/SearchInput/SearchInput";
import HeaderNavbarTop from "../Navbar/HeaderNavbarTop/HeaderNavbarTop";
import Groups from "../../assets/icon/groups.png";
import Money from "../../assets/icon/attach_money.png";
import Footer from "../Footer/Footer";
import { Title } from "../Title/Title";
import "./Search.scss";
import Tabs from "../Tabs/Tabs";
import { useParams, useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { comfortItem } from "../../redux/actions/Dacha/CompoftsAction";
import { dachaTypeList } from "../../redux/actions/Dacha/DachaTypeListAction";
import { useForm } from "react-hook-form";
import { searchDacha } from "../../redux/actions/Dacha/SearchDachaAction";
import SearchSelect from "../Input/SearchInput/SearchSelect";
import { dachaCategory } from "../../redux/actions/Dacha/DachaCategoryAction";

const SearchHome = () => {
  const dispatch = useDispatch();

  let [searchParams, setSearchParams] = useSearchParams();

  const params = Object.fromEntries([...searchParams]);

  useEffect(() => {
    const currentParams = Object.fromEntries([...searchParams]);
    if (currentParams.page === undefined) {
      setSearchParams({ ...currentParams, page: 1, per_page: 10 });
    }
    dispatch(searchDacha(searchParams));
  }, [searchParams]);

  useEffect(() => {
    dispatch(comfortItem());
    dispatch(dachaTypeList());
    dispatch(dachaCategory());
    dispatch(searchDacha(searchParams));
  }, []);

  const comfortsList = useSelector((state) => state.comforts.comfortsList);

  const category = useSelector((state) => state.categoryDacha.dachaCategory);

  const [typeId, setTypeId] = useState(null);

  const [comfordIds, setComfordIds] = useState([]);
  const [category_id, setCategory_id] = useState([]);

  const { register, handleSubmit, watch } = useForm({
    defaultValues: params,
  });

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
        type_id: params.type_id,
        category_id: category_id,
        type_id: typeId,
      })
    );
  };

  return (
    <>
      <HeaderNavbarTop />
      <div className="main-content">
        <Title title="Dacha qidirish" showButton={true} />
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            widthImg="30px"
            heightImg="30px"
            padding="5px 20px"
            margin="25px"
            width="90%"
            formProps={register("name")}
          />
          <div className="input-flex">
            <SearchSelect
              category={category}
              onChange={(e) => setCategory_id(e.target.value)}
            />
            <SearchInput
              inputName="Odamlar soni"
              inputImg={Groups}
              inputPlaceholder="12"
              inputType="number"
              width="265px"
              formValue={register("capacity")}
            />
            <SearchInput
              inputName="Narx (kamida)"
              inputImg={Money}
              inputPlaceholder="1,000,000"
              inputType="number"
              width="265px"
              formValue={register("cost_from")}
            />
            <SearchInput
              inputName="Narx (ko`pi bilan)"
              inputImg={Money}
              inputPlaceholder="2,000,000"
              inputType="number"
              width="265px"
              formValue={register("cost_to")}
            />
          </div>
          <div className="input-checkbox">
            {comfortsList.map((comfort) => (
              <SearchChecbox
                label={comfort.id}
                id={comfort.id}
                title={comfort.name_uz}
                onChange={(isChecked) => {
                  if (comfordIds.includes(comfort.id)) {
                    setComfordIds((prevState) =>
                      prevState.filter((id) => id != comfort.id)
                    );
                  } else {
                    setComfordIds([...comfordIds, comfort.id]);
                  }
                }}
              />
            ))}
          </div>
          <input type="submit" hidden />
        </form>
        <Tabs type_id={params.type_id} typeId={setTypeId} />
        <Footer />
      </div>
    </>
  );
};

export default SearchHome;
