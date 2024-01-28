import { useContext } from "react";
import PropTypes from "prop-types";
import "./shopCategory.scss";
import { ShopContext } from "../../context/ShopContext";
import { dropDown } from "../../assets";
import { Item } from "../../components";
export const ShopCategory = (props) => {
  const { all_products } = useContext(ShopContext);

  return (
    <div className="shopcategory">
      <img
        className="shopcategory-banner"
        src={props.banner}
        alt="Page Banner"
      />
      <div className="shopcategory-indexSort">
        <p>
          Showing 1-
          {
            all_products.filter((item) => item.category === props.category)
              .length
          }{" "}
          out of {all_products.length} products
        </p>
        <div className="shopcategory-sort">
          Sort by <img src={dropDown} alt="Drop Down Icon" />
        </div>
      </div>
      <div className="shopcategory-products">
        {all_products.map((item, i) => {
          console.log(`${props.category} ${item.category}`);
          return props.category === item.category ? (
            <Item
              key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          ) : null;
        })}
      </div>
      <div className="shopcategory-loadmore">Explore More</div>
    </div>
  );
};

ShopCategory.propTypes = {
  banner: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};
