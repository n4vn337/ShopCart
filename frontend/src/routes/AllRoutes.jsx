import { Routes, Route } from "react-router-dom";
import { Cart, LoginSignup, Product, Shop, ShopCategory } from "../pages";
import { kids_banner, mens_banner, womens_banner } from "../assets";

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Shop />}></Route>
      <Route
        path="/mens"
        element={<ShopCategory category="men" banner={mens_banner} />}
      />
      <Route
        path="/womens"
        element={<ShopCategory category="women" banner={womens_banner} />}
      />
      <Route
        path="/kids"
        element={<ShopCategory category="kid" banner={kids_banner} />}
      />
      <Route path="/product" element={<Product />}>
        <Route path=":prodId" element={<Product />} />
      </Route>
      <Route path="/cart" element={<Cart />} />
      <Route path="/login" element={<LoginSignup />} />
    </Routes>
  );
};
