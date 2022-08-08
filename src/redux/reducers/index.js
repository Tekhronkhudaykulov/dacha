import { combineReducers } from "redux";
import authReducer from "./auth/authReducer";
import TopCardReducer from "./Card/TopCardReducer";
import HomeIdReducer from "./user/HomeIdReducer";
import userReducer from "./user/userReducer";
import DachaCreate from "./Dacha/DachaCreateReducer";
import DachaCategoryReducer from "./Dacha/DachaCategoryReducer";
import ComfortsReducer from "./Dacha/ComfortsReducer";
import DachaTypeListReducer from "./Dacha/DachaTypeListReducer";
import SearchDachaReducer from "./Dacha/SearchDachaReducer";
import UserDachaListReducer from "./user/UserDachaListReducer";
import DeleteDachaReducer from "./Dacha/DeleteDachaReducer";
import UserUpdateReducer from "./user/UserUpdateReducer";
import PreimumDachaReducer from "./Dacha/PreimumDachaReducer";
import FavouriteReducer from "./Card/FavouriteReducer";
import RatingDachaReducer from "./Dacha/RatingDachaReducer";
import DachaLevelReducer from "./Dacha/DachaLevelReducer";

const reducer = combineReducers({
  register: authReducer,
  topCard: TopCardReducer,
  user: userReducer,
  userId: HomeIdReducer,
  addHome: DachaCreate,
  categoryDacha: DachaCategoryReducer,
  comforts: ComfortsReducer,
  typeList: DachaTypeListReducer,
  search: SearchDachaReducer,
  userList: UserDachaListReducer,
  deleteDacha: DeleteDachaReducer,
  userUpdate: UserUpdateReducer,
  premium: PreimumDachaReducer,
  favourite: FavouriteReducer,
  ratingDacha: RatingDachaReducer,
  dachaLevelReyting: DachaLevelReducer
});

export default reducer;
