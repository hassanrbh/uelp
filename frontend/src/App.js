import { Route, Routes, useLocation } from "react-router-dom";
import { useState, useEffect , lazy } from "react";
import { switchHeaders } from "./utils/switchHeader";
import { useQuery } from "react-query";

import UserService from "./services/auth.service";
import AuthService from "./services/user.service";
import SuspenseLazy from "./utils/suspense_lazy";
import NonExistError from "./components/profile/NonExistError"

import Header from "./components/header/header";
const  UnitBusiness = lazy(() => import("./components/businesses/UnitBusiness"))
const  Contact = lazy(() => import("./components/contacts/contact"));
const  Home = lazy(() => import("./components/home/Home"));
const  Login = lazy(() => import("./components/login/Login"));
const  HeaderLogin = lazy(() => import("./components/login/HeaderLogin"));
const  Error = lazy(() => import("./components/errors/Error"));
// const  Register = lazy(() => import("./components/register/Register"));
const  ProtectedRoute = lazy(() => import("./utils/protectedRoute"));
const  Yelper = lazy(() => import("./components/profile/Yelper"));
const  Profile = lazy(() => import("./components/profile/Profile"));
const  Messages = lazy(() => import("./components/profile/Messages"));
const  Notifications = lazy(() => import("./components/profile/Notifications"));
const  Settings = lazy(() => import("./components/profile/Settings"));
const  Friends = lazy(() => import("./components/profile/Friends"));
const  Logout = lazy(() => import("./components/profile/Logout"));
const  WriteReview = lazy(() => import("./components/profile/WriteReview"));
const  BusinessHome = lazy(() => import("./components/businesses/BusinessHome"));
const  Search = lazy(() => import("./components/search/search"));

const App = () => {
  const [currentUser, setCurrentUser] = useState(null);
  let location = useLocation();

  const {isSuccess, isError, error, isLoading} = useQuery(["currentUser"], () => UserService.getUser(), {
    onSuccess: (data) => {
      setCurrentUser(data);
    },
  });

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
      <Routes>
        <Route path="/login" element={<SuspenseLazy element={<Login />}/>}/>
        <Route path="/profile/messages" element={<ProtectedRoute>
            <SuspenseLazy element={<Messages />}/>
          </ProtectedRoute>
        }/>
        <Route path="/profile/notifications" element={<ProtectedRoute>
            <SuspenseLazy element={<Notifications />}/>
          </ProtectedRoute>
        }/>
        <Route path="/profile" element={<ProtectedRoute>
            <SuspenseLazy element={<Profile />}/>
          </ProtectedRoute>
        }/>
        <Route path="/profile/account_settings" element={<ProtectedRoute>
            <SuspenseLazy element={<Settings />}/>
          </ProtectedRoute>
        }/>
        <Route path="/profile/logout" element={<SuspenseLazy element={<Logout />}/>}/>
        <Route path="/profile/friends" element={<ProtectedRoute>
          <SuspenseLazy element={<Friends />}/>
        </ProtectedRoute>} />
        <Route path="/search" element={<SuspenseLazy element={<Search />}/>}/>
        <Route path="/biz" element={<SuspenseLazy element={<BusinessHome />}/>} />
        <Route path="/biz/:business_name" element={<SuspenseLazy element={<UnitBusiness />}/>}/>
        <Route path="/profile/writereview" element={<SuspenseLazy element={<WriteReview />}/>}/>
        <Route path="/contacts/:contact_id" element={<SuspenseLazy element={<Contact />}/>}/>
        <Route path="/profile/nonexisted" element={<NonExistError />} />
        <Route path="/user_details" element={<SuspenseLazy element={<Yelper />} />} />
        <Route path="/" element={<SuspenseLazy element={<Home />}/>} />
        <Route path="*" element={<SuspenseLazy element={<Error />}/>} />
      </Routes>
    </div>
  );
};
export default App;
