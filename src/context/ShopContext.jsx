import { createContext, useState } from "react";
import PropTypes from "prop-types";
import { all_products } from "../assets";
export const ShopContext = createContext(null);
// import { useEffect } from "react";

const getDefaultCart = () => {
  let cart = {};
  for (let index = 0; index < all_products.length + 1; index++) {
    cart[index] = 0;
  }
  return cart;
};
export const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());

  // const addToCart = (itemId) => {
  //   setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  //   console.log(cartItems);
  // };
  const addToCart = (itemId) => {
    setCartItems((prev) => {
      const updatedCart = { ...prev, [itemId]: prev[itemId] + 1 };
      // console.log(updatedCart); // Log the updatedCart
      return updatedCart; // Return the updatedCart to setCartItems
    });
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = all_products.find((prod) => prod.id === Number(item));
        totalAmount += itemInfo.new_price * cartItems[item];
      }
    }
    return totalAmount;
  };

  const getTotalCartItems = () => {
    let totalItems = 0;

    for (const item in cartItems) {
      if (cartItems[item] > 0) totalItems += cartItems[item];
    }

    return totalItems;
  };

  // const removeFromCart = (itemId) => {
  //   setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  // };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => {
      const updatedCart = { ...prev, [itemId]: prev[itemId] - 1 };
      // console.log(updatedCart); // Log the updatedCart
      return updatedCart; // Return the updatedCart to setCartItems
    });
  };

  // useEffect(() => {
  //   console.log("CartItems after update:", cartItems);
  // }, [cartItems]);

  const contextValue = {
    all_products,
    cartItems,
    getTotalCartAmount,
    addToCart,
    removeFromCart,
    getTotalCartItems,
  };
  // console.log("Context Value:", contextValue);

  // console.log(cartItems);
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

ShopContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
