import { Route, Routes, useLocation } from "react-router-dom";
import { useState, lazy } from "react";
import { switchHeaders } from "./utils/switchHeader";
import { useQuery } from "react-query";
import { ToastContainer } from 'react-toastify';

// Services 
import UserService from "./services/auth.service";
import AuthService from "./services/user.service";

// Utils
import SuspenseLazy from "./utils/suspense_lazy";
import NonExistError from "./components/profile/NonExistError";
import Header from "./components/header/header";

// Map Components
import Map from "./components/Map/Map";

// Auth Components
// const Register = lazy(() => import("./components/register/Register"));
const Login = lazy(() => import("./components/login/Login"));
const Logout = lazy(() => import("./components/profile/Logout"));
const HeaderLogin = lazy(() => import("./components/login/HeaderLogin"));
const ProtectedRoute = lazy(() => import("./utils/protectedRoute"));

// Profile Components
const Contact = lazy(() => import("./components/contacts/contact"));
const Profile = lazy(() => import("./components/profile/Profile"));
const Messages = lazy(() => import("./components/profile/Messages"));
const Notifications = lazy(() => import("./components/profile/Notifications"));
const Settings = lazy(() => import("./components/profile/Settings"));
const Friends = lazy(() => import("./components/profile/Friends"));
const UserPhotos = lazy(() => import("./components/profile/UserPhotos"));
const AddUserPhotos = lazy(() => import("./components/profile/AddUserPhotos"));
const FindFriends = lazy(() => import("./components/profile/FindFriends"));

// Home Page
const Home = lazy(() => import("./components/home/Home"));

// Error Components 
const Error = lazy(() => import("./components/errors/Error"));

// Businesses Components
const UnitBusiness = lazy(() => import("./components/businesses/UnitBusiness"));
const Yelper = lazy(() => import("./components/profile/Yelper"));
const WriteReview = lazy(() => import("./components/profile/WriteReview"));
const BusinessHome = lazy(() => import("./components/businesses/BusinessHome"));
const Search = lazy(() => import("./components/search/search"));
const BizUserPhotos = lazy(() =>
  import("./components/businesses/BusinessesPhotos/BizUserPhotos")
);
const Order = lazy(() => import("./components/order/Order"));
const BizAttributes = lazy(() => import("./components/businesses/BizAttributes/BizAttributes"));

// Menu Components
const Menu = lazy(() => import("./components/Menu/Menu"));

const App = () => {
  const [currentUser, setCurrentUser] = useState(null);
  let location = useLocation();

  const { isSuccess, isError, error, isLoading } = useQuery(
    ["currentUser"],
    () => UserService.getUser(),
    {
      onSuccess: (data) => {
        setCurrentUser(data);
      },
    }
  );

  const logout = () => {
    AuthService.logout();
    setCurrentUser(undefined);
  };

  return (
    <div className="App">
      {switchHeaders(
        "/login",
        HeaderLogin,
        location,
        Header,
        currentUser,
        logout
      )}
      <ToastContainer />

      <Routes>

        {/* Auth Components */}
        <Route path="/login" element={<SuspenseLazy element={<Login />} />} />
        
        {/* Profile Components */}
        <Route path="/user_photos" element={<ProtectedRoute ><SuspenseLazy element={<UserPhotos />}></SuspenseLazy></ProtectedRoute>}/>
        <Route path="/user_photos/add" element={<ProtectedRoute><SuspenseLazy element={<AddUserPhotos />} /></ProtectedRoute>}/>
        <Route path="/profile/messages" element={<ProtectedRoute><SuspenseLazy element={<Messages />} /></ProtectedRoute>}/>
        <Route path="/profile/find-friends" element={<ProtectedRoute><SuspenseLazy element={<FindFriends />} /></ProtectedRoute>}/>
        <Route path="/profile/notifications" element={<ProtectedRoute><SuspenseLazy element={<Notifications />} /></ProtectedRoute>}/>
        <Route path="/profile" element={<ProtectedRoute><SuspenseLazy element={<Profile />} /></ProtectedRoute>}/>
        <Route path="/profile/account_settings" element={<ProtectedRoute><SuspenseLazy element={<Settings />} /></ProtectedRoute>}/>
        <Route path="/profile/logout" element={<ProtectedRoute><SuspenseLazy element={<Logout />} /></ProtectedRoute>}/>
        <Route path="/profile/friends" element={<ProtectedRoute><SuspenseLazy element={<Friends />} /></ProtectedRoute>}/>
        <Route path="/contacts/:contact_id" element={<ProtectedRoute><SuspenseLazy element={<Contact />}/></ProtectedRoute>}/>
        <Route path="/profile/nonexisted" element={<ProtectedRoute><NonExistError /></ProtectedRoute>} />
        <Route path="/user_details" element={<ProtectedRoute><SuspenseLazy element={<Yelper />} /></ProtectedRoute>}/>

        {/* Business Components */}
        <Route path="/order" element={<ProtectedRoute><SuspenseLazy element={<Order />} /></ProtectedRoute>}/>
        <Route path="/biz_user_photos" element={<ProtectedRoute><SuspenseLazy element={<BizUserPhotos />} /></ProtectedRoute>}/>
        <Route path="/search" element={<ProtectedRoute><SuspenseLazy element={<Search />} /></ProtectedRoute>} />
        <Route path="/biz" element={<ProtectedRoute><SuspenseLazy element={<BusinessHome />} /></ProtectedRoute>}/>
        <Route path="/biz/:business_name" element={<ProtectedRoute><SuspenseLazy element={<UnitBusiness />} /></ProtectedRoute> }/>
        <Route path="/writereview" element={<ProtectedRoute><SuspenseLazy element={<WriteReview />} /></ProtectedRoute>}/>
        <Route path="/biz_attributes" element={<ProtectedRoute><SuspenseLazy element={<BizAttributes />} /></ProtectedRoute>}/>

        {/* Map Components */}
        <Route path="/map/directions/:business_address" element={<ProtectedRoute><SuspenseLazy element={<Map />} /></ProtectedRoute>} />

        {/* Error Components */}
        <Route path="*" element={<SuspenseLazy element={<Error />} />} />

        {/* Menu Components */}
        <Route path="/menu/:menu_name" element={<ProtectedRoute><SuspenseLazy element={<Menu />} /></ProtectedRoute>}/>

        {/* Home Components */}
        <Route path="/" element={<SuspenseLazy element={<ProtectedRoute><SuspenseLazy element={<Home />} /></ProtectedRoute>} />} />
      </Routes>
    </div>
  );
};
export default App;
