import Title from "./Title";
import { useShopContext } from "../contexts/ShopContextProvider";

function CartTotal() {
  const { currency, deliveryFee, getCartAmount } = useShopContext();

  return (
    <div className="w-full">
      <div className="text-2xl">
        <Title text1={"CART"} text2={"TOTAL"} />
      </div>

      <div className="flex flex-col gap-2 mt-2 text-sm ">
        <div className="flex justify-between">
          <p>Subtotal</p>
          <p>
            {currency} {getCartAmount()}.00
          </p>
        </div>
        <div className="flex justify-between">
          <p>Shipping Fee</p>
          <p>
            {currency} {deliveryFee}.00
          </p>
        </div>
        <div className="flex justify-between">
          <p>Total</p>
          <p>
            {currency}
            {getCartAmount() === 0 ? 0 : getCartAmount() + deliveryFee}.00
          </p>
        </div>
      </div>
    </div>
  );
}

export default CartTotal;
