import {
  Route,
  Routes, 
} from "react-router-dom";
import Header from "./components/header/header";
import Home from "./components/home/Home";
import Login from "./components/login/Login";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  )
}
export default App;
