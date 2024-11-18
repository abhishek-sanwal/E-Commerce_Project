import { createContext, useContext, useEffect, useState } from "react";

import PropTypes from "prop-types";
import { products } from "../assets/frontend_assets/assets";
import { toast } from "react-toastify";

const shopContext = createContext();

function ShopContextProvider({ children }) {
  const currency = "$";
  const deliveryFee = "10";

  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [cartItems, setCartItems] = useState({});
  const [totalCartItems, setTotalCartItems] = useState(0);

  //  Add product to cart
  async function addToCart(productId, size) {
    if (!size) {
      toast.error("Select a product Size");
      return;
    }
    // Deep Clone
    let newCartProducts = structuredClone(cartItems);

    // Don't use dot notation as we have to use variables so use bracket notation.
    // Set product id if it doesn't exist
    newCartProducts[productId] = newCartProducts?.[productId] ?? {};

    // Increase Product Size_count by 1.
    newCartProducts[productId][size] =
      (newCartProducts[productId]?.[size] ?? 0) + 1;

    setCartItems(newCartProducts);
    toast.success("Added to cart");
  }

  // Count total products in cart.

  // cartItems{
  //   "aaa":{
  //     M:1,
  //     L:1,
  //     S:1,
  //   },
  //   "aaavv:{
  //     M:2,
  //     L:3,
  //     S:1,
  //   };
  // 1+1+1+2+3+1
  // }
  async function countTotalProductsInCart() {
    // Fetch Keys/properties from object
    const value = Object.keys(cartItems).reduce(
      (acc, key) =>
        acc +
        // sum of all object values
        Object.values(cartItems[key]).reduce((total, val) => val + total, 0),
      0
    );

    setTotalCartItems(value);
  }

  useEffect(
    function () {
      countTotalProductsInCart();
    },
    [cartItems]
  );

  console.log(totalCartItems, cartItems);
  return (
    <shopContext.Provider
      value={{
        products,
        deliveryFee,
        currency,
        search,
        setSearch,
        showSearch,
        setShowSearch,
        cartItems,
        addToCart,
        totalCartItems,
      }}
    >
      {children}
    </shopContext.Provider>
  );
}

function useShopContext() {
  const context = useContext(shopContext);
  if (!context)
    throw new Error(
      "Called in Child component. If needed shift to its parent component."
    );

  return context;
}

ShopContextProvider.propTypes = {
  children: PropTypes.node,
};

// eslint-disable-next-line react-refresh/only-export-components
export { ShopContextProvider, useShopContext };
