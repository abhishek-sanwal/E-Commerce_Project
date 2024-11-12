import { createContext, useContext } from "react";

import PropTypes from "prop-types";
import { products } from "../assets/frontend_assets/assets";

const shopContext = createContext();

function ShopContextProvider({ children }) {
  const currency = "$";
  const deliveryFee = "10";

  return (
    <shopContext.Provider
      value={{
        products,
        deliveryFee,
        currency,
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

export { ShopContextProvider, useShopContext };
