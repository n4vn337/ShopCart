import PropTypes from "prop-types";
import "./breadcrum.scss";
import { breadcrum_arrow } from "../../assets";

export const Breadcrum = (props) => {
  const { product } = props;

  return (
    <div className="breadcrum">
      HOME
      <img src={breadcrum_arrow} alt="Arrow Icon" />
      SHOP
      <img src={breadcrum_arrow} alt="Arrow Icon" />
      {product.category}
      <img src={breadcrum_arrow} alt="Arrow Icon" />
      {product.name}
    </div>
  );
};

Breadcrum.propTypes = {
  product: PropTypes.shape({
    category: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};
