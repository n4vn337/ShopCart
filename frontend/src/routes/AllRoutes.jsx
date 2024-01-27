import { Routes, Route } from "react-router-dom";
import { Cart, LoginSignup, Product, Shop, ShopCategory } from "../pages";

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Shop />}></Route>
      <Route path="/mens" element={<ShopCategory category="mens" />} />
      <Route path="/womens" element={<ShopCategory category="womens" />} />
      <Route path="/kids" element={<ShopCategory category="kids" />} />
      <Route path="/product" element={<Product />}>
        <Route path=":prodId" element={<Product />} />
      </Route>
      <Route path="/cart" element={<Cart />} />
      <Route path="/login" element={<LoginSignup />} />
    </Routes>
  );
};
