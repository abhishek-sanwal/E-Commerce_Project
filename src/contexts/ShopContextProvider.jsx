import { createContext, useContext, useState } from "react";

import PropTypes from "prop-types";
import { products } from "../assets/frontend_assets/assets";

const shopContext = createContext();

function ShopContextProvider({ children }) {
  const currency = "$";
  const deliveryFee = "10";

  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [cartProducts, setCartProducts] = useState({});

  async function addToCart(productId, size) {
    // Deep Clone
    const newCartProducts = structuredClone(cartProducts);

    // Don't use dot notation as we have to use variables so use bracket notation.
    // Set product id if it doesn't exist
    newCartProducts[productId] = newCartProducts?.[productId] ?? {};

    // Increase Product Size_count by 1.
    newCartProducts[productId][size] =
      (newCartProducts[productId]?.[size] ?? 0) + 1;

    setCartProducts(newCartProducts);
  }

  console.log(cartProducts);
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
        cartProducts,
        addToCart,
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
