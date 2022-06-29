import {
  Route,
  Routes,
  useLocation
} from "react-router-dom";
import Header from "./components/header/header";
import Home from "./components/home/Home";
import Login from "./components/login/Login";
import HeaderLogin from "./components/login/HeaderLogin";
import { switchHeaders } from "./utils/switchHeader";

const App = () => {
  let location = useLocation();
  return (
    <div className="App">
      {switchHeaders("/login", HeaderLogin, location, Header)}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  )
}
export default App;
