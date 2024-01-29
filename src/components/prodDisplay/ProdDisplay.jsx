import "./prodDisplay.scss";
import PropTypes from "prop-types";

import { start_icon, star_dull_icon } from "../../assets";
import { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";

export const ProdDisplay = (props) => {
  const { product } = props;
  const { addToCart } = useContext(ShopContext);
  return (
    <div className="product-display">
      <div className="display-left">
        <div className="img-list">
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
        </div>
        <div className="display-img">
          <img className="main-img" src={product.image} alt="" />
        </div>
      </div>
      <div className="display-right">
        <h1>{product.name}</h1>
        <div className="star">
          <img src={start_icon} alt="" />
          <img src={start_icon} alt="" />
          <img src={start_icon} alt="" />
          <img src={start_icon} alt="" />
          <img src={star_dull_icon} alt="" />
          <p>(112)</p>
        </div>
        <div className="prices">
          <div className="old-price">${product.old_price}</div>
          <div className="new-price">${product.new_price}</div>
        </div>
        <div className="prod-description">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident
          impedit placeat cumque corporis aliquam numquam, voluptates laborum
          non obcaecati tempore.
        </div>
        <div className="right-size">
          <h1>Select Size</h1>
          <div className="sizes">
            <span>S</span>
            <span>M</span>
            <span>L</span>
            <span>XL</span>
            <span>XXL</span>
          </div>
        </div>
        <button
          onClick={() => {
            addToCart(product.id);
          }}
        >
          Add to Cart
        </button>
        <p className="category">
          <span>Category: </span>
          Women, T-Shirt, Crop Top
        </p>
        <p className="category">
          <span>Tags: </span>
          Modern, Latest
        </p>
      </div>
    </div>
  );
};

ProdDisplay.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    old_price: PropTypes.number.isRequired,
    new_price: PropTypes.number.isRequired,
    id: PropTypes.number,
    // Add other properties as needed
  }).isRequired,
};
