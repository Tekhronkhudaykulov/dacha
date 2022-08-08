import "./assets/globalStyle/globalStyle.scss";
import Login from "./components/Form/Login/Login";
import HeaderContainer from "./containers/headerContainer/HeaderContainer";
import { useLayoutEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
  useNavigate,
  Navigate,
} from "react-router-dom";
import RestoreProfile from "./components/Form/RestoreProfile/RestoreProfile";
import SignUp from "./components/Form/SignUp/SignUp";
import AboutUs from "./containers/mainContainer/Main/AboutUs";
import Use from "./containers/mainContainer/Main/Use";
import SearchHome from "./components/Dacha/SearchHome";
import Rules from "./components/PagesNavigation/Rules/Rules";
import Profile from "./components/PagesNavigation/Profle/Profile";
import User from "./components/PagesNavigation/User/User";
import Payment from "./components/PagesNavigation/Payment/Payment";
import AddHome from "./components/Dacha/AddHome";
import RenameHome from "./components/Dacha/RenameHome";
import AboutHome from "./components/Dacha/AboutHome";
import ViewHome from "./components/Dacha/ViewHome";
import "react-toastify/dist/ReactToastify.css";
import Sms from "./components/Form/Sms/Sms";
import SmsRecoverPassword from "./components/Form/Sms/SmsRecoverPassword";
import PasswordRecover from "./components/Form/SignUp/PasswordRecover";
import AdvertiseCottage from "./components/PagesNavigation/Payment/AdvertiseCottage";

function RequireAuth({ children }) {
  const token = localStorage.getItem("@token");
  const isTokenAvailable = token != null && token != "";
  let location = useLocation();

  if (!isTokenAvailable) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}

const Wrapper = ({ children }) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children;
};

function App() {
  return (
    <BrowserRouter>
      <Wrapper>
        <Routes>
          <Route>
            <Route path={"/"} element={<HeaderContainer />} />
            <Route path={"/searchHome"} element={<SearchHome />} />
            <Route path={"/about"} element={<AboutUs />} />
            <Route path={"/use"} element={<Use />} />
            <Route path={"/rules"} element={<Rules />} />
            <Route
              path={"/profile"}
              element={
                <RequireAuth>
                  <Profile />
                </RequireAuth>
              }
            />
            <Route
              path={"/user"}
              element={
                <RequireAuth>
                  <User />
                </RequireAuth>
              }
            />
            <Route path={"/payment"} element={<Payment />} />
            <Route path={"/advertiseCottage/:id"} element={<AdvertiseCottage />} />

            <Route
              path={"/addHome"}
              element={
                <RequireAuth>
                  <AddHome />
                </RequireAuth>
              }
            />
            <Route
              path={"/renameHome/:id"}
              element={
                <RequireAuth>
                  <RenameHome />
                </RequireAuth>
              }
            />
            <Route path={"/aboutHome/:id"} element={<AboutHome />} />
            <Route path={"/viewHome"} element={<ViewHome />} />
          </Route>
          <Route>
            <Route exact path={"/login"} element={<Login />} />
            <Route path={"/restoreProfile"} element={<RestoreProfile />} />
            <Route path={"/sms"} element={<Sms />} />
            <Route path={"/signUp"} element={<SignUp />} />
            <Route path={"/smsRecover"} element={<SmsRecoverPassword />} />
            <Route path={"/passwordRecover"} element={<PasswordRecover/>} />
          </Route>
        </Routes>
      </Wrapper>
    </BrowserRouter>
  );
}

export default App;
