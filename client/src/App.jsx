import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";
import Basket from "./pages/Basket";
import Wishlist from "./pages/Wishlist";
import NoPage from "./pages/NoPage";
import AddPage from "./pages/AddPage";
import Detail from "./pages/Detail";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="/Basket" element={<Basket />} />
            <Route path="/Wishlist" element={<Wishlist />} />
            <Route path="/AddPage" element={<AddPage />} />
            <Route path="/Detail/:id" element={<Detail />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
