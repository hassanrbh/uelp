import {
  Route,
  Routes, 
  BrowserRouter
} from "react-router-dom";
import Header from "./components/header/header";
import Home from "./components/home/Home";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />

        <Routes>
          <Route path="/" element={<Home />} /> 
        </Routes>
      </div>
    </BrowserRouter>
  )
}
export default App;
