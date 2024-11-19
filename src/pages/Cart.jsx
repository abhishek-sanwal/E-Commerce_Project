import CartTotal from "../components/CartTotal";
import Title from "../components/Title";
import { assets } from "../assets/frontend_assets/assets";
import { useEffect } from "react";
import { useShopContext } from "../contexts/ShopContextProvider";

function Cart() {
  const {
    products,
    currency,
    cartItems,
    navigate,
    updateQuantity,
    addOrder,
    cartData,
    setCartData,
  } = useShopContext();

  // Convert cartItems{
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

  //to CartData
  // [{_id:"aaa",size:"M",quantity:1},{_id:"aaa",size:"L",quantity:1},
  //   {_id:"aaa",size:"S",quantity:1},{_id:"aaavv",size:"M",quantity:2},
  //   {_id:"aaavv",size:"L",quantity:3},{{_id:"aaavv",size:"S",quantity:1}},

  // ]

  function getCartData() {
    setCartData(
      Object.keys(cartItems).reduce(
        (arr, key) =>
          arr.concat(
            Object.keys(cartItems[key]).map((sizeKey) => ({
              _id: key,
              size: sizeKey,
              quantity: cartItems[key][sizeKey],
            }))
          ),
        []
      )
    );
  }

  useEffect(
    function () {
      getCartData();
    },
    [cartItems]
  );

  console.log(cartData);
  return (
    <section>
      <div className="border-t pt-14">
        <div className="text-2xl mb-3">
          <Title text1={"Your"} text2={"Cart"} />
        </div>
        <div>
          {cartData.map((item, index) => {
            const productData = products.find(
              (product) => product._id === item._id
            );
            console.log(item.quantity);
            return (
              <div
                key={index}
                className="py-3 border-b border-t text-gray-700 grid  grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4"
              >
                <div className="flex items-start gap-6">
                  <img
                    src={productData.image[0]}
                    alt=""
                    className="w-16 sm:w-20"
                  />
                  <div>
                    <p className="text-sm sm:text-lg font-medium">
                      {productData.name}
                    </p>

                    <div className="flex items-center gap-5 mt-2">
                      <p className=" ">
                        {currency}
                        {productData.price}
                      </p>
                      <p className="px-2 sm:px-3 sm:py-1 border bg-slate-50 ">
                        {item.size}
                      </p>
                    </div>
                  </div>
                </div>

                <input
                  onChange={(e) => {
                    e.target.value === "" || e.target.value < 0
                      ? null
                      : updateQuantity(
                          item._id,
                          item.size,
                          Number(e.target.value)
                        );
                  }}
                  className="border  max-w-10 sm:max-w-20 px-1 sm:px-2 py-1 "
                  type="number"
                  min={1}
                  defaultValue={item.quantity}
                />
                <img
                  onClick={() => updateQuantity(item._id, item.size, 0)}
                  src={assets.bin_icon}
                  alt="Delete"
                  className="w-4 mr-4 sm:w-5 cursor-pointer"
                />
              </div>
            );
          })}
        </div>

        <div className="flex justify-end my-20">
          <div className="w-full sm:w-[450px]">
            <CartTotal />

            <div className="w-full text-end">
              <button
                onClick={() => {
                  addOrder(); // Call addOrder to move items to orders state
                  navigate("/place-order");
                }}
                className="my-8 px-8 py-3 bg-black text-white text-sm"
              >
                PROCEED TO CHECKOUT
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cart;
