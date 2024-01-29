import { useContext } from "react";
import "./cartItems.scss";
import { ShopContext } from "../../context/ShopContext";
import { remove_icon } from "../../assets";

export const CartItems = () => {
  const {
    getTotalCartAmount,
    all_products,
    cartItems,
    removeFromCart,
  } = useContext(ShopContext);
  return (
    <div className="cart-items">
      <div className="format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      <div>
        <hr />
        {all_products.map((e, i) => {
          //   console.log("Mapped Product:", e);

          if (cartItems[e.id] > 0) {
            // console.log("CartItems", cartItems);
            // console.log("hello");

            return (
              <div className="items-format format-main" key={i}>
                <img src={e.image} alt="" className="prod-icon" />
                <p>{e.name}</p>
                <p>${e.new_price}</p>
                <button className="items-quantity">{cartItems[e.id]}</button>
                <p>${e.new_price * cartItems[e.id]}</p>
                <img
                  src={remove_icon}
                  alt="Remove Icon"
                  onClick={() => removeFromCart(e.id)}
                  className="remove-icon"
                />
              </div>
            );
          }

          return null; // or an empty fragment <></> if you want to ensure a valid JSX structure
        })}
        <div className="checkout-section">
          <div className="cartitems-down">
            <div className="items-total">
              <h1>Cart Total</h1>
              <div></div>
              <div className="cart-total-items">
                <p>Subtotal</p>
                <p>${getTotalCartAmount()}</p>
              </div>
              <hr />
              <div className="cart-total-items">
                <p>Shipping Fee</p>
                <p>Free</p>
              </div>
              <hr />
              <div className="cart-total-items">
                <h3>Total</h3>
                <h3>${getTotalCartAmount()}</h3>
              </div>
              <button>Proceed To Checkout</button>
            </div>
          </div>
          <div className="promo-code">
            <p>Enter a promo code.</p>
            <div className="promo-box">
              <input type="text" placeholder="Promo Code" />
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
