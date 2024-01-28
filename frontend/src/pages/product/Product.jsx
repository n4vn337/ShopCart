import { useContext } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../../context/ShopContext";
import "./product.scss";
import { Breadcrum, ProdDisplay } from "../../components/";

export const Product = () => {
  const { all_products } = useContext(ShopContext);
  const { productId } = useParams();
  console.log("productId:", productId);

  let product;
  for (const item of all_products) {
    if (item.id === Number(productId)) {
      product = item;
      break;
    }
  }

  return (
    <div>
      <Breadcrum product={product} />
      <ProdDisplay product={product} />
    </div>
  );
};
